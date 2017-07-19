//======================================================================
// Camera.js
//======================================================================

/*:
 * @plugindesc 增加遊戲畫面的聚焦功能
 * @author 羊羽
 * 
 * @param zoom
 * @desc 縮放的比例（0-2:Number）
 * @default 2
 * 
 * @param duration
 * @desc 縮放到達指定比例所需的時間（0<:Number）
 * @default 60
 * 
 * @param speed
 * @desc 平移畫面的速度（1-6:Number）
 * @default 5
 * 
 * @help
 * 【插件指令】
 * Camera focus event <event_id>    //關注事件（參數省略時指調用事件）
 * Camera focus player              //關注角色
 * Camera clear                     //清除關注
 * Camera setting initialize        //初始化更改
 * Camera setting zoom <value>      //更改縮放大小（0-2:Number）
 * Camera setting duration <value>  //更改縮放時間（0<:Number）
 * Camera setting speed <value>     //更改畫面平移速度（1-6:Number）
 * 
 */

(function() {
  //==================================================================
  // 插件指令
  //==================================================================
  var parameters = PluginManager.parameters('Camera');
  var ZOOM = Number(parameters["zoom"] || 2);
  var DURATION = Number(parameters["duration"] || 60);
  var SPEED = Number(parameters["speed"] || 5);

  //==================================================================
  // 事件指令
  //==================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Camera') {
      switch (args[0]) {
        case 'focus':
          switch(args[1]) {
            case 'event':
              var id = args[2] ? args[2] : this.eventId();
              var event = $gameMap.event(id);
              $gameMap.focus(event.x, event.y, function() {
                var x = event.screenX();
                var y = event.screenY();
                $gameScreen.startClearZoom(DURATION);
                $gameScreen.startZoom(x, y, ZOOM, DURATION);
              });
            break;
            case 'player':
              $gameMap.focus($gamePlayer.x, $gamePlayer.y, function() {
                var x = $gamePlayer.screenX();
                var y = $gamePlayer.screenY();
                $gameScreen.startClearZoom(DURATION);
                $gameScreen.startZoom(x, y, ZOOM, DURATION);
              });
            break;
            default:
              throw Error('Camera plugin command error.');
          }
          break;
        case 'clear':
          $gameMap.focus($gamePlayer.x, $gamePlayer.y, function() {
            $gameScreen.startClearZoom(DURATION);
          });
          break;
        case 'setting':
          switch(args[1]) {
            case 'initialize':
              ZOOM = Number(parameters["Zoom"] || 2);
              DURATION = Number(parameters["Duration"] || 60);
              SPEED = Number(parameters["Speed"] || 5);
            break;
            case 'zoom':
              ZOOM = Number(args[2]);
            break;
            case 'duration':
              DURATION = Number(args[2]);
            break;
            case 'speed':
              SPEED = Number(args[2]);
            break;
            default:
              throw Error('Camera plugin command error.');
          }
          break;
      }
    }
  };

  //==================================================================
  // 插件主體
  //==================================================================
  var _Game_Screen_clearZoom = Game_Screen.prototype.clearZoom;
  Game_Screen.prototype.clearZoom = function() {
    _Game_Screen_clearZoom.call(this);
    this._zoomXTarget = 0;
    this._zoomYTarget = 0;
  };

  Game_Screen.prototype.startZoom = function(x, y, scale, duration) {
    this._zoomXTarget = x;
    this._zoomYTarget = y;
    this._zoomScaleTarget = scale;
    this._zoomDuration = duration;
  };

  Game_Screen.prototype.startClearZoom = function(duration) {
    this.startZoom(0, 0, 1, duration);
  };

  Game_Screen.prototype.updateZoom = function() {
    if (this._zoomDuration > 0) {
      var d = this._zoomDuration;
      this._zoomX = (this._zoomX * (d - 1) + this._zoomXTarget) / d;
      this._zoomY = (this._zoomY * (d - 1) + this._zoomYTarget) / d;
      this._zoomScale = (this._zoomScale * (d - 1) + this._zoomScaleTarget) / d;
      this._zoomDuration--;
    }
  };

  var _Game_Map_initialize = Game_Map.prototype.initialize;
  Game_Map.prototype.initialize = function() {
    _Game_Map_initialize.call(this);
    this._focusing = false;
    this._focusCallback = null;
    this._displayTargetX = 0;
    this._displayTargetY = 0;
  };

  Game_Map.prototype.focusing = function() {
    return this._focusing;
  };

  Game_Map.prototype.displayTargetX = function() {
    return this._displayTargetX;
  };

  Game_Map.prototype.displayTargetY = function() {
    return this._displayTargetY;
  };

  Game_Map.prototype.focus = function(x, y, callback) {
    this._focusCallback = callback;
    this._displayTargetX = x - this.screenTileX() / 2;
    this._displayTargetY = y - this.screenTileY() / 2;
    var endX = this.width() - this.screenTileX();
    var endY = this.height() - this.screenTileY();
    this._displayTargetX = endX < 0 ? endX / 2 : this._displayTargetX.clamp(0, endX);
    this._displayTargetY = endY < 0 ? endY / 2 : this._displayTargetY.clamp(0, endY);
    this._focusing = true;
  };

  var _Game_Map_update = Game_Map.prototype.update;
  Game_Map.prototype.update = function(sceneActive) {
    _Game_Map_update.call(this, sceneActive);
    this.updateFocus();
  };

  Game_Map.prototype.updateFocus = function() {
    if(this._focusing) {
      var distanceX = this.displayTargetX() - this.displayX();
      var distanceY = this.displayTargetY() - this.displayY();
      if(distanceY > 0)
        this.startScroll(2, distanceY, SPEED);
      else if(distanceX < 0)
        this.startScroll(4, -distanceX, SPEED);
      else if(distanceX > 0)
        this.startScroll(6, distanceX, SPEED);
      else if(distanceY < 0)
        this.startScroll(8, -distanceY, SPEED);
      if(!this.isScrolling() && this._focusCallback) {
        this._focusCallback.call(this);
        this._focusCallback = null;
        this._focusing = false;
      }
    }
  };
})();
