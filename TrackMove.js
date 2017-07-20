//======================================================================
// TrackMove.js
//======================================================================

/*:
 * @plugindesc 移動模式的擴展
 * @author 羊羽
 * 
 * @param player tag
 * @desc 主角的預設標記（[0, inf)Z:Number）
 * @default 1
 * 
 * @param follower tag
 * @desc 主角跟隨者的預設標記（[0,inf)Z:Number）
 * @default 2
 * 
 * @param default tag
 * @desc 預設單位標記（[0, inf)Z:Number）
 * @default 0
 * 
 * @param default track
 * @desc 預設追蹤的標記（[0, inf)Z:Number）
 * @default 0
 * 
 * @param default move
 * @desc 預設無目標時的移動模式（Refer to help:String）
 * @default random
 * 
 * @param default vision range
 * @desc 預設視野的範圍（[0,inf)Z:Number）
 * @default 5
 * 
 * @param default miss range
 * @desc 預設放棄追蹤的範圍（[0,inf)Z:Number）
 * @default 6
 * 
 * @param default found balloon
 * @desc 發現目標時的心情符號（[1,inf)Z:Number）
 * @default 1
 * 
 * @param default miss balloon
 * @desc 放棄追蹤時的心情符號（[1,inf)Z:Number）
 * @default 8
 * 
 * @help
 * 【插件指令】
 * TrackMove tag <tag>                  //設定本單位的標記
 * TrackMove track <tag>                //設定要追蹤的標記
 * TrackMove visionRange <range>        //設定視野的範圍
 * TrackMove missRange <range>          //設定放棄追蹤的範圍
 * TrackMove foundBalloon <balloon_id>  //設定發現目標時的心情符號
 * TrackMove missBalloon <balloon_id>   //設定放棄追蹤時的心情符號
 * TrackMove defaultMove <move>         //設定無目標時的移動模式
 * 
 * （※ 以上不設定時，皆採預設值。）
 * 
 * 【移動腳本】自定義移動路線的腳本部分
 * this.track();                        //追蹤目標
 * this.miss();                         //強制放棄追蹤
 * 
 * 【特殊參考值】
 * 插件常數 default move 的參考值：
 * stand: 固定不動
 * random: 隨機行走
 * 
 * 
 */
(function(){
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters('TrackMove');
  var PLAYER_TAG = Number(parameters["player tag"] || 1);
  var FOLLOWER_TAG = Number(parameters["follower tag"] || 2);
  var DEFAULT_TAG = Number(parameters["default tag"] || 0);
  var DEFAULT_MOVE = String(parameters["default move"] || "random");
  var DEFAULT_VISION_RANGE = Number(parameters["default vision range"] || 6);
  var DEFAULT_MISS_RANGE = Number(parameters["default miss range"] || 5);
  var DEFAULT_FOUND_BALLON = Number(parameters["default found balloon"] || 1);
  var DEFAULT_MISS_BALLON = Number(parameters["default miss balloon"] || 8);

  //==================================================================
  // 插件指令
  //==================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args){
    _Game_Interpreter_pluginCommand.call(this, command, args);
    var event = $gameMap.event(this.eventId());
    if (command === 'TrackMove'){
      switch (args[0]){
        case 'tag':
          event.trackMove.tag = Number(args[1]);
          break;
        case 'track':
          event.trackMove.track = Number(args[1]);
          break;
        case 'visionRange':
          event.trackMove.visionRange = Number(args[1]);
          break;
        case 'missRange':
          event.trackMove.missRange = Number(args[1]);
          break;
        case 'foundBalloon':
          event.trackMove.foundBalloon = Number(args[1]);
          break;
        case 'missBalloon':
          event.trackMove.missBalloon = Number(args[1]);
          break;
        case 'defaultMove':
          event.trackMove.defaultMove = String(args[1]);
          break;
      }
    }
  };

  //==================================================================
  // 化簡定義的距離函數
  //==================================================================
  var distance = function(character1, character2) {
    return $gameMap.distance(character1.x, character1.y, character2.x, character2.y);
  };

  //==================================================================
  // 重載 Game_Character 類別
  //------------------------------------------------------------------
  // 增加資料成員、以及主要的函數群
  //==================================================================
  var _Game_Character_initMembers = Game_Character.prototype.initMembers;
  Game_Character.prototype.initMembers = function() {
    _Game_Character_initMembers.call(this);
    this.trackMove = {
      tag: DEFAULT_TAG,
      track: -1,
      visionRange: DEFAULT_VISION_RANGE,
      missRange: DEFAULT_MISS_RANGE,
      foundBalloon: DEFAULT_FOUND_BALLON,
      missBalloon: DEFAULT_MISS_BALLON,
      defaultMove: DEFAULT_MOVE,
      target: null
    };
  };

  Game_Character.prototype.checkTarget = function(character){
    var target = this.trackMove.target;
    if(this.trackMove.target === character) {
      return;
    }
    else {
      var characterDistance = distance(this, character);
      if(target){
        var targetDistance = distance(this, target);
        //miss target
        if(targetDistance > this.trackMove.missRange) {
          this.miss();
        }
        //change target
        if(characterDistance < targetDistance) {
          this.found(character);
        }
      }
      //found new target
      if(characterDistance < this.trackMove.visionRange) {
        this.found(character);
      }
    }
  };

  Game_Character.prototype.found = function(target) {
    this.turnTowardCharacter(target);
    if(this.trackMove.target != target) {
      this.requestBalloon(this.trackMove.foundBalloon);
    }
    this.trackMove.target = target;
  };

  Game_Character.prototype.miss = function() {
    this.requestBalloon(this.trackMove.missBalloon);
    this.trackMove.target = null;
  };

  Game_Character.prototype.track = function() {
    if(this.trackMove.target) {
      this.moveTowardCharacter(this.trackMove.target);
    }
    else {
      switch(this.trackMove.defaultMove) {
        case "stand":
          break;
        case "random":
          this.moveRandom();
          break;
      }
    }
  };

  //==================================================================
  // 重載 Game_Player, Game_Follower 類別
  //------------------------------------------------------------------
  // 設定 Player 及 Follower 預設標籤
  //==================================================================
  var _Game_Player_initialize = Game_Player.prototype.initialize;
  Game_Player.prototype.initialize = function() {
    _Game_Player_initialize.call(this);
    this.trackMove.tag = PLAYER_TAG;
  };

  var _Game_Follower_initialize = Game_Follower.prototype.initialize;
  Game_Follower.prototype.initialize = function(memberIndex) {
    _Game_Follower_initialize.call(this, memberIndex);
    this.trackMove.tag = FOLLOWER_TAG;
  };

  //==================================================================
  // 重載 Scene_Map 類別
  //------------------------------------------------------------------
  // 增加更新函數
  //==================================================================
  var _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
  Scene_Map.prototype.updateMain = function(){
    _Scene_Map_updateMain.call(this);
    this.updateTarckMove();
  };

  //==================================================================
  // 更新地圖上的追蹤狀況
  //==================================================================
  Scene_Map.prototype.updateTarckMove = function() {
    var trackers = $gameMap.events();
    $gamePlayer.followers().forEach(function(follower) {
      if(follower.isVisible()) {
        trackers.push(follower);
      }
    });
    trackers.forEach(function(tracker) {
      var targets = trackers.concat([$gamePlayer]);
      targets.forEach(function(target) {
        if(tracker.trackMove.track === target.trackMove.tag) {
          tracker.checkTarget(target);
        }
      });
    });
  };
})();
