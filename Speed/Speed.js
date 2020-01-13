//======================================================================
// Speed.js
//======================================================================

/*:
 * @plugindesc 速度調整
 * @author 羊羽
 * 
 * @param player speed
 * @desc 玩家速度（(0, inf)Z:Number）
 * @default 16
 * 
 * @param player dash speed
 * @desc 玩家跑步時的速度（(0, inf)Z:Number）
 * @default 32
 * 
 * @param dash transition
 * @desc 玩家跑步至極速的過渡幀數（[0, inf)Z:Number）
 * @default 0
 * 
 * @param max speed
 * @desc 允許的最高速度（(0, inf)Z:Number）
 * @default 128
 * 
 * @param min speed
 * @desc 允許的最低速度（(0, inf)Z:Number）
 * @default 2
 * 
 * @help
 * 【插件指令】
 * Speed set <speed> //設定事件的速度值
 * 
 * 【其他細節】
 * 速度的的值為 X 的話
 * 每 1 幀的時間，可移動的距離為 (X/256) 格
 * 走 1 格的距離，需要花的幀數為 (256/X) 幀
 * 幀數的單位為 (1/60) 秒
 * 所以，走 1 格的距離，共需要 (256/X) * (1/60) 秒
 * 
 * Publish by MIT License
 */
(function() {
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters('Speed');
  var PLAYER_SPEED = Number(parameters["player speed"] || 16);
  var PLAYER_DASH_SPEED = Number(parameters["player dash speed"] || 32);
  var DASH_TRANSITION = Number(parameters["dash transition"] || 0);
  var MAX_SPEED = Number(parameters["max speed"] || 128);
  var MIN_SPEED = Number(parameters["min speed"] || 2);

  //==================================================================
  // 插件指令
  //==================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    var event = $gameMap.event(this.eventId());
    if (command === "Speed") {
      switch (args[0]) {
        case "set":
          event.setSaveSpeed(args[1]);
          break;
      }
    }
  };

  //==================================================================
  // 設定玩家、跟隨者的速度
  //==================================================================
  var _Game_Player_initialize = Game_Player.prototype.initialize;
  Game_Player.prototype.initialize = function() {
    _Game_Player_initialize.call(this);
    this._moveSpeed = PLAYER_SPEED.clamp(MIN_SPEED, MAX_SPEED);
  };

  //==================================================================
  // 重載 Game_Event 的更新
  //------------------------------------------------------------------
  // 把本腳本的速度定義獨立於事件頁籤之上
  //==================================================================
  var _Game_Event_initMembers = Game_Event.prototype.initMembers;
  Game_Event.prototype.initMembers = function() {
    _Game_Event_initMembers.call(this);
    this._saveSpeed = null;
  };

  Game_Event.prototype.getSaveSpeed = function() {
    return this._saveSpeed;
  };

  Game_Event.prototype.setSaveSpeed = function(speed) {
    this._saveSpeed = speed;
  };

  var _Game_Event_setupPageSettings = Game_Event.prototype.setupPageSettings;
  Game_Event.prototype.setupPageSettings = function() {
    _Game_Event_setupPageSettings.call(this);
    if(this._saveSpeed) {
      this.setMoveSpeed(this._saveSpeed);
    }
  };

  //==================================================================
  // 增加記錄增長速度的參數
  //==================================================================
  var _Game_CharacterBase_initMembers = Game_CharacterBase.prototype.initMembers;
  Game_CharacterBase.prototype.initMembers = function() {
    _Game_CharacterBase_initMembers.call(this);
    this._dashingIncremental = 0;
  };

  //==================================================================
  // 重新定義跑步的速度
  //==================================================================
  var SPEED_DIFFERENCE = PLAYER_DASH_SPEED - PLAYER_SPEED;
  var INCREMENTAL = DASH_TRANSITION === 0 ? SPEED_DIFFERENCE : (SPEED_DIFFERENCE / DASH_TRANSITION);
  Game_CharacterBase.prototype.realMoveSpeed = function() {
    return Math.floor(this._moveSpeed + this._dashingIncremental).clamp(MIN_SPEED, MAX_SPEED);
  };

  Game_CharacterBase.prototype.dashingIncrementalUp = function() {
    if(this._dashingIncremental < SPEED_DIFFERENCE) {
      this._dashingIncremental += INCREMENTAL;
    }
  };

  Game_CharacterBase.prototype.dashingIncrementalDown = function() {
    if(this._dashingIncremental > 0) {
      this._dashingIncremental -= INCREMENTAL;
    }
  };

  //==================================================================
  // 重新定義行走動畫的等待時間
  //==================================================================
  Game_CharacterBase.prototype.animationWait = function() {
    return Math.floor(9 - Math.log2(this.realMoveSpeed())) * 3;
  };

  //==================================================================
  // 重新定義速度設定的函數
  //==================================================================
  Game_CharacterBase.prototype.setMoveSpeed = function(moveSpeed) {
    this._moveSpeed = Math.pow(2, moveSpeed).clamp(MIN_SPEED, MAX_SPEED);
  };

  //==================================================================
  // 重新定義每幀移動的距離
  //==================================================================
  Game_CharacterBase.prototype.distancePerFrame = function() {
    return this.realMoveSpeed() / 256;
  };

  //==================================================================
  // 重載 Scene_Map 類別
  //==================================================================
  var _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
  Scene_Map.prototype.updateMain = function() {
    _Scene_Map_updateMain.call(this);
    this.updatePlayerSpeed();
  };

  //==================================================================
  // 增加更新函數
  //==================================================================
  Scene_Map.prototype.updatePlayerSpeed = function() {
    if($gamePlayer.isDashing()) {
      $gamePlayer.dashingIncrementalUp();
    }
    else {
      $gamePlayer.dashingIncrementalDown();
    }
  };

})();