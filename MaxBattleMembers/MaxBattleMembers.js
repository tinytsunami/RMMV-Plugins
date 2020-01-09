//======================================================================
// MaxBattleMembers.js
//======================================================================

/*:
 * @plugindesc 調整最大戰鬥人數
 * @author 羊羽
 * 
 * @param max battle members
 * @desc 允許的最大戰鬥人數（[1, inf)Z:Number）
 * @default 4
 * 
 * @help
 * 
 */
(function() {
  //==================================================================
  // 插件常數
  //==================================================================
  var parameters = PluginManager.parameters("MaxBattleMembers");
  var MAX_BATTLER_MEMBERS = Number(parameters["max battle members"] || 4);

  //==================================================================
  // 重載最大戰鬥人數
  //==================================================================
  Game_Party.prototype.maxBattleMembers = function() {
      return MAX_BATTLER_MEMBERS;
  };

})();
