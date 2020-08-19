
//===================================================================
// Create Shadow in Map
//===================================================================
let _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
  _Spriteset_Map_createLowerLayer.call(this);
  this.createCharactersShadow();
};

Spriteset_Map.prototype.createCharactersShadow = function() {
  let shadowSprite = [];
  $gameMap.events().forEach(function(event) {
    shadowSprite.push(new Sprite_Shadow(event));
  }, this);
  $gamePlayer.followers().reverseEach(function(follower) {
      shadowSprite.push(new Sprite_Shadow(follower));
  }, this);
  shadowSprite.push(new Sprite_Shadow($gamePlayer));
  for (var i = 0; i < shadowSprite.length; i++) {
      this._characterSprites.push(shadowSprite[i]);
      this._tilemap.addChild(shadowSprite[i]);
  }
};

//===================================================================
// Sprite Shadow
//===================================================================
function Sprite_Shadow() {
  this.initialize.apply(this, arguments);
}

Sprite_Shadow.prototype = Object.create(Sprite_Base.prototype);
Sprite_Shadow.prototype.constructor = Sprite_Shadow;

Sprite_Shadow.prototype.initialize = function(character) {
  Sprite_Base.prototype.initialize.call(this);
  this.anchor.x = 0.5;
  this.anchor.y = 1;
  this.setBlendColor([0, 0, 0, 255]);
  this._character = character;
};

Sprite_Shadow.prototype.update = function() {
  Sprite_Base.prototype.update.call(this);
  this.updateVisibility();
  this.updateBitmap();
  this.updateFrame();
  this.updatePosition();
  this.updateTime();
};

Sprite_Shadow.prototype.updateVisibility = function() {
  Sprite_Base.prototype.updateVisibility.call(this);
  if (this._character.isTransparent()) {
      this.visible = false;
  }
};

Sprite_Shadow.prototype.updateBitmap = function() {
  if (this.isImageChanged()) {
    this._characterName = this._character.characterName();
    this._characterIndex = this._character.characterIndex();
    this.setShadowBitmap();  
  }
};

Sprite_Shadow.prototype.isImageChanged = function() {
  return (this._characterName !== this._character.characterName() ||
          this._characterIndex !== this._character.characterIndex());
};

Sprite_Shadow.prototype.setShadowBitmap = function() {
  this.bitmap = ImageManager.loadCharacter(this._characterName);
  this._isBigCharacter = ImageManager.isBigCharacter(this._characterName);
};

Sprite_Shadow.prototype.updateFrame = function() {
  var pw = this.patternWidth();
  var ph = this.patternHeight();
  var sx = (this.characterBlockX() + this.characterPatternX()) * pw;
  var sy = (this.characterBlockY() + this.characterPatternY()) * ph;
  this.updateHalfBodySprites();
  if (this._bushDepth > 0) {
      var d = this._bushDepth;
      this._upperBody.setFrame(sx, sy, pw, ph - d);
      this._lowerBody.setFrame(sx, sy + ph - d, pw, d);
      this.setFrame(sx, sy, 0, ph);
  } else {
      this.setFrame(sx, sy, pw, ph);
  }
};

Sprite_Shadow.prototype.rate = function(min, max, pointer, value) {
  pointer = pointer.clamp(min, max);
  return ((pointer - min) / (max - min)) * value;
}

Sprite_Shadow.prototype.updateTime = function() {
  let hour = $gameVariables.value(1) / 15 / 60;
  let skew = (Math.PI / 2) - this.rate(6, 18, hour, Math.PI);
  this.skew.x = skew;
  this.scale.y = (0.4 * (1 / Math.cos(skew + 1e-6))).clamp(-3, 3);
  this.opacity = (128 * Math.cos(skew + 1e-6)).clamp(0, 128);
};

Sprite_Shadow.prototype.characterBlockX = function() {
  return this._character.characterIndex() % 4 * 3;
};

Sprite_Shadow.prototype.characterBlockY = function() {
  return Math.floor(this._character.characterIndex() / 4) * 4;
};

Sprite_Shadow.prototype.characterPatternX = function() {
  return this._character.pattern();
};

Sprite_Shadow.prototype.characterPatternY = function() {
  return (this._character.direction() - 2) / 2;
};

Sprite_Shadow.prototype.patternWidth = function() {
  if (this._isBigCharacter) {
      return this.bitmap.width / 3;
  } else {
      return this.bitmap.width / 12;
  }
};

Sprite_Shadow.prototype.patternHeight = function() {
  if (this._isBigCharacter) {
      return this.bitmap.height / 4;
  } else {
      return this.bitmap.height / 8;
  }
};

Sprite_Shadow.prototype.updateHalfBodySprites = function() {
  if (this._bushDepth > 0) {
      this.createHalfBodySprites();
      this._upperBody.bitmap = this.bitmap;
      this._upperBody.visible = true;
      this._upperBody.y = - this._bushDepth;
      this._lowerBody.bitmap = this.bitmap;
      this._lowerBody.visible = true;
      this._upperBody.setBlendColor(this.getBlendColor());
      this._lowerBody.setBlendColor(this.getBlendColor());
      this._upperBody.setColorTone(this.getColorTone());
      this._lowerBody.setColorTone(this.getColorTone());
  } else if (this._upperBody) {
      this._upperBody.visible = false;
      this._lowerBody.visible = false;
  }
};

Sprite_Shadow.prototype.createHalfBodySprites = function() {
  if (!this._upperBody) {
      this._upperBody = new Sprite();
      this._upperBody.anchor.x = 0.5;
      this._upperBody.anchor.y = 1;
      this.addChild(this._upperBody);
  }
  if (!this._lowerBody) {
      this._lowerBody = new Sprite();
      this._lowerBody.anchor.x = 0.5;
      this._lowerBody.anchor.y = 1;
      this._lowerBody.opacity = 128;
      this.addChild(this._lowerBody);
  }
};

Sprite_Shadow.prototype.updatePosition = function() {
  this.x = this._character.screenX();
  this.y = this._character.screenY();
  this.z = this._character.screenZ() - 2;
};
