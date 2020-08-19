let _Stage_initialize = Stage.prototype.initialize;
Stage.prototype.initialize = function() {
  _Stage_initialize.call(this);
  let s = 1;
  let r = new PIXI.Point(-s, 0);
  let g = new PIXI.Point(0, s);
  let b = new PIXI.Point(0, 0);
  this.filters = [
    new PIXI.filters.AdjustmentFilter({
      "gamma": 0.8,
      "saturation": 0.8,
      "contrast": 1.6,
      "brightness": 1,
      "red": 0.95,
      "green": 0.95,
      "blue": 1.1,
      "alph": 1,
    }),
    new PIXI.filters.RGBSplitFilter(r, g, b),
  ];
};
