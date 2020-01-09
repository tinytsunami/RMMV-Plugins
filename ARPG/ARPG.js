//======================================================================
// ARPG.js
//======================================================================

/*:
 * @plugindesc 使玩家可以在地圖上戰鬥，極小功能化的戰鬥腳本
 * @author 羊羽
 *
 * @param control key 
 * @desc 鍵盤控制鍵（Refer to help:String）
 * @default A, S, D, F
 *
 * @param follower skill count 
 * @desc 玩家隊友的技能持有數量（[0, inf)Z:Number）
 * @default 4
 *
 * @param actor damage range tile color 
 * @desc 玩家傷害地板的顏色（CSS format(color):String）
 * @default #FF3300
 *
 * @param actor recover range tile color 
 * @desc 玩家回復地板的顏色（CSS format(color):String）
 * @default #00FF33
 *
 * @param enemy damage range tile color 
 * @desc 怪物攻擊地板的顏色（CSS format(color):String）
 * @default #3300FF
 *
 * @param enemy recover range tile color 
 * @desc 怪物回復地板的顏色（CSS format(color):String）
 * @default #33FF00
 *
 * @param actor damage range tile cache count 
 * @desc 玩家攻擊地板的暫存精靈數量（[0, inf)Z:Number）
 * @default 50
 *
 * @param actor recover range tile cache count 
 * @desc 玩家回復地板的暫存精靈數量（[0, inf)Z:Number）
 * @default 50
 *
 * @param enemy damage range tile cache count 
 * @desc 怪物攻擊地板的暫存精靈數量（[0, inf)Z:Number）
 * @default 50
 *
 * @param enemy recover range tile cache count 
 * @desc 怪物回復地板的暫存精靈數量（[0, inf)Z:Number）
 * @default 50
 *
 * @param skill tiles margin 
 * @desc 技能作用地板的外邊距（[0, inf)Z:Number）
 * @default 4
 *
 * @param skill tiles opacity 
 * @desc 技能作用地板的不透明度（[0, 255]Z:Number）
 * @default 128
 *
 * @param status sprite margin 
 * @desc 角色血量、魔力條精靈的橫向外邊距（[0, inf)Z:Number）
 * @default 2
 *
 * @param status sprite width 
 * @desc 角色血量、魔力條精靈的寬度（[0, inf)Z:Number）
 * @default 5
 *
 * @param hp sprite color 
 * @desc 用於顯示角色血量精靈的顏色（CSS format(color):String）
 * @default #FF9900
 *
 * @param hp sprite background color 
 * @desc 用於顯示角色血量精靈的背景顏色（CSS format(color):String）
 * @default #AA3333
 *
 * @param mp sprite color 
 * @desc 用於顯示角色魔力精靈的顏色（CSS format(color):String）
 * @default #0099FF
 *
 * @param mp sprite background color 
 * @desc 用於顯示角色魔力精靈的背景顏色（CSS format(color):String）
 * @default #3333AA
 *
 * @param icon width 
 * @desc 定義的圖標寬度（[1, inf)Z:Number）
 * @default 32
 *
 * @param icon height 
 * @desc 定義的圖標長度（[1, inf)Z:Number）
 * @default 32
 *
 * @param keys sprites margin 
 * @desc 玩家操作按鍵精靈的外邊距（[0, inf)Z:Number）
 * @default 50
 *
 * @param keys sprite font size 
 * @desc 玩家操作按鍵精靈的字體大小（[1, 64]Z:Number）
 * @default 12
 *
 * @param keys sprite font x 
 * @desc 玩家操作按鍵精靈的字體橫向位置（[0, inf)Z:Number）
 * @default 18
 *
 * @param keys sprite font y 
 * @desc 玩家操作按鍵精靈的字體縱向位置（[0, inf)Z:Number）
 * @default 6
 *
 * @param arpgkey invalid opacity 
 * @desc 操作按鍵精靈對應道具不可使用時的透明度（[0, 255]Z:Number）
 * @default 64
 *
 * @param arpgkey valid opacity 
 * @desc 操作按鍵精靈對應道具正常時的透明度（[0, 255]Z:Number）
 * @default 255
 *
 * @param skill note regex 
 * @desc 技能資料庫註解解析的正則表達式（Refer to help:String）
 * @default /\$ARPG.*\S/
 *
 * @param evaluator 
 * @desc 戰鬥評估用的函數部件（Refer to help:String）
 * @default ARPGEvaluation
 * 
 * @help
 * 【插件指令】
 * //設定玩家技能
 * ARPG player skill <keyIndex> <skillId>
 * 
 * //設定玩家道具
 * ARPG player item <keyIndex> <skillId>
 * 
 * //設定跟隨者技能
 * ARPG follower skill <followerIndex> <keyIndex> <skillId> 
 * 
 * //設定跟隨者道具
 * ARPG follower item <followerIndex> <keyIndex> <skillId> 
 * 
 * //設定事件為指定怪物
 * ARPG enemy <enemyId>
 * 
 * //設定事件怪物死亡時，暫時消除劇情
 * ARPG die erase
 * 
 * //設定事件怪物死亡時，切換自開關
 * ARPG die switch <selfSwitchIndex>
 * 
 * //系統開啟顯示（顯示血量、魔力等資訊）
 * ARPG system open
 * 
 * //系統關閉顯示（停止顯示血量、魔力等資訊）
 * ARPG system close
 * 
 *  p.s. 設定技能、道具後需重新載入地圖
 * （利用轉移玩家、無淡入淡出即可）
 * 
 * 【特殊參考值】
 * 插件常數 control key 的參考值：
 * <char1>, <char2>, ...
 * 字元間以「,」隔開，空白將會忽略
 * 
 * 插件常數 skill note regex 的參考值：
 * <RegExp>
 * 用途為解析技能註解（逐行）
 * 除非腳本衝突，否則此參數並不推薦修改
 * 
 * 插件常數 evaluator 的參考值：
 * <functionName>
 * 預設值為內建評估函數（ARPGEvaluation）
 * 如需修改使用技能的標準可以外接函數
 * 
 * 此函數的結構為：function(<a>, <b>, <c>) {...return <d>;}
 * 參數 a 為技能、道具的使用者，是 Game_Actor 或 Game_Enemy
 * 參數 b 為使用的對象目標，是 Game_Actor 或 Game_Enemy
 * 參數 c 為使用的技能或道具，是 Game_Item
 * 參數 d 為回傳值，為 Boolean 值（是否使用技能、或道具）
 * 
 * 【技能、道具的註解】
 *  寫在注釋中，使用「$ARPG」開頭（如果沒有修改預設參數）
 *  使用空白隔開，而同一行的「#」之後會被當成一般注釋處理
 * 
 *  $ARPG type <string>                 # 範圍類型（Refer to help）
 *  $ARPG distance <number>             # 距離（[0, inf)Z:Number）
 *  $ARPG cooldown <number>             # 技能冷卻幀數（[0, inf)Z:Number）
 *  $ARPG expand <number>               # 作用域擴張延遲幀數（[0, inf)Z:Number）
 *  $ARPG duration <number>             # 作用域圖塊滯留幀數（[0, inf)Z:Number）
 *  $ARPG repelType <number>            # 擊退模式（Refer to help）
 *  $ARPG repelRate <number>            # 擊退率（[0, 100]Z:Number）
 *  $ARPG object <string>               # 作用對象（Refer to help）
 *  $ARPG scope [[x1,y1],[x2,y2],...]   # 定義其他類型作用域（Refer to help）
 *
 * 【特殊參考值】
 *  在道具、技能註解中的 type 參考值：
 *  none     : 無（忽略距離）
 *  self     : 單位自身（忽略距離）
 *  straight : 前方直線
 *  cross    : 正十字
 *  x-cross  : 交叉十字
 *  star     : 星型
 *  square   : 方型
 *  diamond  : 菱型
 *  all-map  : 全地圖（忽略距離）
 *  other    : 另外定義（忽略距離）
 * 
 *  在道具、技能註解中的 repelType 參考值：
 *  none     : 無擊退（忽略擊退率）
 *  backward : 退後
 *  jump     : 向後跳躍
 *  flight   : 退後至底
 * 
 *  在道具、技能註解中的 object 參考值：
 *  enemy    : 敵方
 *  actor    : 我方
 *  all      : 對所有
 * 
 *  p.s. 作用對象會依照發動者做變化
 * 
 *  【設定範例】
 *  # Case - 1
 *  $ARPG type x-cross                  # 交叉十字範圍
 *  $ARPG distance 7                    # 影響距離 7 格
 *  $ARPG cooldown 30                   # 冷卻時間 30 幀
 *  $ARPG expand 1                      # 每 1 幀都擴張
 *  $ARPG duration 1                    # 每次滯留 1 幀
 *  $ARPG repelType backward            # 擊退時敵人退 1 格
 *  $ARPG repelRate 30                  # 百分之 30 的擊退率
 *  $ARPG object enemy                  # 作用對象是敵人
 * 
 *  # Case - 2
 *  $ARPG type other                    # 自定義範圍
 *  $ARPG scope [[-2, -2],[-1, -2],...] # 開始定義範圍
 *  ...
 * 
 * 【其他細節】
 * 角色裝備技能、或道具的方法
 * 在道具、技能頁面對選中的單位
 * 按下 control key 設定的按鈕即可
 * 
 * 【開發者提示】
 * 1. 跟隨者只能利用事件裝備技能或道具
 *    未完成的原因為介面所需不同
 *    如需要可自行擴充功能、以及調整介面
 *    ※ 請參考「技能、道具的控制掛載」區域的程式碼
 * 
 * 2. 外接評估函數的部分 evaluator 參數
 *    插件分開的情況，在載入 ARPG.js 之前
 *    就應該先載入評估函數的插件
 * 
 * 3. 不同角色的 A.I. 系統沒有實作
 *    普通使用者的話，利用移動指令就能完成強度的控制
 *    高級使用者可以自行添加
 *    ※ 請參考「角色 ARPG 化」及「自操作角色的更新」區域的程式碼
 *    應該在 this._arpg 底下新增 ai 參數
 *    在更新時把 EVALUATOR 置換成 this._arpg.ai(...) 即可
 * 
 */

//==================================================================
// 插件常數
//==================================================================
var parameters = PluginManager.parameters("ARPG");
var CONTROL_KEY = String(parameters["control key"] || "A, S, D, F");
var FOLLOWER_SKILL_COUNT = Number(parameters["follower skill count"] || 4);
var ACTOR_DAMAGE_RANGE_TILE_COLOR = String(parameters["actor damage range tile color"] || "#FF3300");
var ACTOR_RECOVER_RANGE_TILE_COLOR = String(parameters["actor recover range tile color"] || "#00FF33");
var ENEMY_DAMAGE_RANGE_TILE_COLOR = String(parameters["enemy damage range tile color"] || "#3300FF");
var ENEMY_RECOVER_RANGE_TILE_COLOR = String(parameters["enemy recover range tile color"] || "#33FF00");
var ACTOR_DAMAGE_RANGE_TILE_CACHE_COUNT = Number(parameters["actor damage range tile cache count"] || 50);
var ACTOR_RECOVER_RANGE_TILE_CACHE_COUNT = Number(parameters["actor recover range tile cache count"] || 50);
var ENEMY_DAMAGE_RANGE_TILE_CACHE_COUNT = Number(parameters["enemy damage range tile cache count"] || 50);
var ENEMY_RECOVER_RANGE_TILE_CACHE_COUNT = Number(parameters["enemy recover range tile cache count"] || 50);
var SKILL_TILES_MARGIN = Number(parameters["skill tiles margin"] || 4);
var SKILL_TILES_OPACITY = Number(parameters["skill tiles opacity"] || 128);
var STATUS_SPRITE_MARGIN = Number(parameters["status sprite margin"] || 2);
var STATUS_SPRITE_WIDTH = Number(parameters["status sprite width"] || 5);
var HP_SPRITE_COLOR = String(parameters["hp sprite color"] || "#FF9900");
var HP_SPRITE_BACKGROUND_COLOR = String(parameters["hp sprite background color"] || "#AA3333");
var MP_SPRITE_COLOR = String(parameters["mp sprite color"] || "#0099FF");
var MP_SPRITE_BACKGROUND_COLOR = String(parameters["mp sprite background color"] || "#3333AA");
var ICON_WIDTH = Number(parameters["icon width"] || 32);
var ICON_HEIGHT = Number(parameters["icon height"] || 32);
var KEYS_SPRITES_MARGIN = Number(parameters["keys sprites margin"] || 50);
var KEYS_SPRITE_FONT_SIZE = Number(parameters["keys sprite font size"] || 12);
var KEYS_SPRITE_FONT_X = Number(parameters["keys sprite font x"] || 18);
var KEYS_SPRITE_FONT_Y = Number(parameters["keys sprite font y"] || 6);
var ARPGKEY_INVALID_OPACITY = Number(parameters["arpgkey invalid opacity"] || 64);
var ARPGKEY_VALID_OPACITY = Number(parameters["arpgkey valid opacity"] || 255);
var SKILL_NOTE_REGEX = eval(parameters["skill note regex"] || "/\$ARPG.*\S/");
var EVALUATOR = eval(parameters["evaluator"] || "ARPGEvaluation");

//==================================================================
// 全域類別、讀檔時需要載入
//==================================================================
function ARPGProps() {
  this.initialize.apply(this, arguments);
}

function ARPGCharacter() {
  this.initialize.apply(this, arguments);
}

//==================================================================
// ARPG A.I.
/*------------------------------------------------------------------
  * 在沒有外加 AI 的情況下的評估部件
  *================================================================*/
function ARPGEvaluation(user, target, item) {
  var object = item.object();
  if(object.damage.type === 3) {
    return (target._hp < target.mhp);
  }
  else if (object.damage.type === 4) {
    return (target._mp < target.mmp);
  }
  return true;
};

//==================================================================
// 全域變數
//==================================================================
var keys = null;
var system_visible = true;
var createPlayerDie = function(character) {
  return function() {
    SceneManager.goto(Scene_Gameover);
  };
};
var createFollowerDie = function(character) {
  return function() {
    character.setTransparent(true);
    character.setThrough(true);
  };
};

//==================================================================
// 輸入按鍵的預先處理
//==================================================================
(function() {
  keys = CONTROL_KEY.replace(/\W\s/g, "").split("");
  keys = keys.map(function(key) {
    return key.charCodeAt();
  });
  keys.forEach(function(key, index) {
    Input.keyMapper[key] = `arpgControl${index}`;
  });
})();

(function() {
  //==================================================================
  // 插件指令
  //==================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand; 
  Game_Interpreter.prototype.pluginCommand = function(command, args) { 
    _Game_Interpreter_pluginCommand.call(this, command, args);
    var event = $gameMap.event(this.eventId());
    if (command === "ARPG") {
      switch (args[0]) {
        case "player":
          switch(args[1]) {
            case "skill":
              var keyIndex = Number(args[2]);
              var skillId = Number(args[3]);
              $gamePlayer.arpg.setARPGSkill(keyIndex, skillId);
              break;
            case "item":
              var keyIndex = Number(args[2]);
              var itemId = Number(args[3]);
              $gamePlayer.arpg.setARPGItem(keyIndex, itemId);
              break;
          }
          break;
        case "follower":
          switch(args[1]) {
            case "skill":
              var followers = $gamePlayer.followers();
              var followerIndex = Number(args[2]);
              var keyIndex = Number(args[3]);
              var skillId = Number(args[4]);
              followers.follower(followerIndex).arpg.setARPGSkill(keyIndex, skillId);
              break;
            case "item":
            var followers = $gamePlayer.followers();
              var followerIndex = Number(args[2]);
              var keyIndex = Number(args[3]);
              var itemId = Number(args[4]);
              followers.follower(followerIndex).arpg.setARPGItem(keyIndex, itemId);
              break;
          }
          break;
        case "enemy":
          event.createARPGBattler(new Game_Enemy(Number(args[1])), function() {
            var enemy = this.getARPGBattler();
            var actions = enemy.enemy().actions;
            actions.forEach(function(action, index) {
              this.setARPGSkill(index, action.skillId);
            }, this);
          }, function() {
            this.erase();
          });
          break;
        case "die":
          switch(args[1]) {
            case "erase":
              event.arpg.setDie(function() {
                event.erase();
              });
              break;
            case "switch":
              event.arpg.setDie(function() {
                var key = [$gameMap._mapId, event.eventId(), args[2]];
                $gameSelfSwitches.setValue(key, Number(args[3]) === 1);
              });
              break;
          }
          break;
        case "system":
          switch(args[1]) {
            case "open":
              system_visible = true;
              break;
            case "close":
              system_visible = false;
              break;
          }
          break;
      }
    }
  };

  //==================================================================
  // 角色的 ARPG 的死亡重掛
  /*------------------------------------------------------------------
   * 由於 die 為函數沒有被存檔保留
   * 在重新讀檔時應該重載玩家、跟隨者的死亡函數
   *================================================================*/
  var _Scene_Load_onLoadSuccess = Scene_Load.prototype.onLoadSuccess;
  Scene_Load.prototype.onLoadSuccess = function() {
    if($gamePlayer.hasARPG()) {
      $gamePlayer.arpg.setDie(createPlayerDie($gamePlayer));
    }
    $gamePlayer.followers().forEach(function(follower) {
      if(follower.hasARPG()) {
        follower.arpg.setDie(createFollowerDie(follower));
      }
    });
    _Scene_Load_onLoadSuccess.call(this);
  };

  //==================================================================
  // 角色的 ARPG 化
  /*------------------------------------------------------------------
   * 統一在 Game_Character 的子類掛 Game_Battler 的子類
   * 主角    Game_Player    Game_Actor
   * 跟隨者  Game_Follower  Game_Actor
   * 怪物    Game_Event     Game_Enemy （使用插件指令處理）
   *=================================================================*/
  var _Game_Player_refresh = Game_Player.prototype.refresh;
  Game_Player.prototype.refresh = function() {
    _Game_Player_refresh.call(this);
    if(!this.hasARPG()) {
      this.createARPGBattler($gameParty.leader(), function() {  
        for(var i in keys) {
          this.setARPGProps(i, null, 0);
        }
      }, createPlayerDie(this));
    }
  };
  
  var _Game_Follower_refresh = Game_Follower.prototype.refresh;
  Game_Follower.prototype.refresh = function() {
    _Game_Follower_refresh.call(this);
    if(!this.hasARPG()) {
      this.createARPGBattler(this.actor(), function() {
        for(var i = 0; i < FOLLOWER_SKILL_COUNT; i++) {
          this.setARPGProps(i, null, 0);
        }
      }, createFollowerDie(this));
    }
    //process recover
    if(this.hasARPG()) {
      this.setTransparent(false);
      this.setThrough(false);
      if(this.arpg.getARPGBattler().isDead()) {
        this.arpg.die()
      }
    }
  };

  //==================================================================
  // ARPG 人物
  /*------------------------------------------------------------------
   * battler  Game_Actor, Game_Enemy   戰鬥單位
   * props    ARPGProps                可以使用的技能或道具列表
   * die      Function                 死亡調用的函數
   *================================================================*/
  ARPGCharacter.prototype.initialize = function(battler, setProps, die) {
    this._battler = battler;
    this._props = [];
    this._die = die;
    setProps.call(this);
  };

  ARPGCharacter.prototype.getARPGBattler = function() { 
    return this._battler;
  };
  
  ARPGCharacter.prototype.getARPGProps = function() { 
    return this._props;
  };

  ARPGCharacter.prototype.setARPGProps = function(index, item, count, cooldown) { 
    this._props[index] = new ARPGProps(item, count, cooldown);
  };

  ARPGCharacter.prototype.setARPGSkill = function(index, skillId) {
    var object = new Game_Item();
    var skill = $dataSkills[skillId];
    object.setObject(skill);
    this.setARPGProps(index, object, 0, skill.arpg.getCooldown());
  };

  ARPGCharacter.prototype.setARPGItem = function(index, itemId) {  
    var item = $dataItems[itemId];
    if($gameParty.hasItem(item)) {
      var object = new Game_Item();
      var count = $gameParty.numItems(item);
      object.setObject(item);
      this.setARPGProps(index, object, count, item.arpg.getCooldown());
    }
  };

  ARPGCharacter.prototype.indexARPGProps = function(object) { 
    var item = new Game_Item();
    item.setObject(object);
    for(var index in this._props) {
      var prop = this._props[index];
      if(prop.item) {
        var isSkill = prop.item.isSkill() === item.isSkill();
        var isItem = prop.item.isItem() === item.isItem();
        var itemId = prop.item.itemId() === item.itemId();
        if(isSkill && isItem && itemId) {
          return index;
        }
      }
    }
    return -1;
  };

  ARPGCharacter.prototype.clearProp = function(index) {
    this._props[index].initialize(null, 0, 0);
  };

  ARPGCharacter.prototype.setDie = function(die) {
    this._die = die;
  };

  ARPGCharacter.prototype.die = function() {
    this._die.call(this);
  };

  //==================================================================
  // ARPG 道具
  /*------------------------------------------------------------------
   * object   Game_Item   可以使用的技能或道具
   * cooldown Number      使用後的冷卻時間 
   * wait     Number      目前冷卻時間的倒數
   * update   Boolean     請求精靈物件更新的旗幟
   *================================================================*/
  ARPGProps.prototype.initialize = function(item, count, cooldown) {
    this.item = item;
    this._count = count;
    this._cooldown = cooldown;
    this._wait = 0;
    this._update = true;
  };
  
  ARPGProps.prototype.replayCooldown = function() {
    this._wait = this._cooldown;
  };

  ARPGProps.prototype.reduceWait = function() {
    if(this.using()) {
      this._wait--;
    }
  };

  ARPGProps.prototype.updateCount = function(count) {
    this._count = count;
    if(this.item.isItem() && this._count === 0) {
      this.item = null;
    }
    this._update = true;
  };

  ARPGProps.prototype.getCount = function() {
    return this._count;
  };

  ARPGProps.prototype.requestUpdate = function() {
    return this._update;
  };

  ARPGProps.prototype.responseUpdate = function() {
    this._update = false;
  };

  ARPGProps.prototype.canBeUse = function() {
    return (this.item && (this.item.isItem() ? this._count > 0 : true) && this._wait === 0);
  };

  ARPGProps.prototype.using = function() {
    return this._wait > 0;
  };

  //==================================================================
  // 角色 ARPG 化
  /*------------------------------------------------------------------
   * 掛在 Character 底下的 _arpg 參數：
   * battler  Game_Actor, Game_Enemy   戰鬥單位
   * props    ARPGProps                可以使用的技能或道具列表
   * die      Function                 死亡調用的函數
   *================================================================*/
  var _Game_Character_initMembers = Game_Character.prototype.initMembers;
  Game_Character.prototype.initMembers = function() {
    _Game_Character_initMembers.call(this);
    this.arpg = null;
  };

  Game_Character.prototype.hasARPG = function() {
    return this.arpg ? true : false;
  };

  Game_Character.prototype.createARPGBattler = function(battler, setProps, die) { 
    if(battler) {
      this.arpg = new ARPGCharacter(battler, setProps, die);
    }
  };

  //==================================================================
  // 用於 ARPG 角色狀態的 Sprite
  /*------------------------------------------------------------------
   * 與狀態條的邏輯很接近一般的 HP、MP 或 TP 的顯示狀態
   * 傳入值：
   * character Game_Character 要掛在哪個角色上
   * style      Object         用於設定風格的物件
   * value      Function       調用可以取得當前值的回呼函數
   * maxValue   Function       調用可以取得最大值的回呼函數
   *
   * 其中 style 物件包含下列值：
   * x          Function       調用取得橫向畫面位置的回呼函數
   * y          Function       調用取得縱向畫面位置的回呼函數
   * width      Number         指定的數值條寬度
   * height     Number         指定的數值條長度
   * color      String         色碼字串，數值條的顏色
   * background String         色碼字串，數值條背景的顏色
   * visible    Function       調用可以取得顯示與否的回呼函數
   *================================================================*/
  function Sprite_ARPGStatus() {
    this.initialize.apply(this, arguments);
  }

  Sprite_ARPGStatus.prototype = Object.create(Sprite.prototype);
  Sprite_ARPGStatus.prototype.constructor = Sprite_ARPGStatus;

  Sprite_ARPGStatus.prototype.initialize = function(character, style, value, maxValue) {
    Sprite.prototype.initialize.call(this);
    this._style = style;
    this._character = character;
    this._value = value;
    this._maxValue = maxValue;
    this._tempValue = -1;
    this.createBitmap();
  };

  Sprite_ARPGStatus.prototype.createBitmap = function() {
    this.bitmap = new Bitmap(this._style.width, this._style.height);
    this.anchor.x = 0.5;
    this.anchor.y = 1;
  };

  Sprite_ARPGStatus.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updatePosition();
    this.updateAnimation();
  };

  Sprite_ARPGStatus.prototype.updatePosition = function() {
    this.x = this._style.x();
    this.y = this._style.y();
  };

  Sprite_ARPGStatus.prototype.updateAnimation = function() {
    if(this._value() !== this._tempValue) {
      var rate = this._value() / this._maxValue();
      this.bitmap.fillRect(0, 0, this._style.width, this._style.height, this._style.background);
      this.bitmap.fillRect(0, 0, this._style.width * rate, this._style.height, this._style.color);
      this._tempValue = this._value();
    }
    this.visible = system_visible && this._style.visible();
  };

  //==================================================================
  // 重載角色精靈物件
  /*------------------------------------------------------------------
   * 主要用於顯示頭上的血量、魔力單位
   *================================================================*/
  var _Sprite_Character_update = Sprite_Character.prototype.update;
  Sprite_Character.prototype.update = function() {
    _Sprite_Character_update.call(this);
    this.updateARPGSprites();
  };

  Sprite_Character.prototype.updateARPGSprites = function() {
    if(this._character.hasARPG()) {
      if(!this._arpgHpSprite) {
        var self = this;
        var character = this._character;
        var battler = character.arpg.getARPGBattler();
        this._arpgHpSprite = new Sprite_ARPGStatus(character, {
          x: function() {
            return STATUS_SPRITE_MARGIN;
          },
          y: function() {
            return -self._realFrame.height;
          },
          width: $gameMap.tileWidth() - STATUS_SPRITE_MARGIN,
          height: STATUS_SPRITE_WIDTH,
          color: HP_SPRITE_COLOR,
          background: HP_SPRITE_BACKGROUND_COLOR,
          visible: function() {
            return !battler.isDead();
          }
        }, function() {
          return battler._hp;
        }, function() {
          return battler.mhp;
        });
        this.addChild(this._arpgHpSprite);
      }
      if(!this._arpgMpSprite) {
        var self = this;
        var character = this._character;
        var battler = character.arpg.getARPGBattler();
        this._arpgMpSprite = new Sprite_ARPGStatus(character, {
          x: function() {
            return STATUS_SPRITE_MARGIN;
          },
          y: function() {
            return -self._realFrame.height + STATUS_SPRITE_WIDTH + 1;
          },
          width: $gameMap.tileWidth() - STATUS_SPRITE_MARGIN,
          height: STATUS_SPRITE_WIDTH,
          color: MP_SPRITE_COLOR,
          background: MP_SPRITE_BACKGROUND_COLOR,
          visible: function() {
            return !battler.isDead();
          }
        }, function() {
          return battler._mp;
        }, function() {
          return battler.mmp;
        });
        this.addChild(this._arpgMpSprite);
      }
    }
  };

  //==================================================================
  // 技能、道具的 ARPG 化
  /*------------------------------------------------------------------
   * id         編號
   * type       範圍類型
   * distance   距離
   * cooldown   技能冷卻時間
   * expand     作用域擴張速度
   * duration   作用域滯留時間
   * repelType  擊退模式
   * repelRate  擊退率
   * object     作用對象
   * scope      定義其他類型作用域
   *================================================================*/
  function Game_ARPGObject() {
    this.initialize.apply(this, arguments);
  };

  Game_ARPGObject.prototype.initialize = function(id) {
    this._id = id;
    this._type = "none";
    this._distance = 0;
    this._cooldown = 0;
    this._expand = 0;
    this._duration = 0;
    this._repelType = "none";
    this._repelRate = 0;
    this._object = "all";
    this._scope = [];
  };

  Game_ARPGObject.prototype.getCooldown = function() {
    return this._cooldown;
  };

  Game_ARPGObject.prototype.getExpand = function() {
    return this._expand;
  };

  Game_ARPGObject.prototype.getDuration = function() {
    return this._duration;
  };

  Game_ARPGObject.prototype.getRepelType = function() {
    return this._repelType;
  };

  Game_ARPGObject.prototype.getRepelRate = function() {
    return this._repelRate;
  };

  Game_ARPGObject.prototype.getObject = function() {
    return this._object;
  };

  Game_ARPGObject.prototype.setAttribute = function(attribute, value) {
    try{
      switch(attribute) {
        //string
        case "type":
        case "repelType":
        case "object":
          (function() {
            eval(`this._${attribute} = String("${value}");`);
          }).call(this);
          break;
        //number
        case "distance":
        case "cooldown":
        case "expand":
        case "duration":
        case "repelRate":
          (function() {
            eval(`this._${attribute} = Number("${value}");`);
          }).call(this);
          break;
        //array
        case "scope":
          (function() {
            eval(`this._${attribute} = ${value};`);
          }).call(this);
          break;
      }
    }catch(e) {
      console.log(`skill define error! id = ${this.id}`);
    }
  };

  Game_ARPGObject.prototype.refresh = function() {
    this.createScope();
  };

  Game_ARPGObject.prototype.createScope = function() {
    switch(this._type) {
      case "straight":
      case "cross":
        for(var i = 0; i <= this._distance; i++) {
          this._scope.push({x:  i, y:  0});
          this._scope.push({x: -i, y:  0});
          this._scope.push({x:  0, y:  i});
          this._scope.push({x:  0, y: -i});
        }
        break;
      case "x-cross":
        for(var i = 0; i < this._distance; i++) {
          this._scope.push({x:  i, y:  i});
          this._scope.push({x: -i, y:  i});
          this._scope.push({x:  i, y: -i});
          this._scope.push({x: -i, y: -i});
        }
        break;
      case "star":
        for(var i = 0; i < this._distance; i++) {
          this._scope.push({x:  i, y:  0});
          this._scope.push({x: -i, y:  0});
          this._scope.push({x:  0, y:  i});
          this._scope.push({x:  0, y: -i});
          this._scope.push({x:  i, y:  i});
          this._scope.push({x: -i, y:  i});
          this._scope.push({x:  i, y: -i});
          this._scope.push({x: -i, y: -i});
        }
        break;
      case "square":
        for(var i = -this._distance; i <= this._distance; i++)
          for(var j = -this._distance; j <= this._distance; j++)
            this._scope.push({x:  i, y:  j});
        break;
      case "diamond":
        for(var i = -this._distance; i <= this._distance; i++)
          for(var j = -this._distance; j <= this._distance; j++)
            if(Math.abs(i) + Math.abs(j) <= this._distance)
              this._scope.push({x:  i, y:  j});
        break;
      case "self":
        this._scope.push({x: 0, y: 0});
        break;
      case "all-map":
      case "none":
        break;
      case "other":
        this._scope = this._scope.map(function(value) {
          return {x: value[0], y : value[1]};
        });
        break;
    }
  };

  Game_ARPGObject.prototype.getScopes = function(ox, oy, dir) {
    var tmp = this._scope.map(function(pos) {
      var obj = {};
      obj.x = pos.x + ox;
      obj.y = pos.y + oy;
      return obj;
    });
    if(this._type === "straight") {
      tmp = tmp.filter(function(pos) {
        switch(dir) {
          case 2:
            return pos.y > oy;
            break;
          case 4:
            return pos.x < ox;
            break;
          case 6:
            return pos.x > ox;
            break;
          case 8:
            return pos.y < oy;
            break;
        };
      });
    }
    return tmp;
  };

  Game_ARPGObject.prototype.checkInScope = function(ox, oy, dir, tx, ty) {
    switch(this._type) {
      case "straight":
        var dx = tx - ox;
        var dy = ty - oy;
        switch (dir) {
          case 2:
            return (dx === 0 && dy > 0 && dy <= this._distance);
          case 4:
            return (dy === 0 && dx < 0 && -dx <= this._distance);
          case 6:
            return (dy === 0 && dx > 0 && dx <= this._distance);
          case 8:
            return (dx === 0 && dy < 0 && -dy <= this._distance);
        }
      case "cross":
        return (ox === tx && Math.abs(ty - oy) <= this._distance)
            || (oy === ty && Math.abs(tx - ox) <= this._distance);
      case "x-cross":
        return (Math.abs(ty - oy) === Math.abs(tx - ox))
            && (Math.abs(tx - ox) <= this._distance);
      case "star":
        return (ox === tx && Math.abs(ty - oy) <= this._distance)
            || (oy === ty && Math.abs(tx - ox) <= this._distance)
            || ((Math.abs(ty - oy) === Math.abs(tx - ox))
            && (Math.abs(tx - ox) <= this._distance));
      case "square":
        return (Math.abs(tx - ox) <= this._distance)
            && (Math.abs(ty - oy) <= this._distance);
      case "diamond":
        return (Math.abs(tx - ox) + Math.abs(ty - oy) <= this._distance);
      case "self":
        return ox === tx && oy === ty;
      case "other":
        var scopes = this.getScopes(ox, oy, dir);
        return scopes.some(function(pos) {
          return pos.x === tx && pos.y === ty;
        });
      case "all-map":
        return true;
      case "none":
        return false;
    }
  };

  Game_ARPGObject.prototype.isAllMap = function() {
    return (this._type === "all-map");
  };

  //==================================================================
  // 用於 ARPG 地圖控制鍵的 Sprite
  /*------------------------------------------------------------------
   * 用於顯在於地圖上的控制按鍵
   *================================================================*/
  function Sprite_ARPGKeys() {
    this.initialize.apply(this, arguments);
  }

  Sprite_ARPGKeys.prototype = Object.create(Sprite.prototype);
  Sprite_ARPGKeys.prototype.constructor = Sprite_ARPGKeys;

  Sprite_ARPGKeys._iconWidth  = ICON_WIDTH;
  Sprite_ARPGKeys._iconHeight = ICON_HEIGHT;

  Sprite_ARPGKeys.prototype.initialize = function(prop, key, pos) {
    Sprite.prototype.initialize.call(this);
    this.x = pos.x;
    this.y = pos.y;
    this.z = 6;
    this._prop = prop;
    this._keyChar = String.fromCharCode(key);
    this.createBitmap();
  };

  Sprite_ARPGKeys.prototype.refresh = function() {
    this.createBitmap();
    this._prop().responseUpdate();
  }

  Sprite_ARPGKeys.prototype.createBitmap = function() {
    var prop = this._prop();
    var iconSet = ImageManager.loadSystem("IconSet");
    var index = prop.item ? prop.item.object().iconIndex : 1;
    var pw = Sprite_ARPGKeys._iconWidth;
    var ph = Sprite_ARPGKeys._iconHeight;
    var sx = index % 16 * pw;
    var sy = Math.floor(index / 16) * ph;
    this.bitmap = new Bitmap(pw, ph);
    this.bitmap.blt(iconSet, sx, sy, pw, ph, 0, 0);
    this.bitmap.fontSize = KEYS_SPRITE_FONT_SIZE;
    this.bitmap.drawText(this._keyChar, KEYS_SPRITE_FONT_X, KEYS_SPRITE_FONT_Y, 32, 32, 0);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
  };

  Sprite_ARPGKeys.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateAnimation();
  };

  Sprite_ARPGKeys.prototype.updateAnimation = function() {
    var valid = false;
    var prop = this._prop();
    if(prop.item) {
      if(prop.requestUpdate()) {
        this.refresh();
      }
      valid = prop.canBeUse();
      if(prop.item.isSkill()) {
        var object = prop.item.object();
        valid = valid && $gamePlayer.arpg.getARPGBattler().canPaySkillCost(object);  
      }
    }
    this.opacity = valid ? ARPGKEY_VALID_OPACITY : ARPGKEY_INVALID_OPACITY;
  };

  //==================================================================
  // 用於 ARPG 技能地圖塊的精靈圖片
  /*------------------------------------------------------------------
   * 技能使用時，顯示在地板上的作用亮標
   *================================================================*/
  function Sprite_ARPGTiles() {
      this.initialize.apply(this, arguments);
  }

  Sprite_ARPGTiles.prototype = Object.create(Sprite.prototype);
  Sprite_ARPGTiles.prototype.constructor = Sprite_ARPGTiles;

  Sprite_ARPGTiles.prototype.initialize = function(color) {
    Sprite.prototype.initialize.call(this);
    this.ox = 0;
    this.oy = 0;
    this.visible = false;
    this._duration = 0;
    this._frameCount = 0;
    this._color = color;
    this.createBitmap();
  };

  Sprite_ARPGTiles.prototype.createBitmap = function() {
    var margin = SKILL_TILES_MARGIN;
    var tileWidth = $gameMap.tileWidth();
    var tileHeight = $gameMap.tileHeight();
    var width = tileWidth - 2 * margin;
    var height = tileHeight - 2 * margin;
    this.bitmap = new Bitmap(tileWidth, tileHeight);
    this.bitmap.fillRect(margin, margin, width, height, this._color);
    this.anchor.x = 0.5;
    this.anchor.y = 0.5;
    this.opacity = SKILL_TILES_OPACITY;
    this.blendMode = Graphics.BLEND_ADD;
  };

  Sprite_ARPGTiles.prototype.show = function(x, y, duration) {
    this.tx = x;
    this.ty = y;
    this._duration = duration;
    this._frameCount = duration;
    this.visible = true;
  };

  Sprite_ARPGTiles.prototype.idle = function() {
      return !this.visible;
  };

  Sprite_ARPGTiles.prototype.update = function() {
    Sprite.prototype.update.call(this);
    if(this.visible) {
      this.updatePosition();
      this.updateAnimation();
    };
  };

  Sprite_ARPGTiles.prototype.updatePosition = function() {
    var tileWidth = $gameMap.tileWidth();
    var tileHeight = $gameMap.tileHeight();
    this.x = $gameMap.adjustX(this.tx + 0.5) * tileWidth;
    this.y = $gameMap.adjustY(this.ty + 0.5) * tileHeight;
  };

  Sprite_ARPGTiles.prototype.updateAnimation = function() {
    if(this._frameCount === 0) {
      this.visible = false;
    }
    else {
      this.opacity = (this._frameCount / this._duration) * 255; 
      this._frameCount--;
    }
  };

  //==================================================================
  // 重載地圖精靈集合
  /*------------------------------------------------------------------
   * 用於把 Speite_ARPGTiles 掛到 Spriteset_Map 底下
   *================================================================*/
  var _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
  Spriteset_Map.prototype.createLowerLayer = function() {
    _Spriteset_Map_createLowerLayer.call(this);
    this.createARPGTiles();
  };

  var _Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
  Spriteset_Map.prototype.createUpperLayer = function() {
    _Spriteset_Map_createUpperLayer.call(this);
    this.createARPGKeys();
  };

  Spriteset_Map.prototype.createARPGTiles = function() {
    this._ARPGTileSprites = {
      actor: {
        damage: this.createARPGTile(ACTOR_DAMAGE_RANGE_TILE_COLOR,
                               ACTOR_DAMAGE_RANGE_TILE_CACHE_COUNT),
        recover: this.createARPGTile(ACTOR_RECOVER_RANGE_TILE_COLOR,
                                ACTOR_RECOVER_RANGE_TILE_CACHE_COUNT)
      },
      enemy: {
        damage: this.createARPGTile(ENEMY_DAMAGE_RANGE_TILE_COLOR,
                               ENEMY_DAMAGE_RANGE_TILE_CACHE_COUNT),
        recover: this.createARPGTile(ENEMY_RECOVER_RANGE_TILE_COLOR,
                                ENEMY_RECOVER_RANGE_TILE_CACHE_COUNT)
      }
    };
  };

  Spriteset_Map.prototype.createARPGTile = function(color, count) {
    var tmp = [];
    for(var i = 0; i < count; i++) {
      var sprite = new Sprite_ARPGTiles(color);
      sprite.z = 0;
      tmp.push(sprite);
      this._tilemap.addChild(sprite);
    };
    return tmp;
  };

  Spriteset_Map.prototype.createARPGKeys = function() {
    var self = this;
    var tmp = [];
    var battler = $gamePlayer.arpg.getARPGBattler();
    var props = $gamePlayer.arpg.getARPGProps();
    props.forEach(function(prop, index) {
      var sprite = new Sprite_ARPGKeys(function() {
        return props[index];
      }, keys[index], {
        x: KEYS_SPRITES_MARGIN + KEYS_SPRITES_MARGIN * index,
        y: Graphics.height - KEYS_SPRITES_MARGIN
      });
      tmp.push(sprite);
      self.addChild(sprite);
    });
    this._ARPGKeysSprites = tmp;
  };

  Spriteset_Map.prototype.showTile = function(sprites, x, y, duration) {
    for(var i in sprites) {
      if(sprites[i].idle()) {
        sprites[i].show(x, y, duration);
        break;
      }
    }
  };

  Spriteset_Map.prototype.requestShowTile = function(x, y, duration, userType, skillType) {
    switch(userType) {
      case "actor":
        switch(skillType) {
          case "damage":
            this.showTile(this._ARPGTileSprites.actor.damage, x, y, duration);
            break;
          case "recover":
            this.showTile(this._ARPGTileSprites.actor.recover, x, y, duration);
            break;
        }
        break;
      case "enemy":
        switch(skillType) {
          case "damage":
            this.showTile(this._ARPGTileSprites.enemy.damage, x, y, duration);
            break;
          case "recover":
            this.showTile(this._ARPGTileSprites.enemy.recover, x, y, duration);
            break;
        }
        break;
    }
  };

  //==================================================================
  // 初始化技能、道具
  /*------------------------------------------------------------------
   * 資料初始化時，掛 Game_ARPGObject 於底下
   *================================================================*/
  Scene_Boot.prototype.parseARPG = function(note, callback) {
    var lines = note.split(/\n/);
    lines.forEach(function(token) {
      if(SKILL_NOTE_REGEX.test(token)) {
        token = SKILL_NOTE_REGEX.exec(token)[0].split(" ");
        var attribute = token[1];
        var value = token[2];
        if(attribute === "scope") {
          value = token.slice(2, token.length).join("");
        }
        callback.call(this, attribute, value);
      }
    });
  };

  var _Scene_Boot_start = Scene_Boot.prototype.start;
  Scene_Boot.prototype.start = function() {
    _Scene_Boot_start.call(this);
    var self = this;
    var datas = [];
    datas = datas.concat($dataSkills);
    datas = datas.concat($dataItems);
    datas.forEach(function(data) {
      if(data) {
        data.arpg = new Game_ARPGObject(data.id);
        self.parseARPG(data.note, function(attribute, value) {
          data.arpg.setAttribute(attribute, value);
        });
        data.arpg.refresh();
      }
    });
  };

  //==================================================================
  // 技能、道具的控制掛載
  /*------------------------------------------------------------------
   * 視窗場景的重載，用於設定玩家、跟隨者的技能、道具
   *================================================================*/
  function setARPGPropsHandler(window) {
    var self = this;
    keys.forEach(function(key, index) {
      var symbol = Input.keyMapper[key];
      window.setHandler(symbol, self.arpgSetting.bind(self, index));
    });
  }

  var _Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
  Scene_Item.prototype.createItemWindow = function() {
    _Scene_Item_createItemWindow.call(this);
    setARPGPropsHandler.call(this, this._itemWindow);
  };

  var _Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
  Scene_Skill.prototype.createItemWindow = function() {
    _Scene_Skill_createItemWindow.call(this);
    setARPGPropsHandler.call(this, this._itemWindow);
  };

  Scene_ItemBase.prototype.arpgSetting = function(index) {
    if(this.item()) {
      var item = this.item();
      var settedIndex = $gamePlayer.arpg.indexARPGProps(this.item());
      if(settedIndex >= 0) {
        $gamePlayer.arpg.clearProp(settedIndex);
      }
      if(DataManager.isItem(item)) {
        $gamePlayer.arpg.setARPGItem(index, item.id);
      }
      else if(DataManager.isSkill(item)) {
        $gamePlayer.arpg.setARPGSkill(index, item.id);
      }
      this._itemWindow.refresh();
    }
  };

  function processARPGHandling() {
    if (this.isOpenAndActive()) {
      var self = this;
      keys.forEach(function(key) {
        var symbol = Input.keyMapper[key];
        if(self.isHandled(symbol) && Input.isTriggered(symbol)) {
          self.callHandler(symbol);
        }
      });
    }
  };

  var _Window_ItemList_processHandling = Window_ItemList.prototype.processHandling;
  Window_ItemList.prototype.processHandling = function() {
    _Window_ItemList_processHandling.call(this);
    processARPGHandling.call(this);
  };

  var _Window_SkillList_processHandling = Window_SkillList.prototype.processHandling;
  Window_SkillList.prototype.processHandling = function() {
    _Window_SkillList_processHandling.call(this);
    processARPGHandling.call(this);
  };
  
  function checkARPGSetted(index) {
    var item = this._data[index];
    var settedIndex = $gamePlayer.arpg.indexARPGProps(item);
    if (item && settedIndex >= 0) {
      var rect = this.itemRect(index);
      rect.width -= this.textPadding();
      this.drawARPGSetted(item, rect.x, rect.y, rect.width, settedIndex);
    }
  }

  var _Window_ItemList_drawItem = Window_ItemList.prototype.drawItem;
  Window_ItemList.prototype.drawItem = function(index) {
    _Window_ItemList_drawItem.call(this, index);
    checkARPGSetted.call(this, index);
  };

  var _Window_SkillList_drawItem = Window_SkillList.prototype.drawItem;
  Window_SkillList.prototype.drawItem = function(index) {
    _Window_SkillList_drawItem.call(this, index);
    checkARPGSetted.call(this, index);
  };

  Window_Selectable.prototype.drawARPGSetted = function(item, x, y, width, index) {
    var key = keys[index];
    var keyChar = String.fromCharCode(key);
    this.makeFontSmaller();
    this.drawText(keyChar, x + KEYS_SPRITE_FONT_X, y + KEYS_SPRITE_FONT_Y, width, 0);
    this.resetFontSettings();
  };

  //==================================================================
  // 改變行動應用的模式
  /*------------------------------------------------------------------
   * 唯一會造成內建戰鬥腳本衝突的部分
   *================================================================*/
  Game_Action.prototype.setSubject = function(subject) {
    this._subject = subject;
  };

  Game_Action.prototype.subject = function() {
    return this._subject;
  };

  //==================================================================
  // 戰鬥處理器
  /*------------------------------------------------------------------
   * 用於處理 ARPG 戰鬥的類別，包裝過後掛在 Scene_Map 底下
   * 利用了 Game_Ation 以避免重複的邏輯
   *================================================================*/
  function Game_ARPGProcessor() {
    this.initialize.apply(this, arguments);
  }

  Game_ARPGProcessor.prototype.initialize = function() {
  };

  Game_ARPGProcessor.prototype.evalDamageFormula = function(damage, a, b) {
    try {
      var sign = ([3, 4].contains(damage.type) ? -1 : 1);
      var value = Math.max(eval(damage.formula), 0) * sign;
      if (isNaN(value)) value = 0;
      return value;
    } catch (e) {
      return 0;
    };
  };

  Game_ARPGProcessor.prototype.repelProcess = function(target, type, rate) {
    if(Math.randomInt(100) < rate) {
      switch(type) {
        case "none": break;
        case "backward":
          target.moveBackward();
          break;
        case "jump":
          target.jump(0, 0);
          break;
        case "flight":
          for(var i = 0; i < 100; i++) {
            target.moveBackward();
          }
          $gamePlayer.center($gamePlayer.x, $gamePlayer.y);
          break;
      }
    }
  };

  Game_ARPGProcessor.prototype.itemProcess = function(user, target, item) {
    this.repelProcess(target, item.arpg.getRepelType(), item.arpg.getRepelRate());
    var action = new Game_Action(user.arpg.getARPGBattler());
    action.setItemObject(item);
    action.apply(target.arpg.getARPGBattler());
    if (target.arpg.getARPGBattler().isDead()) {
      target.arpg.die();
    }
    action.applyGlobal();
  };

  Game_ARPGProcessor.prototype.checkInScope = function(user, target, item) {
    return item.object().arpg.checkInScope(user.x, user.y, user.direction(), target.x, target.y);
  };

  //==================================================================
  // 地圖場景的更新
  /*------------------------------------------------------------------
   * 資料成員 tasks 用於暫存尚未處理的塊
   * 主更新新增四個用於 ARPG 的部分
   *================================================================*/
  var _Scene_Map_initialize = Scene_Map.prototype.initialize;
  Scene_Map.prototype.initialize = function() {
    _Scene_Map_initialize.call(this);
    this._tasks = [];
    this._ARPGProcessor = new Game_ARPGProcessor();
  };

  var _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
  Scene_Map.prototype.updateMain = function() {
    _Scene_Map_updateMain.call(this);
    this.updateARPGTasks();
    this.updateARPGPlayer();
    this.updateARPGEvent();
    this.updateARPGFollower();
  };

  Scene_Map.prototype.getAllUnits = function() {
    var tmp = [];
    tmp = tmp.concat(this.getARPGActors());
    tmp = tmp.concat(this.getARPGEnemies());
    return tmp;
  };

  Scene_Map.prototype.getARPGEnemies = function() {
    return $gameMap.events().filter(function(event) {
      return event.hasARPG() && !event.arpg.getARPGBattler().isDead();
    });
  };

  Scene_Map.prototype.getARPGActors = function() {
    var tmp = [$gamePlayer];
    $gamePlayer.followers().forEach(function(follower) {
      tmp.push(follower);
    });
    tmp = tmp.filter(function(unit) {
      return unit.hasARPG() && !unit.arpg.getARPGBattler().isDead();
    });
    return tmp;
  };

  Scene_Map.prototype.getAllMapScopes = function() {
    var units = this.getAllUnits();
    return units.map(function(unit) {
      return {
        x: unit.x,
        y: unit.y
      };
    });
  };

  Scene_Map.prototype.getSpriteset = function() {
    return this._spriteset;
  };

  Scene_Map.prototype.useItem = function(user, item) {
    var object = item.object();
    var dir = user.direction();
    var ox = user.x;
    var oy = user.y;
    var scopes = object.arpg.getScopes(ox, oy, dir);
    user.arpg.getARPGBattler().useItem(object);
    this._tasks.push({
      user: user,
      item: item,
      scopes: scopes
    });
  };

  Scene_Map.prototype.getTargets = function(userType, itemType) {
    if(itemType === "all") {
      return this.getAllUnits();
    }
    if(itemType === userType) {
      return this.getARPGActors();
    }
    if(itemType !== userType) {
      return this.getARPGEnemies();
    }
  };

  Scene_Map.prototype.checkTouch = function(user, target) {
    return user.x === target.x && user.y === target.y;
  };

  //==================================================================
  // 技能作用地圖塊的更新
  /*------------------------------------------------------------------
   * 利用 tasks 保存下一幀要執行的一些事情
   * 包括技能的使用、道具的使用等等
   * 每個 task 包含以下內容：
   * user    Game_Actor/Game_Enemy  使用者      
   * item    Game_Item              技能、道具
   * scopes  Array({x:.., y:..})    作用範圍
   *================================================================*/
  Scene_Map.prototype.updateARPGTasks = function() {
    var self = this;
    this._tasks.forEach(function(task) {
      var user = task.user;
      var item = task.item;
      var object = task.item.object();
      //all-map scope
      if(object.arpg.isAllMap() && !task.first) {
        task.scopes = self.getAllMapScopes();
        task.first = true;
      }
      //process scope
      var scope = task.scopes.shift();
      if(scope) {
        //show light tiles
        var x = scope.x;
        var y = scope.y;
        var duration = object.arpg.getDuration();
        var userType = user.arpg.getARPGBattler().isActor() ? "actor" : "enemy";
        var skillType = ([0, 3, 4].indexOf(object.damage.type) < 0) ? "damage" : "recover";
        self.getSpriteset().requestShowTile(x, y, duration, userType, skillType);
        //check used
        var targets = self.getTargets(userType, object.arpg.getObject());
        targets.forEach(function(target) {
          if(self.checkTouch(scope, target)) {
            target.requestAnimation(object.animationId);
            self._ARPGProcessor.itemProcess(user, target, object);
          }
        });
      }
    });
    //delete no scope task
    this._tasks = this._tasks.filter(function(task) {
      return (task.scopes.length > 0);
    });
  };

  //==================================================================
  // 主角的更新
  /*------------------------------------------------------------------
   * 用於處理玩家輸入、套用攻擊等等
   *================================================================*/
  Scene_Map.prototype.updateARPGPlayer = function() {
    var battler = $gamePlayer.arpg.getARPGBattler();
    if(!battler.isDead()) {
      for(var i in keys) {
        var prop = $gamePlayer.arpg.getARPGProps()[i];
        if(prop.item) {
          if(Input.isPressed(`arpgControl${i}`)) {
            if(prop.canBeUse()) {
              if((prop.item.isSkill() && battler.canPaySkillCost(prop.item.object()))
              || (prop.item.isItem())) {
                this.useItem($gamePlayer, prop.item);
                prop.updateCount($gameParty.numItems(prop.item.object()));
                prop.replayCooldown();
              }
            }
          }
          prop.reduceWait();
        }
      }
    }
  };
  
  //==================================================================
  // 自操作角色的更新
  /*------------------------------------------------------------------
   * 事件、跟隨者的邏輯幾乎一致，只差在一點參數
   *================================================================*/
  Scene_Map.prototype.updateARPGAutoUnit = function(units, tag) {
    var self = this;
    units.forEach(function(unit) {
      if(unit.hasARPG()) {
        var battler = unit.arpg.getARPGBattler();
        if(!battler.isDead()) {
          var props = unit.arpg.getARPGProps();
          props.forEach(function(prop) {
            if(prop.canBeUse()) {
              var item = prop.item;
              var object = item.object();
              if(item.isItem() || (item.isSkill() && battler.canPaySkillCost(object))) {
                var targets = self.getTargets(tag, object.arpg.getObject());
                targets.forEach(function(target) {
                  if(self._ARPGProcessor.checkInScope(unit, target, item)) {
                    if(EVALUATOR(battler, target.arpg.getARPGBattler(), item)) {
                      self.useItem(unit, item);
                      prop.replayCooldown();
                    }
                  }
                });
              }
            }
            prop.reduceWait();
          });
        }
      }
    });
  };

  //==================================================================
  // 事件的更新
  /*------------------------------------------------------------------
   * 用於處理怪物事件
   * 當單位出現在攻擊範圍則直接使用技能攻擊
   * （未考慮滿 HP 不放技能，保留 MP 的情況...）
   *================================================================*/
  Scene_Map.prototype.updateARPGEvent = function() {
    this.updateARPGAutoUnit($gameMap.events(), "enemy");
  };

  //==================================================================
  // 跟隨者（隊友）的更新
  /*------------------------------------------------------------------
   * 用於處理隊友事件，邏輯同怪物
   *================================================================*/
  Scene_Map.prototype.updateARPGFollower = function() {
    this.updateARPGAutoUnit($gamePlayer.followers(), "actor");
  };

})();