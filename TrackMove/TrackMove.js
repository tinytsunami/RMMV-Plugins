//======================================================================
// TrackMove.js
//======================================================================

/*:
 * @plugindesc 移動模式的擴展
 * @author 羊羽
 * 
 * @param player tag
 * @desc 主角的標記（[0, inf)Z:Number）
 * @default 2
 * 
 * @param follower tag
 * @desc 跟隨者單位標記（[0, inf)Z:Number）
 * @default 3
 * 
 * @param follower track
 * @desc 跟隨者單位追蹤的標記（[0, inf)Z:Number）
 * @default 2
 * 
 * @param follower move (no target)
 * @desc 跟隨者單位無目標時的移動模式（Refer to help:String）
 * @default random
 * 
 * @param follower toward player
 * @desc 當玩家移動時、追蹤玩家（[0, 1]Z:Boolean）
 * @default 1
 * 
 * @param follower vision range
 * @desc 跟隨者單位視野的範圍（[0,inf)Z:Number）
 * @default 5
 * 
 * @param follower miss range
 * @desc 跟隨者單位放棄追蹤的範圍（[0,inf)Z:Number）
 * @default 6
 * 
 * @param follower found balloon
 * @desc 跟隨者單位發現目標時的心情符號（[1,inf)Z:Number）
 * @default 1
 * 
 * @param follower miss balloon
 * @desc 跟隨者單位放棄追蹤時的心情符號（[1,inf)Z:Number）
 * @default 8
 * 
 * @param unit tag
 * @desc 其他單位標記（[0, inf)Z:Number）
 * @default 1
 * 
 * @param unit track
 * @desc 其他單位追蹤的標記（[0, inf)Z:Number）
 * @default 0
 * 
 * @param unit move (no target)
 * @desc 其他單位無目標時的移動模式（Refer to help:String）
 * @default random
 * 
 * @param unit vision range
 * @desc 其他單位視野的範圍（[0,inf)Z:Number）
 * @default 5
 * 
 * @param unit miss range
 * @desc 其他單位放棄追蹤的範圍（[0,inf)Z:Number）
 * @default 6
 * 
 * @param unit found balloon
 * @desc 其他單位發現目標時的心情符號（[1,inf)Z:Number）
 * @default 1
 * 
 * @param unit miss balloon
 * @desc 其他單位放棄追蹤時的心情符號（[1,inf)Z:Number）
 * @default 8
 * 
 * @param track rate
 * @desc 追蹤時隨機移動的機率（[0, 1]R:Number）
 * @default 0.2
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
 * 插件常數 follower/unit move 的參考值：
 * stand         固定不動
 * random        隨機行走
 *
 * p.s.由於不使用 this.track(); 就不會有效果，
 *     您可以將 unit 系列參數當作是 Event 的預設值。
 * 
 * 【其他細節】
 * 對於透明的跟隨者、事件不會處理
 * 對於暫時消除的事件不會處理
 * 對於透明的事件依然會處理
 * 對於主角不論透明與否皆會處理
 * 
 */
(function(){
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters('TrackMove');
  var PLAYER_TAG = Number(parameters["player tag"] || 2);
  var FOLLOWER_TAG = Number(parameters["follower tag"] || 3);
  var FOLLOWER_TRACK = Number(parameters["follower track"] || 2);
  var FOLLOWER_MOVE_NO_TARGET = String(parameters["follower move (no target)"] || "random");
  var FOLLOWER_TOWARD_PLAYER = Boolean(Number(parameters["follower toward player"] || 1));
  var FOLLOWER_VISION_RANGE = Number(parameters["follower vision range"] || 5);
  var FOLLOWER_MISS_RANGE = Number(parameters["follower miss range"] || 6);
  var FOLLOWER_FOUND_BALLOON = Number(parameters["follower found balloon"] || 1);
  var FOLLOWER_MISS_BALLOON = Number(parameters["follower miss balloon"] || 8);
  var UNIT_TAG = Number(parameters["unit tag"] || 1);
  var UNIT_TRACK = Number(parameters["unit track"] || 0);
  var UNIT_MOVE_NO_TARGET = String(parameters["unit move (no target)"] || "random");
  var UNIT_VISION_RANGE = Number(parameters["unit vision range"] || 5);
  var UNIT_MISS_RANGE = Number(parameters["unit miss range"] || 6);
  var UNIT_FOUND_BALLOON = Number(parameters["unit found balloon"] || 1);
  var UNIT_MISS_BALLOON = Number(parameters["unit miss balloon"] || 8);
  var TRACK_RATE = Number(parameters["track rate"] || 0.2) * 100;

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
      tag: UNIT_TAG,
      track: UNIT_TRACK,
      visionRange: UNIT_VISION_RANGE,
      missRange: UNIT_MISS_RANGE,
      foundBalloon: UNIT_FOUND_BALLOON,
      missBalloon: UNIT_MISS_BALLOON,
      defaultMove: UNIT_MOVE_NO_TARGET,
      target: null
    };
  };

  Game_Character.prototype.checkTarget = function(character){
    var target = this.trackMove.target;
    var characterDistance = distance(this, character);
    if(target){
      var targetDistance = distance(this, target);  
      //miss target
      if(targetDistance >= this.trackMove.missRange) {
        this.miss();
      }
      //change target
      else if(characterDistance < targetDistance) {
        this.found(character);
      }
      //target isn't visible
      else if(target.isTransparent()) {
        this.found(character);
      }
    }
    else {
      //found new target
      if(characterDistance <= this.trackMove.visionRange) {
        this.found(character);
      }
    }
  };

  Game_Character.prototype.found = function(target) {
    if(this.trackMove.target != target) {
      this.turnTowardCharacter(target);
      this.requestBalloon(this.trackMove.foundBalloon);
      this.trackMove.target = target;
    }
  };

  Game_Character.prototype.miss = function() {
    this.requestBalloon(this.trackMove.missBalloon);
    this.trackMove.target = null;
  };

  Game_Character.prototype.track = function() {
    if(this.trackMove.target) {
      if(Math.randomInt(100) < TRACK_RATE) {
        this.moveRandom();
      }
      else {
        this.moveTowardCharacter(this.trackMove.target);
      }
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
    this.trackMove = {
      tag: FOLLOWER_TAG,
      track: FOLLOWER_TRACK,
      visionRange: FOLLOWER_VISION_RANGE,
      missRange: FOLLOWER_MISS_RANGE,
      foundBalloon: FOLLOWER_FOUND_BALLOON,
      missBalloon: FOLLOWER_MISS_BALLOON,
      defaultMove: FOLLOWER_MOVE_NO_TARGET,
      target: null
    };
    this._moveDistance = 0;
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
  // 重載 Game_Follower 的更新
  //------------------------------------------------------------------
  // 分離 Follower 跟 Player 的速度關係
  //==================================================================
  var _Game_Follower_chaseCharacter = Game_Follower.prototype.chaseCharacter;
  Game_Follower.prototype.chaseCharacter = function(character) {
    if (FOLLOWER_TOWARD_PLAYER && !this.trackMove.target) {
      this._moveDistance = $gameMap.distance(this._x, this._y, character._x, character._y);
    }
  };

  Game_Follower.prototype.update = function() {
    Game_Character.prototype.update.call(this);
  };

  Game_Follower.prototype.updateStop = function() {
    if (this._locked) {
      this.resetStopCount();
    }
    Game_Character.prototype.updateStop.call(this);
    if (!this.isMoveRouteForcing()) {
      this.updateSelfMovement();
    }
  };

  Game_Follower.prototype.updateSelfMovement = function() {
    if (this.isNearTheScreen()) {
      if(this.checkStop(this.stopCountThreshold())) {
        if(this._moveDistance > 0) {
          this.moveTowardCharacter($gamePlayer);
          this._moveDistance--;
        }
        else {
          this.track();
        }
      }
    }
  };

  Game_Follower.prototype.stopCountThreshold = function() {
    return 30 * (5 - this.moveFrequency());
  };

  //==================================================================
  // 檢查事件是否被消除
  //==================================================================
  Game_Event.prototype.isErased = function() {
    return this._erased;
  };

  //==================================================================
  // 檢查跟隨者是否可見
  //==================================================================
  var _Game_Follower_isVisible = Game_Follower.prototype.isVisible;
  Game_Follower.prototype.isVisible = function() {
    var visible = _Game_Follower_isVisible.call(this);
    return visible && !this.isTransparent();
  };

  //==================================================================
  // 更新地圖上的追蹤狀況
  //==================================================================
  Scene_Map.prototype.updateTarckMove = function() {
    var trackers = $gameMap.events().filter(function(event) {
      return !event.isErased();
    });
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