//======================================================================
// WeaponPaperDoll.js
//======================================================================

/*:
 * @plugindesc 武器的紙娃娃系統，可以在地圖上顯示裝備武器
 * @author 羊羽
 * 
 * @param icon width
 * @desc 設定圖標的寬度（[1, inf)Z:Number）
 * @default 32
 *
 * @param icon height
 * @desc 設定圖標的高度（[1, inf)Z:Number）
 * @default 32
 *
 * @param weapon anchor x
 * @desc 武器的旋轉的橫向固定點（[0, 1]R:Number）
 * @default 0.875
 *
 * @param weapon anchor y
 * @desc 武器的旋轉的縱向固定點（[0, 1]R:Number）
 * @default 0.875
 * 
 * @param weapon rotaion
 * @desc 武器圖示的旋轉角度（[0, 360]Z:Number）
 * @default -30
 * 
 * @param weapon sprite shift x
 * @desc 武器精靈的橫向偏移量（[0, inf)Z:Number）
 * @default -5
 *
 * @param weapon sprite shift y
 * @desc 武器精靈的縱向偏移量（[0, inf)Z:Number）
 * @default -20
 *
 * @param weapon animation speed
 * @desc 武器動畫週期的幀數（[0, inf)Z:Number）
 * @default 60
 *
 * @param weapon animation range x
 * @desc 武器動畫的橫向範圍（[0, inf)Z:Number）
 * @default 1
 *
 * @param weapon animation range y
 * @desc 武器動畫的縱向範圍（[0, inf)Z:Number）
 * @default 2
 * 
 * @help
 * 【插件指令】
 * WeaponPaperDoll set <weaponId> //為事件設定武器
 * 
 */
(function() {
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters("WeaponPaperDoll");
  var ICON_WIDTH = Number(parameters["icon width"] || 32);
  var ICON_HEIGHT = Number(parameters["icon height"] || 32);
  var WEAPON_ANCHOR_X = Number(parameters["weapon anchor x"] || 0.875);
  var WEAPON_ANCHOR_Y = Number(parameters["weapon anchor y"] || 0.875);
  var WEAPON_SPRITE_SHIFT_X = Number(parameters["weapon sprite shift x"] || -5);
  var WEAPON_SPRITE_SHIFT_Y = Number(parameters["weapon sprite shift y"] || -20);
  var WEAPON_ANIMATION_SPEED = Number(parameters["weapon animation speed"] || 60);
  var WEAPON_ANIMATION_RANGE_X = Number(parameters["weapon animation range x"] || 1);
  var WEAPON_ANIMATION_RANGE_Y = Number(parameters["weapon animation range y"] || 2);
  var WEAPON_ROTATION = Number(parameters["weapon rotaion"] || -30)/180*Math.PI;

  //==================================================================
  // 插件指令
  //==================================================================
  var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand; 
  Game_Interpreter.prototype.pluginCommand = function(command, args) { 
    _Game_Interpreter_pluginCommand.call(this, command, args);
    var event = $gameMap.event(this.eventId());
    if (command === "WeaponPaperDoll") {
      switch (args[0]) {
        case "set":
          var item = new Game_Item();
          item.setEquip("weapon", Number(args[1]));
          event.setWeapon(item.object(), function() {
            return !this.isErased();
          });
          break;
      }
    }
  };

  //==================================================================
  // 重載角色更新
  //==================================================================
  var _Game_Player_refresh = Game_Player.prototype.refresh;
  Game_Player.prototype.refresh = function() {
    _Game_Player_refresh.call(this);
    if(!this.hasWeapon()) {
      var weapon = $gameParty.leader().weapons();
      this.setWeapon((weapon ? weapon[0] : null), function() {
        return true;
      });
    }
  };
  
  var _Game_Follower_refresh = Game_Follower.prototype.refresh;
  Game_Follower.prototype.refresh = function() {
    _Game_Follower_refresh.call(this);
    if(!this.hasWeapon() && this.actor()) {
      var weapon = this.actor().weapons();
      this.setWeapon((weapon ? weapon[0] : null), function() {
        return this.isVisible();
      });
    }
  };

  //==================================================================
  // 檢查事件是否被消除
  //==================================================================
  Game_Event.prototype.isErased = function() {
    return this._erased;
  };

  //==================================================================
  // 角色的武器物件
  //==================================================================
  var _Game_Character_initMembers = Game_Character.prototype.initMembers;
  Game_Character.prototype.initMembers = function() {
    _Game_Character_initMembers.call(this);
    this._weapon = {
      object: null,
      visible: null
    };
  };

  Game_Character.prototype.hasWeapon = function() { 
    return this._weapon.object ? true : false;
  };

  Game_Character.prototype.getWeapon = function() { 
    return this._weapon;
  };

  Game_Character.prototype.setWeapon = function(object, visible) { 
    this._weapon.object = object;
    this._weapon.visible = visible;
  };

  //==================================================================
  // 用於角色武器的精靈
  //==================================================================
  function Sprite_Weapon() {
    this.initialize.apply(this, arguments);
  }

  Sprite_Weapon.prototype = Object.create(Sprite.prototype);
  Sprite_Weapon.prototype.constructor = Sprite_Weapon;

  Sprite_Weapon._iconWidth  = ICON_WIDTH;
  Sprite_Weapon._iconHeight = ICON_HEIGHT;

  Sprite_Weapon.prototype.initialize = function(character) {
    Sprite.prototype.initialize.call(this);
    this._character = character;
    this._weapon = null;
    this._weaponObject = null;
    this._weaponVisible = null;
    this._weaponId = 0;
    this._frameCount = 0;
    this._mirrored = false;
    this.updatePosition();
    this.refresh();
  };

  Sprite_Weapon.prototype.refresh = function() {
    this._weapon = this._character.getWeapon();
    this._weaponObject = this._weapon.object;
    this._weaponVisible = this._weapon.visible;
    this._weaponId = this._weaponObject.id;
    this.createBitmap();
  }

  Sprite_Weapon.prototype.createBitmap = function() {
    var iconSet = ImageManager.loadSystem("IconSet");
    var index = this._weaponObject.iconIndex;
    var pw = Sprite_Weapon._iconWidth;
    var ph = Sprite_Weapon._iconHeight;
    var sx = index % 16 * pw;
    var sy = Math.floor(index / 16) * ph;
    this.bitmap = new Bitmap(pw, ph);
    this.bitmap.blt(iconSet, sx, sy, pw, ph, 0, 0);
    this.rotation = WEAPON_ROTATION;
    this.anchor.x = WEAPON_ANCHOR_X;
    this.anchor.y = WEAPON_ANCHOR_Y;
  };

  Sprite_Weapon.prototype.mirror = function() {
    return this._character.direction() === 6 || this._character.direction() === 8;
  };

  Sprite_Weapon.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updateVisible();
    if(this.visible) {
      this.updatePosition();
      this.updateMirror();
      this.updateAnimation();
    }
  };

  Sprite_Weapon.prototype.updateMirror = function() {
    if((this.mirror() && !this._mirrored) ||
       (!this.mirror() && this._mirrored)) {
      this.rotation *= -1;
      this.scale.x *= -1;
      this._mirrored = !this._mirrored;
    }
  };

  Sprite_Weapon.prototype.updatePosition = function() {
    this.x = WEAPON_SPRITE_SHIFT_X * (this._mirrored ? -1 : 1);
    this.y = WEAPON_SPRITE_SHIFT_Y;
  };

  Sprite_Weapon.prototype.updateAnimation = function() {
    if(WEAPON_ANIMATION_SPEED !== 0) {
      var rate = this._frameCount / WEAPON_ANIMATION_SPEED;
      var shift = Math.sin(2 * Math.PI * rate);
      this.x += WEAPON_ANIMATION_RANGE_X * shift;
      this.y += WEAPON_ANIMATION_RANGE_Y * shift;
      if(this._frameCount === 0) {
        this._frameCount = WEAPON_ANIMATION_SPEED;
      }
      else {
        this._frameCount -= 1;
      }
    }
  };

  Sprite_Weapon.prototype.updateVisible = function() {
    if(this._weaponId !== this._weaponObject.id) {
      this.refresh();
    }
    else {
      this.visible = this._character.hasWeapon() && this._weaponVisible.call(this._character);
    }
  };

  //==================================================================
  // 重載角色精靈物件
  //==================================================================
  var _Sprite_Character_update = Sprite_Character.prototype.update;
  Sprite_Character.prototype.update = function() {
    _Sprite_Character_update.call(this);
    this.updateWeaponSprites();
  };

  Sprite_Character.prototype.updateWeaponSprites = function() {
    if(this._character.hasWeapon() && !this._weaponSprite) {
      this._weaponSprite = new Sprite_Weapon(this._character);
      this.addChild(this._weaponSprite);
    }
  };

})();
