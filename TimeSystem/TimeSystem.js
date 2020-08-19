/*:
 * @plugindesc A simple time system (deprecated)
 * @author Tinytsunami
 *
 * @param Time Variable ID
 * @desc Variable ID for storing time frame. [1, inf)Z:Number
 * @default 1
 * 
 * @param Minute Frames
 * @desc One real minute is how much frame in the game. [1, inf)Z:Number
 * @default 15
 *
 * @help
 * [Global Variables]
 * 
 * $TimeSystem.now;
 * // Same as value in variable of "Time Variable ID"
 * // suggest use variable only to access, 
 * // except you want to run some complex calculations
 * 
 * $TimeSystem.is(hour, minute); 
 * // Return boolean, for check what time is it
 * 
 * $TimeSystem.hourIs(hour); 
 * // Return boolean, for check what is hour,
 * // only true when minute is 0
 * 
 * $TimeSystem.minuteIs(minute); 
 * // Return boolean, for check what is minute
 * 
 * [Plugin Commands]
 * TimeSystem pause       // For pause time
 * TimeSystem start       // For (re)start time
 * 
 * [Plugin Details]
 * The plugin is work in game map (Scene_Map) only,
 * when you into any others scene, it will pause until comeback to map.
 *
 * plugin parameters "time variable" will store frame in aday, example:
 * 
 * if you set "minute frames" = 15,
 * game 1 minute have 15 frames,
 * game 1 hour have 15*60 frames,
 * game 1 day have 24*15*60 frames.
 * 
 * Because 24*15*60 = 21600, 
 * the "time variable" will store 0~21599 frame,
 * it could be used on your special requirements.
 *
 */

let $timeSystem = null;

(function(){

  /* global variables */
  $timeSystem = new TimeSystem();

  /* plugin variables */
  let parameters = PluginManager.parameters('TimeSystem');
  const TIME_VARIABLE_ID = Number(parameters['Time Variable ID']);
  const MINUTE_FRAMES = Number(parameters['Minute Frames']);

  /* plugin commands */
  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand; 
  Game_Interpreter.prototype.pluginCommand = function(command, args) { 
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === "TimeSystem") {
      switch (args[0]) {
        case "stop":
          $timeSystem.stop();
          break;
        case "pause":
          $timeSystem.pause();
          break;
      }
    }
  };

  /* main system */
  function TimeSystem () {
    this.frames = 0;
    this.pause = false;
  }
  
  TimeSystem.ADAY_FRAMES = 24 * 60 * MINUTE_FRAMES;
  TimeSystem.HOUR_FRAMES = 60 * MINUTE_FRAMES;
  TimeSystem.MINUTE_FRAMES = MINUTE_FRAMES;
  
  TimeSystem.prototype.now = function() {
    return this.frames;
  };

  TimeSystem.prototype.hour = function() {
    return Math.floor(this.frames / TimeSystem.HOUR_FRAMES);
  };
  
  TimeSystem.prototype.minute = function() {
    return (this.frames - this.hour() * TimeSystem.HOUR_FRAMES) / TimeSystem.MINUTE_FRAMES;
  };
  
  TimeSystem.prototype.print = function() {
    let f = this.frames;
    let h = Math.floor(f / TimeSystem.HOUR_FRAMES);
    let m = Math.floor((f - h * TimeSystem.HOUR_FRAMES) / TimeSystem.MINUTE_FRAMES);
    return `${h}:${m}`;
  };

  TimeSystem.prototype.is = function(hours, minutes) {
    return this.frames === hours * TimeSystem.HOUR_FRAMES + minutes * TimeSystem.MINUTE_FRAMES;
  };
  
  TimeSystem.prototype.hourIs = function(hours) {
    return this.frames === hours * TimeSystem.HOUR_FRAMES;
  };
  
  TimeSystem.prototype.minuteIs = function(minutes) {
    return this.frames % TimeSystem.HOUR_FRAMES === minutes * TimeSystem.MINUTE_FRAMES;
  };
  
  TimeSystem.prototype.pause = function() {
    this.pause = true;
  };
  
  TimeSystem.prototype.start = function() {
    this.pause = false;
  };

  TimeSystem.prototype.increase = function() {
    if (this.pause === false) {
      this.frames = (this.frames + 1) % TimeSystem.ADAY_FRAMES;
    }
  };

  /* scene map process */
  let _Scene_Map_update = Scene_Map.prototype.update;
  Scene_Map.prototype.update = function() {
    _Scene_Map_update.call(this);
    this.updateTime();
  };
  
  Scene_Map.prototype.updateTime = function() {
    $timeSystem.increase();
    $gameTimer.start(($timeSystem.hour()*60+$timeSystem.minute()) * 60);
    $gameVariables.setValue(TIME_VARIABLE_ID, $timeSystem.now());
  };

})();
