//==================================================================
// 外部使用
//==================================================================
const CACHE_SHOWTILES_COUNT = 100;

let request = false;
let showTiles = [];

let pushShowTile = function(x, y, color) {
  showTiles.push({x, y, color});
};

let showTilesRefresh = function() {
  request = true;
};

//==================================================================
// 地圖塊的精靈圖片
//==================================================================
function Sprite_ShowTile() {
    this.initialize.apply(this, arguments);
}

Sprite_ShowTile.prototype = Object.create(Sprite.prototype);
Sprite_ShowTile.prototype.constructor = Sprite_ShowTile;

Sprite_ShowTile.prototype.initialize = function() {
  Sprite.prototype.initialize.call(this);
  this._margin = 5;
  this.initMembers();
  this.createBitmap();
};

Sprite_ShowTile.prototype.initMembers = function() {
  this.x = 0;
  this.y = 0;
  this.z = 0;
  this.anchor.x = 0.5;
  this.anchor.y = 0.5;
  this.opacity = 255;
  this.visible = false;
  this.blendMode = Graphics.BLEND_ADD;
};

Sprite_ShowTile.prototype.createBitmap = function() {
  let tileWidth = $gameMap.tileWidth();
  let tileHeight = $gameMap.tileHeight();
  this.bitmap = new Bitmap(tileWidth, tileHeight);
};

Sprite_ShowTile.prototype.drawColor = function(color) {
  this.bitmap.clear();
  let width = $gameMap.tileWidth() - 2 * this._margin;
  let height = $gameMap.tileHeight() - 2 * this._margin;
  this.bitmap.fillRect(this._margin, this._margin, width, height, color);
};

Sprite_ShowTile.prototype.show = function(x, y, color) {
  let tileWidth = $gameMap.tileWidth();
  let tileHeight = $gameMap.tileHeight();
  this.x = $gameMap.adjustX(x + 0.5) * tileWidth;
  this.y = $gameMap.adjustY(y + 0.5) * tileHeight;
  this.drawColor(color);
  this.visible = true;
};

Sprite_ShowTile.prototype.clear = function() {
  this.visible = false;
};

Sprite_ShowTile.prototype.idle = function() {
  return !this.visible;
};

Sprite_ShowTile.prototype.update = function() {
  Sprite.prototype.update.call(this);
};

//==================================================================
// 重載地圖精靈集合
//==================================================================
let _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
Spriteset_Map.prototype.createLowerLayer = function() {
  _Spriteset_Map_createLowerLayer.call(this);
  this.createShowTiles();
};

Spriteset_Map.prototype.createShowTiles = function() {
  this._ShowTileSprites = Array.from({
    length: CACHE_SHOWTILES_COUNT
  }, ()=>{
    let sprite = new Sprite_ShowTile();
    this._tilemap.addChild(sprite);
    return sprite;
  });
};

Spriteset_Map.prototype.showTile = function(x, y, color) {
  let sprites = this._ShowTileSprites;
  for(let i in sprites) {
    if(sprites[i].idle()) {
      sprites[i].show(x, y, color);
      break;
    }
  }
};

let _Spriteset_Map_update = Spriteset_Map.prototype.update;
Spriteset_Map.prototype.update = function() {
  _Spriteset_Map_update.call(this);
  if (request) {
    this.updateShowTiles();
    request = false;
  }
};

Spriteset_Map.prototype.updateShowTiles = function() {
  this._ShowTileSprites.forEach((sprite)=>sprite.clear());
  this._waitingShowTiles = showTiles;
  while (this._waitingShowTiles.length > 0) {
    let tile = this._waitingShowTiles.pop();
    this.showTile(tile.x, tile.y, tile.color);
  }
};
