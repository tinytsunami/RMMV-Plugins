//======================================================================
// FollowerMove.js
//======================================================================

/*:
 * @plugindesc 跟隨者的調整
 * @author 羊羽
 * 
 * @param follower speed
 * @desc 跟隨者的移動速度（[1, 6]Z:Number）
 * @default 4
 * 
 * @param follower frequency
 * @desc 跟隨者的移動頻率（[1, 5]Z:Number）
 * @default 5
 * 
 * @param follower collid
 * @desc 跟隨者的是否允許碰撞（[0, 1]Z:Boolean）
 * @default 1
 * 
 * @help
 * 【其他細節】
 * 無
 * 
 */
(function(){
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters('FollowerCollid');
  var FOLLOWER_SPEED = Number(parameters["follower speed"] || 4);
  var FOLLOWER_FREQUENCY = Number(parameters["follower frequency"] || 5);
  var FOLLOWER_COLLID = Boolean(Number(parameters["follower collid"] || 1));

  //==================================================================
  // 處理同伴移動速度、頻率，以及穿透、優先度
  //==================================================================
  var _Game_Follower_refresh = Game_Follower.prototype.refresh;
  Game_Follower.prototype.refresh = function() {
    _Game_Follower_refresh.call(this);
    if(FOLLOWER_COLLID) {
      this.setThrough(false);
      this.setPriorityType(1);
    }
    this.setMoveSpeed(FOLLOWER_SPEED);
    this.setMoveFrequency(FOLLOWER_FREQUENCY);
  };

  //==================================================================
  // 處理同伴碰撞問題
  //------------------------------------------------------------------
  // 主要是跟隨者的穿透問題
  //==================================================================
  Game_CharacterBase.prototype.isCollidedWithCharacters = function(x, y) {
    return this.isCollidedWithEvents(x, y)
        || this.isCollidedWithVehicles(x, y)
        || (FOLLOWER_COLLID && this.isCollidedWithFollowers(x, y));
  };

  Game_CharacterBase.prototype.isCollidedWithFollowers = function(x, y) {
    return $gamePlayer.followers().isSomeoneCollided(x, y);
  };

  Game_Follower.prototype.isCollidedWithCharacters = function(x, y) {
    return (Game_Character.prototype.isCollidedWithCharacters.call(this, x, y) ||
           (FOLLOWER_COLLID && this.isCollidedWithPlayerCharacters(x, y)));
  };
  
  Game_Follower.prototype.isCollidedWithPlayerCharacters = function(x, y) {
      return this.isNormalPriority() && $gamePlayer.isCollided(x, y);
  };

  Game_Followers.prototype.isSomeoneCollided = function(x, y) {
      return this.visibleFollowers().some(function(follower) {
        return follower.posNt(x, y);
      }, this);
  };

  //==================================================================
  // 處理同伴聚集問題
  //==================================================================
  var tempThrough = [];
  var _Game_Followers_gather = Game_Followers.prototype.gather;
  Game_Followers.prototype.gather = function () {
    _Game_Followers_gather.call(this);
    if(FOLLOWER_COLLID) {
      this.forEach(function(follower) {
        tempThrough.push(follower.isThrough());
        follower.setThrough(true);
      }, this);
    }
  };
  
  var _Game_Followers_update = Game_Followers.prototype.update;
  Game_Followers.prototype.update = function() {
    if(this.areGathering()) {
      if(FOLLOWER_COLLID && this.areGathered()) {
        this.forEach(function(follower, index) {
          follower.setThrough(tempThrough[index]);
        }, this);
      }
    }
    _Game_Followers_update.call(this);
  };

})();