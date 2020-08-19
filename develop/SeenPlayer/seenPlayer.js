/*:
 * @plugindesc 事件視野找玩家
 * @author 羊羽
 *
 * @param ignore region id
 * @desc 忽略的區域標誌（例如：柵欄）
 * @default 1
 *
 * @help
 * 在事件的條件判斷寫：
 * seenPlayer(this.eventId(), 視野範圍);
 * 就可以回傳是否看見玩家
 *
 */

var parameters = PluginManager.parameters('seenPlayer');
var ignoreRegionId = Number(parameters['ignore region id'], 1);

let seenPlayer = function(eventId, range) {

  let event = $gameMap.event(eventId);
  let x1 = event.x;
  let y1 = event.y;
  let x2 = $gamePlayer.x;
  let y2 = $gamePlayer.y;

  if($gameMap.distance(x1, y1, x2, y2) > range) {
    return false;
  }

  let line = [];

  if (x1 !== x2) {
    let ox = Math.min(x1, x2);
    let tx = Math.max(x1, x2);
    let oy = Math.min(y1, y2);
    let ty = Math.max(y1, y2);
    let m = (y1 - y2) / (x1 - x2);
    let c = y1 - m * x1;
    for (let x = ox; x < tx; x++) {
      let y = Math.round(m * x + c);
      let pos = {x, y};
      line.push(pos);
    }
    for(let y = oy; y < ty; y++) {
      let x = Math.round((y - c) / m);
      let pos = {x, y};
      line.push(pos);
    }

  }
  else {
    let x = x1;
    let oy = Math.min(y1, y2);
    let ty = Math.max(y1, y2);
    for (let y = oy; y < ty; y++) {
      let pos = {x, y};
      line.push(pos);
    }
  }

  return line.every((pos)=>{
    let x = pos.x;
    let y = pos.y;
    if ($gameMap.regionId(x, y) === ignoreRegionId) {
      return true;
    }
    return [2, 4, 6, 8].map((d)=>{
      return $gameMap.isPassable(x, y, d);
    }).every((passable)=>{
      return passable;
    });
  });
}
