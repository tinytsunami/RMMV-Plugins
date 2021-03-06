/*:
 * @plugindesc 羊羽系遊戲：基本設定、視覺類插件整合包。
 * @author 羊羽 
 * 
 * @param Base
 * @text 基本設定
 * 
 * @param Base.EnableMouse
 * @text 啟用滑鼠操作
 * @type boolean
 * @default true
 * @parent Base
 * 
 * @param Base.MouseImage
 * @text 自定義滑鼠圖像
 * @type file
 * @require 1
 * @dir img/system
 * @default 
 * @parent Base
 * 
 * @param Base.EnableWASD
 * @text 方向鍵改成 WASD 鍵
 * @type boolean
 * @default false
 * @parent Base
 * 
 * @param Base.AnimationRate
 * @text 設定動畫幀率
 * @type number
 * @min 1
 * @default 15
 * @parent Base
 * 
 * @param Base.EnableFastForward
 * @text 啟用按住確認鍵快進
 * @type boolean
 * @default false
 * @parent Base
 * 
 * @param Base.Fullscreen
 * @text 啟用自動全螢幕
 * @type boolean
 * @default false
 * @parent Base
 * 
 * @param Base.MessageSE
 * @text 使用顯示訊息音效
 * @type file
 * @require 1
 * @dir audio/se
 * @parent Base
 * 
 * @param Title
 * @text 主畫面設定
 * 
 * @param Title.Jump
 * @text 設定跳過主畫面
 * @type select
 * @option None
 * @option First
 * @option Always
 * @default None
 * @parent Title
 * 
 * @param Title.WindowX
 * @text 主畫面視窗 X 座標
 * @type number
 * @default 563
 * @parent Title
 * 
 * @param Title.WindowY
 * @text 主畫面視窗 Y 座標
 * @type number
 * @default 552
 * @parent Title
 * 
 * @param Title.ShowContinue
 * @text 主畫面顯示「繼續」
 * @type boolean
 * @default true
 * @parent Title
 * 
 * @param Title.ShowContinueIfExist
 * @text 有存檔才顯示「繼續」
 * @type boolean
 * @default true
 * @parent Title
 * 
 * @param Title.ShowOption
 * @text 主畫面顯示「選項」
 * @type boolean
 * @default true
 * @parent Title
 * 
 * @param Filter
 * @text 啟用畫面濾鏡
 * @type boolean
 * @default true
 * 
 * @param Filter.Adjustment
 * @text 啟用畫面綜合調整
 * @type boolean
 * @default true
 * @parent Filter
 * 
 * @param Filter.Adjustment.Gamma
 * @text 畫面明度
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Saturation
 * @text 畫面飽和度
 * @type number
 * @decimals 1
 * @default 0.8
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Contrast
 * @text 畫面對比度
 * @type number
 * @decimals 1
 * @default 1.6
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Brightness
 * @text 畫面亮度
 * @type number
 * @decimals 1
 * @default 1
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Red
 * @text 紅色通道增益
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Green
 * @text 綠色通道增益
 * @type number
 * @decimals 2
 * @default 0.95
 * @parent Filter.Adjustment
 * 
 * @param Filter.Adjustment.Blue
 * @text 藍色通道增益
 * @type number
 * @decimals 2
 * @default 1.1
 * @parent Filter.Adjustment
 * 
 * @param Filter.RGBSplitFilter
 * @text 啟用分裂三色通道效果
 * @type boolean
 * @default true
 * @parent Filter
 * 
 * @param Filter.RGBSplitFilter.Split
 * @text 分裂強度
 * @type number
 * @default 1
 * @parent Filter.RGBSplitFilter
 * 
 * @param Filter.TiltShiftFilter
 * @text 啟用地圖邊緣模糊效果
 * @type boolean
 * @default true
 * @parent Filter
 * 
 * @param Filter.TiltShiftFilter.Blur
 * @text 模糊強度
 * @type number
 * @default 12
 * @parent Filter.TiltShiftFilter
 * 
 * @param Filter.TiltShiftFilter.BlurRange
 * @text 模糊邊緣的範圍
 * @type number
 * @default 100
 * @parent Filter.TiltShiftFilter
 * 
 * @param Filter.CRTFilter
 * @text 啟用映像管螢幕效果
 * @type boolean
 * @default false
 * @parent Filter
 * 
 * @param Filter.CRTFilter.Curvature
 * @text 掃描線曲率
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.LineWidth
 * @text 掃描線寬度
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.LineContrast
 * @text 掃描線對比度
 * @type number
 * @decimals 1
 * @default 0.25
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.VerticalLine
 * @text 使用垂直掃描線
 * @type boolean
 * @default false
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.Noise
 * @text 噪聲強度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.NoiseSize
 * @text 噪聲顆粒大小
 * @type number
 * @decimals 1
 * @default 1.0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.Seed
 * @text 噪聲種子
 * @type number
 * @default 0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.Vignetting
 * @text 暈影效果半徑
 * @type number
 * @default 0.1
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.VignettingAlpha
 * @text 暈影效果不透明度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 1.0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.VignettingBlur
 * @text 暈影效果模糊程度
 * @type number
 * @decimals 1
 * @max 1.0
 * @min 0.0
 * @default 0.3
 * @parent Filter.CRTFilter
 * 
 * @param Filter.CRTFilter.Time
 * @text 掃描線動畫速度
 * @type number
 * @default 0
 * @parent Filter.CRTFilter
 * 
 * @param Filter.PixelateFilter
 * @text 啟用像素化效果
 * @type boolean
 * @default false
 * @parent Filter
 * 
 * @param Filter.PixelateFilter.Size
 * @text 像素化大小
 * @type number
 * @default 10
 * @parent Filter.PixelateFilter
 * 
 * @param Filter.AsciiFilter
 * @text 啟用 ASCII 化效果
 * @type boolean
 * @default false
 * @parent Filter
 * 
 * @param Filter.AsciiFilter.Size
 * @text ASCII 化大小
 * @type number
 * @default 8
 * @parent Filter.AsciiFilter
 * 
 * @param Cloud
 * @text 啟用雲團效果
 * @type boolean
 * @default true
 * 
 * @param Cloud.Tiles
 * @text 自定義雲片素材集
 * @desc 若不指定則使用內建預設圖像。
 * @type file[]
 * @dir img/pictures
 * @default []
 * @parent Cloud
 * 
 * @param Cloud.Switch
 * @text 雲團啟用的開關
 * @type switch
 * @default 0
 * @parent Cloud
 * 
 * @param Cloud.Count
 * @text 雲團的數量
 * @type number
 * @min 1
 * @default 20
 * @parent Cloud
 *
 * @param Cloud.Width
 * @text 雲團寬度
 * @type number
 * @min 1
 * @default 512
 * @parent Cloud
 *
 * @param Cloud.Height
 * @text 雲團長度
 * @type number
 * @min 1
 * @default 256
 * @parent Cloud
 *
 * @param Cloud.MinTileCount
 * @text 雲團最少的雲片數量
 * @type number
 * @min 1
 * @default 11
 * @parent Cloud
 *
 * @param Cloud.MaxTileCount
 * @text 雲團最多的雲片數量
 * @type number
 * @min 1
 * @default 30
 * @parent Cloud
 *
 * @param Cloud.MinSpeed
 * @text 雲團移動的最小速度
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.05
 * @parent Cloud
 * 
 * @param Cloud.MaxSpeed
 * @text 雲團移動的最大速度
 * @number
 * @min 0.01
 * @decimals 2
 * @default 0.10
 * @parent Cloud
 * 
 * @param Time
 * @text 啟用時間系統
 * @type boolean
 * @default true
 * 
 * @param Time.TimeVariable
 * @text 儲存時間的變數
 * @desc 注意！本變數只能讀取。
 * @type variable
 * @default 0
 * @parent Time
 * 
 * @param Time.PauseSwitch
 * @text 暫停時間的開關
 * @type switch
 * @default 0
 * @parent Time
 * 
 * @param Time.ClockSwitch
 * @text 顯示時鐘的開關
 * @type switch
 * @default 0
 * @parent Time
 * 
 * @param Time.MinuteFrames
 * @text 遊戲分鐘佔幾個幀
 * @type number
 * @min 1
 * @default 15
 * @parent Time
 * 
 * @param Time.Shadow
 * @text 啟用影子系統
 * @type boolean
 * @default true
 * @parent Time
 * 
 * @param Time.Tints
 * @text 定義時間色調
 * @type struct<Color>[]
 * @default ["{\"Moment\":\"4\",\"Red\":\"-128\",\"Green\":\"-96\",\"Blue\":\"-32\",\"Gray\":\"128\",\"Duration\":\"60\"}","{\"Moment\":\"5\",\"Red\":\"-32\",\"Green\":\"-32\",\"Blue\":\"-8\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"6\",\"Red\":\"0\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"11\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"12\",\"Red\":\"32\",\"Green\":\"32\",\"Blue\":\"16\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"13\",\"Red\":\"8\",\"Green\":\"0\",\"Blue\":\"0\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"16\",\"Red\":\"32\",\"Green\":\"-64\",\"Blue\":\"-96\",\"Gray\":\"32\",\"Duration\":\"60\"}","{\"Moment\":\"17\",\"Red\":\"16\",\"Green\":\"-96\",\"Blue\":\"-128\",\"Gray\":\"16\",\"Duration\":\"60\"}","{\"Moment\":\"18\",\"Red\":\"-160\",\"Green\":\"-160\",\"Blue\":\"-128\",\"Gray\":\"192\",\"Duration\":\"60\"}"]
 * @parent Time
 * 
 * @param WeatherEx
 * @text 啟用強化天氣系統
 * @type boolean
 * @default true
 * 
 * @param Camera
 * @text 啟用鏡頭系統
 * @type boolean
 * @default true
 * 
 * @param Camera.ShackType
 * @text 鏡頭震盪類型
 * @type select
 * @option Horizontal
 * @option Vertical
 * @default Horizontal
 * @parent Camera
 * 
 * @param DialogBox
 * @text 啟用浮動對話框
 * @type boolean
 * @default true
 * 
 * @param DialogBox.StandardFontSize
 * @text 設置字體大小
 * @type number
 * @default 24
 * @parent DialogBox
 * 
 * @param DialogBox.TextColor
 * @text 設置字體顏色
 * @type text
 * @default #FFFFFF
 * @parent DialogBox
 * 
 * @param DialogBox.OutlineWidth
 * @text 設置字體邊框寬度
 * @type number
 * @default 1
 * @parent DialogBox
 * 
 * @param DialogBox.OutlineColor
 * @text 設置字體邊框顏色
 * @type text
 * @default #333333
 * @parent DialogBox
 * 
 * @param DialogBox.StandardPadding
 * @text 設置視窗內邊距
 * @type number
 * @default 16
 * @parent DialogBox
 * 
 * @param DialogBox.BackgroundOpacity
 * @text 設定背景透明度
 * @type number
 * @max 255
 * @min 0
 * @default 192
 * @parent DialogBox
 * 
 * @param DialogBox.ExpandingDirection
 * @text 設定視窗展開方向
 * @type select
 * @option Horizontal
 * @option Vertical
 * @default Horizontal
 * @parent DialogBox
 * 
 * @param DialogBox.AnimationSpeed
 * @text 設定視窗開關速度
 * @desc 數值越大越慢。以等比級數衰減。
 * @type number
 * @default 6
 * @parent DialogBox
 * 
 * @param DialogBox.OpenThreshold
 * @text 設定開啟閾值
 * @desc 數值越大越慢完全開啟視窗。為 0 時瞬間開啟。
 * @type number
 * @max 255
 * @min 0
 * @default 64
 * @parent DialogBox
 * 
 * @param DialogBox.CloseThreshold
 * @text 設定關閉閾值
 * @desc 數值越小越慢完全關閉視窗。為 255 時瞬間關閉。
 * @type number
 * @max 255
 * @min 0
 * @default 32
 * @parent DialogBox
 * 
 * @help
 * 
 * # 進階除錯模式
 *  - F10：遊戲減速一半
 *  - F11：遊戲加速一倍 
 * 
 * # 浮動對話框指令
 *  - DialogBox open    // 開啟浮動對話框（啟用時預設）
 *  - DialogBox close   // 關閉浮動對話框
 * 
 * # 時間事件指令
 *  - Time set <h>:<m> // 設定目前的時間（24小時制）
 * 
 * # 鏡頭事件指令
 *  - Camera story                               //鏡頭模仿電影比例（2.35:1）
 *  - Camera game                                //鏡頭恢復遊戲狀態（原比例）
 *  - Camera focus event <id> <zoom> <duration>  //鏡頭關注到指定編號的事件（id=0時為該事件）
 *  - Camera focus player <zoom> <duration>      //鏡頭關注到指定編號的事件
 *  - Camera clear <duration>                    //復原鏡頭狀態
 * 
 * # 時間系統註釋
 *  - 事件註釋加上 <shadow:false> 可以關閉該事件的影子
 *  - 地圖註釋加上 <tint:false> 可以關閉該地圖的色調
 * 
 * # 浮動對話框指令
 *  - 訊息中加入 \D[<id>] 可以將浮動對話框指定給特定事件
 * 
 * Publish by MIT License + Other License
 * 
 * About "Other Licence":
 * * You agree your games/works don't use illegal materials (Theft,
 *   unauthorized used, violation of the authorization of others, or
 *   infringement of the rights of other materials authors)
 * 
 */ 

/*~struct~Color:
 *  
 * @param Moment
 * @text 時刻（24小時制）
 * @type number
 * @max 23
 * @min 0
 * @default 0
 * 
 * @param Red
 * @text 紅色強度
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Green
 * @text 綠色強度
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Blue
 * @text 藍色強度
 * @type number
 * @max 255
 * @min -255
 * @default 0
 * 
 * @param Gray
 * @text 灰度
 * @type number
 * @max 255
 * @min 0
 * @default 0
 * 
 * @param Duration
 * @text 過渡時間（遊戲分鐘）
 * @type number
 * @min 1
 * @default 60
 * 
 */

//======================================================================
// Debug Mode
//======================================================================
(function(){
  let _SceneManager_onKeyDown = SceneManager.onKeyDown;
  SceneManager.onKeyDown = function(event) {
    _SceneManager_onKeyDown.call(this, event);
    if ($gameTemp && $gameTemp.isPlaytest()) {
      if (!event.ctrlKey && !event.altKey) {
        switch (event.keyCode) {
          case 121: // F10 (Slow down x2)
            SceneManager._deltaTime = (SceneManager._deltaTime * 2);
            console.log(`Set FPS ${1/SceneManager._deltaTime}`);
            break;
          case 122: // F11 (Speed up x2)
            SceneManager._deltaTime = (SceneManager._deltaTime / 2);
            console.log(`Set FPS ${1/SceneManager._deltaTime}`);
            break;
        }
      }
    }
  };
})();

//======================================================================
// Base Setting
//======================================================================
(function(){
  const parameters = PluginManager.parameters('Integration');

  const BASE = {};
  BASE.ENABLE_MOUSE         = Boolean(parameters["Base.EnableMouse"] === "true");
  BASE.MOUSE_IMAGE          = String(parameters["Base.MouseImage"]);
  BASE.ENABLE_WASD          = Boolean(parameters["Base.EnableWASD"] === "true");
  BASE.ANIMATION_RATE       = Number(parameters["Base.AnimationRate"]);
  BASE.ENABLE_FAST_FORWARD  = Number(parameters["Base.EnableFastForward"]);
  BASE.FULLSCREEN           = Boolean(parameters["Base.Fullscreen"] === "true");
  BASE.MESSAGE_SE           = String(parameters["Base.MessageSE"]);

  if (!!!BASE.ENABLE_MOUSE) {
    TouchInput._onMouseDown = function(event) {};
    TouchInput._onMouseMove = function(event) {};
    TouchInput._onMouseUp = function(event) {};
  }

  if (BASE.MOUSE_IMAGE !== "" && 
      BASE.MOUSE_IMAGE !== "null" &&
      BASE.MOUSE_IMAGE !== "undefined") {
    document.body.style.cursor = `url("${BASE.MOUSE_IMAGE}"), auto`;
  }

  if (!!!BASE.ENABLE_WASD) {
    Input.keyMapper[87] = "w";
    Input.keyMapper[65] = "a";
    Input.keyMapper[83] = "s";
    Input.keyMapper[68] = "d";

    Game_Player.prototype.getInputDirection = function() {
        if (Input.isPressed("w")) return 8;
        else if (Input.isPressed("a")) return 4;
        else if (Input.isPressed("s")) return 2;
        else if (Input.isPressed("d")) return 6;
        return Input.dir4;
    };
  }

  Sprite_Animation.prototype.setupRate = function() {
    this._rate = (60 / BASE.ANIMATION_RATE);
  };

  if (!!!BASE.ENABLE_FAST_FORWARD) {
    Scene_Map.prototype.isFastForward = function() {
      return false;
    };
  }

  if(BASE.FULLSCREEN) {
    if(Utils.isNwjs()) {
      let body = document.body;
      if (body.requestFullscreen) {
        body.requestFullscreen();
      } 
      if (body.webkitRequestFullscreen) {
        body.webkitRequestFullscreen();
      } 
    }
  }

  if (BASE.MESSAGE_SE !== "" && 
      BASE.MESSAGE_SE !== "null" &&
      BASE.MESSAGE_SE !== "undefined") {
    let _Window_Message_processNormalCharacter = Window_Message.prototype.processNormalCharacter;
    Window_Message.prototype.processNormalCharacter = function(textState) {
        if (!this._showFast) {
          AudioManager.playSe({name: BASE.MESSAGE_SE, volume: 100, pitch: 70, pan: 0});
        }
        _Window_Message_processNormalCharacter.call(this, textState);
    };
  }

  Window_Base.prototype.standardFontFace = function() {
    return "GameFont";
  };
})();

//======================================================================
// Titile
//======================================================================
(function(){

  const parameters = PluginManager.parameters('Integration');

  const TITLE = {};
  TITLE.JUMP                   = String(parameters["Title.Jump"]);
  TITLE.WINDOS_X               = Number(parameters["Title.WindowX"]);
  TITLE.WINDOS_Y               = Number(parameters["Title.WindowY"]);
  TITLE.SHOW_CONTINUE          = Boolean(parameters["Title.ShowContinue"] == "true");
  TITLE.SHOW_CONTINUE_IF_EXIST = Boolean(parameters["Title.ShowContinueIfExist"] == "true");
  TITLE.SHOW_OPTION            = Boolean(parameters["Title.ShowOption"] == "true");

  Window_TitleCommand.prototype.updatePlacement = function() {
    this.x = TITLE.WINDOS_X;
    this.y = TITLE.WINDOS_Y;
  };

  Window_TitleCommand.prototype.makeCommandList = function() {
    this.addCommand(TextManager.newGame,   'newGame');

    if (TITLE.SHOW_CONTINUE) {
      if (TITLE.SHOW_CONTINUE_IF_EXIST) {
        if (this.isContinueEnabled()) {
          this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
        }
      }
      else {
        this.addCommand(TextManager.continue_, 'continue', this.isContinueEnabled());
      }
    }

    if (TITLE.SHOW_OPTION) {
      this.addCommand(TextManager.options,   'options');
    }
  };

  Scene_Boot.prototype.startNextScene = function() {
    if (TITLE.JUMP === "None") {
      SceneManager.goto(Scene_Title);
      Window_TitleCommand.initCommandPosition();
    }
    if (TITLE.JUMP === "First") {
      if(DataManager.isAnySavefileExists()) {
        SceneManager.goto(Scene_Title);
        Window_TitleCommand.initCommandPosition();
      }
      else {
        this.startFadeOut(1);
        SceneManager.goto(Scene_Map);
      }
    }
    if (TITLE.JUMP === "Always") {
      this.startFadeOut(1);
      SceneManager.goto(Scene_Map);
    }
  };

  Scene_Boot.prototype.start = function() {
      Scene_Base.prototype.start.call(this);
      SoundManager.preloadImportantSounds();
      if (DataManager.isBattleTest()) {
          DataManager.setupBattleTest();
          SceneManager.goto(Scene_Battle);
      } else if (DataManager.isEventTest()) {
          DataManager.setupEventTest();
          SceneManager.goto(Scene_Map);
      } else {
          this.checkPlayerLocation();
          DataManager.setupNewGame();
          this.startNextScene();
      }
      this.updateDocumentTitle();
  };

  let _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    if (TITLE.JUMP === "First") {
      if(!DataManager.isAnySavefileExists()) {
        this.startFadeIn();
      }
    }
    if (TITLE.JUMP === "Always") {
      this.startFadeIn();
    }
  };
})();

//======================================================================
// pixi-filters - v3.1.0
// Compiled Wed, 11 Mar 2020 20:38:18 UTC
//
// pixi-filters is licensed under the MIT License.
// http://www.opensource.org/licenses/mit-license
// 
// sourceMappingURL=pixi-filters.js.map
//======================================================================
(function(){
  var __filters=function(e,t,n,r,o,i,l,s){"use strict";var a="attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}",u="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float gamma;\nuniform float contrast;\nuniform float saturation;\nuniform float brightness;\nuniform float red;\nuniform float green;\nuniform float blue;\nuniform float alpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (c.a > 0.0) {\n        c.rgb /= c.a;\n\n        vec3 rgb = pow(c.rgb, vec3(1. / gamma));\n        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);\n        rgb.r *= red;\n        rgb.g *= green;\n        rgb.b *= blue;\n        c.rgb = rgb * brightness;\n\n        c.rgb *= c.a;\n    }\n\n    gl_FragColor = c * alpha;\n}\n",c=function(e){function t(t){e.call(this,a,u),Object.assign(this,{gamma:1,saturation:1,contrast:1,brightness:1,red:1,green:1,blue:1,alpha:1},t)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.apply=function(e,t,n,r){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,e.applyFilter(this,t,n,r)},t}(t.Filter),f=a,h="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}",p="\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 uOffset;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n\n    // Sample top left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample top right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom right pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Sample bottom left pixel\n    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));\n\n    // Average\n    color *= 0.25;\n\n    gl_FragColor = color;\n}\n",d=function(e){function t(t,r,o){void 0===t&&(t=4),void 0===r&&(r=3),void 0===o&&(o=!1),e.call(this,f,o?p:h),this.uniforms.uOffset=new Float32Array(2),this._pixelSize=new n.Point,this.pixelSize=1,this._clamp=o,this._kernels=null,Array.isArray(t)?this.kernels=t:(this._blur=t,this.quality=r)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={kernels:{configurable:!0},clamp:{configurable:!0},pixelSize:{configurable:!0},quality:{configurable:!0},blur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o,i=this.pixelSize.x/t._frame.width,l=this.pixelSize.y/t._frame.height;if(1===this._quality||0===this._blur)o=this._kernels[0]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,t,n,r);else{for(var s,a=e.getFilterTexture(),u=t,c=a,f=this._quality-1,h=0;h<f;h++)o=this._kernels[h]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,c,1),s=u,u=c,c=s;o=this._kernels[f]+.5,this.uniforms.uOffset[0]=o*i,this.uniforms.uOffset[1]=o*l,e.applyFilter(this,u,n,r),e.returnFilterTexture(a)}},t.prototype._generateKernels=function(){var e=this._blur,t=this._quality,n=[e];if(e>0)for(var r=e,o=e/t,i=1;i<t;i++)r-=o,n.push(r);this._kernels=n},r.kernels.get=function(){return this._kernels},r.kernels.set=function(e){Array.isArray(e)&&e.length>0?(this._kernels=e,this._quality=e.length,this._blur=Math.max.apply(Math,e)):(this._kernels=[0],this._quality=1)},r.clamp.get=function(){return this._clamp},r.pixelSize.set=function(e){"number"==typeof e?(this._pixelSize.x=e,this._pixelSize.y=e):Array.isArray(e)?(this._pixelSize.x=e[0],this._pixelSize.y=e[1]):e instanceof n.Point?(this._pixelSize.x=e.x,this._pixelSize.y=e.y):(this._pixelSize.x=1,this._pixelSize.y=1)},r.pixelSize.get=function(){return this._pixelSize},r.quality.get=function(){return this._quality},r.quality.set=function(e){this._quality=Math.max(1,Math.round(e)),this._generateKernels()},r.blur.get=function(){return this._blur},r.blur.set=function(e){this._blur=e,this._generateKernels()},Object.defineProperties(t.prototype,r),t}(t.Filter),m=a,g="\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform float threshold;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    // A simple & fast algorithm for getting brightness.\n    // It's inaccuracy , but good enought for this feature.\n    float _max = max(max(color.r, color.g), color.b);\n    float _min = min(min(color.r, color.g), color.b);\n    float brightness = (_max + _min) * 0.5;\n\n    if(brightness > threshold) {\n        gl_FragColor = color;\n    } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n    }\n}\n",v=function(e){function t(t){void 0===t&&(t=.5),e.call(this,m,g),this.threshold=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={threshold:{configurable:!0}};return n.threshold.get=function(){return this.uniforms.threshold},n.threshold.set=function(e){this.uniforms.threshold=e},Object.defineProperties(t.prototype,n),t}(t.Filter),x="uniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D bloomTexture;\nuniform float bloomScale;\nuniform float brightness;\n\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    color.rgb *= brightness;\n    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);\n    bloomColor.rgb *= bloomScale;\n    gl_FragColor = color + bloomColor;\n}\n",y=function(e){function t(t){e.call(this,m,x),"number"==typeof t&&(t={threshold:t}),t=Object.assign({threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:r.settings.RESOLUTION},t),this.bloomScale=t.bloomScale,this.brightness=t.brightness;var n=t.kernels,o=t.blur,i=t.quality,l=t.pixelSize,s=t.resolution;this._extractFilter=new v(t.threshold),this._extractFilter.resolution=s,this._blurFilter=n?new d(n):new d(o,i),this.pixelSize=l,this.resolution=s}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={resolution:{configurable:!0},threshold:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return t.prototype.apply=function(e,t,n,r,o){var i=e.getFilterTexture();this._extractFilter.apply(e,t,i,1,o);var l=e.getFilterTexture();this._blurFilter.apply(e,i,l,1,o),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=l,e.applyFilter(this,t,n,r),e.returnFilterTexture(l),e.returnFilterTexture(i)},n.resolution.get=function(){return this._resolution},n.resolution.set=function(e){this._resolution=e,this._extractFilter&&(this._extractFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},n.threshold.get=function(){return this._extractFilter.threshold},n.threshold.set=function(e){this._extractFilter.threshold=e},n.kernels.get=function(){return this._blurFilter.kernels},n.kernels.set=function(e){this._blurFilter.kernels=e},n.blur.get=function(){return this._blurFilter.blur},n.blur.set=function(e){this._blurFilter.blur=e},n.quality.get=function(){return this._blurFilter.quality},n.quality.set=function(e){this._blurFilter.quality=e},n.pixelSize.get=function(){return this._blurFilter.pixelSize},n.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),_=a,b="varying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform float pixelSize;\nuniform sampler2D uSampler;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n    return floor( coord / size ) * size;\n}\n\nvec2 getMod(vec2 coord, vec2 size)\n{\n    return mod( coord , size) / size;\n}\n\nfloat character(float n, vec2 p)\n{\n    p = floor(p*vec2(4.0, -4.0) + 2.5);\n\n    if (clamp(p.x, 0.0, 4.0) == p.x)\n    {\n        if (clamp(p.y, 0.0, 4.0) == p.y)\n        {\n            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;\n        }\n    }\n    return 0.0;\n}\n\nvoid main()\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    // get the rounded color..\n    vec2 pixCoord = pixelate(coord, vec2(pixelSize));\n    pixCoord = unmapCoord(pixCoord);\n\n    vec4 color = texture2D(uSampler, pixCoord);\n\n    // determine the character to use\n    float gray = (color.r + color.g + color.b) / 3.0;\n\n    float n =  65536.0;             // .\n    if (gray > 0.2) n = 65600.0;    // :\n    if (gray > 0.3) n = 332772.0;   // *\n    if (gray > 0.4) n = 15255086.0; // o\n    if (gray > 0.5) n = 23385164.0; // &\n    if (gray > 0.6) n = 15252014.0; // 8\n    if (gray > 0.7) n = 13199452.0; // @\n    if (gray > 0.8) n = 11512810.0; // #\n\n    // get the mod..\n    vec2 modd = getMod(coord, vec2(pixelSize));\n\n    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);\n\n}\n",C=function(e){function t(t){void 0===t&&(t=8),e.call(this,_,b),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.pixelSize},n.size.set=function(e){this.uniforms.pixelSize=e},Object.defineProperties(t.prototype,n),t}(t.Filter),S=a,F="precision mediump float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float transformX;\nuniform float transformY;\nuniform vec3 lightColor;\nuniform float lightAlpha;\nuniform vec3 shadowColor;\nuniform float shadowAlpha;\n\nvoid main(void) {\n    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float light = texture2D(uSampler, vTextureCoord - transform).a;\n    float shadow = texture2D(uSampler, vTextureCoord + transform).a;\n\n    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));\n    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));\n    gl_FragColor = vec4(color.rgb * color.a, color.a);\n}\n",z=function(e){function t(t){void 0===t&&(t={}),e.call(this,S,F),this.uniforms.lightColor=new Float32Array(3),this.uniforms.shadowColor=new Float32Array(3),t=Object.assign({rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),this.rotation=t.rotation,this.thickness=t.thickness,this.lightColor=t.lightColor,this.lightAlpha=t.lightAlpha,this.shadowColor=t.shadowColor,this.shadowAlpha=t.shadowAlpha}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={rotation:{configurable:!0},thickness:{configurable:!0},lightColor:{configurable:!0},lightAlpha:{configurable:!0},shadowColor:{configurable:!0},shadowAlpha:{configurable:!0}};return t.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},r.rotation.get=function(){return this._angle/n.DEG_TO_RAD},r.rotation.set=function(e){this._angle=e*n.DEG_TO_RAD,this._updateTransform()},r.thickness.get=function(){return this._thickness},r.thickness.set=function(e){this._thickness=e,this._updateTransform()},r.lightColor.get=function(){return o.rgb2hex(this.uniforms.lightColor)},r.lightColor.set=function(e){o.hex2rgb(e,this.uniforms.lightColor)},r.lightAlpha.get=function(){return this.uniforms.lightAlpha},r.lightAlpha.set=function(e){this.uniforms.lightAlpha=e},r.shadowColor.get=function(){return o.rgb2hex(this.uniforms.shadowColor)},r.shadowColor.set=function(e){o.hex2rgb(e,this.uniforms.shadowColor)},r.shadowAlpha.get=function(){return this.uniforms.shadowAlpha},r.shadowAlpha.set=function(e){this.uniforms.shadowAlpha=e},Object.defineProperties(t.prototype,r),t}(t.Filter),A=function(e){function t(t,o,a,u){var c,f;void 0===t&&(t=2),void 0===o&&(o=4),void 0===a&&(a=r.settings.RESOLUTION),void 0===u&&(u=5),e.call(this),"number"==typeof t?(c=t,f=t):t instanceof n.Point?(c=t.x,f=t.y):Array.isArray(t)&&(c=t[0],f=t[1]),this.blurXFilter=new s.BlurFilterPass(!0,c,o,a,u),this.blurYFilter=new s.BlurFilterPass(!1,f,o,a,u),this.blurYFilter.blendMode=i.BLEND_MODES.SCREEN,this.defaultFilter=new l.AlphaFilter}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var o={blur:{configurable:!0},blurX:{configurable:!0},blurY:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getFilterTexture(!0);this.defaultFilter.apply(e,t,n),this.blurXFilter.apply(e,t,r),this.blurYFilter.apply(e,r,n),e.returnFilterTexture(r)},o.blur.get=function(){return this.blurXFilter.blur},o.blur.set=function(e){this.blurXFilter.blur=this.blurYFilter.blur=e},o.blurX.get=function(){return this.blurXFilter.blur},o.blurX.set=function(e){this.blurXFilter.blur=e},o.blurY.get=function(){return this.blurYFilter.blur},o.blurY.set=function(e){this.blurYFilter.blur=e},Object.defineProperties(t.prototype,o),t}(t.Filter),w=a,T="uniform float radius;\nuniform float strength;\nuniform vec2 center;\nuniform sampler2D uSampler;\nvarying vec2 vTextureCoord;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nvoid main()\n{\n    vec2 coord = vTextureCoord * filterArea.xy;\n    coord -= center * dimensions.xy;\n    float distance = length(coord);\n    if (distance < radius) {\n        float percent = distance / radius;\n        if (strength > 0.0) {\n            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);\n        } else {\n            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);\n        }\n    }\n    coord += center * dimensions.xy;\n    coord /= filterArea.xy;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    gl_FragColor = color;\n}\n",O=function(e){function t(t){if(e.call(this,w,T),"object"!=typeof t){var n=arguments[0],r=arguments[1],o=arguments[2];t={},void 0!==n&&(t.center=n),void 0!==r&&(t.radius=r),void 0!==o&&(t.strength=o)}this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{center:[.5,.5],radius:100,strength:1},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={radius:{configurable:!0},strength:{configurable:!0},center:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,e.applyFilter(this,t,n,r)},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},Object.defineProperties(t.prototype,n),t}(t.Filter),D=a,P="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D colorMap;\nuniform float _mix;\nuniform float _size;\nuniform float _sliceSize;\nuniform float _slicePixelSize;\nuniform float _sliceInnerSize;\nvoid main() {\n    vec4 color = texture2D(uSampler, vTextureCoord.xy);\n\n    vec4 adjusted;\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n        float innerWidth = _size - 1.0;\n        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);\n        float zSlice1 = min(zSlice0 + 1.0, innerWidth);\n        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;\n        float s0 = xOffset + (zSlice0 * _sliceSize);\n        float s1 = xOffset + (zSlice1 * _sliceSize);\n        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);\n        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));\n        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));\n        float zOffset = fract(color.b * innerWidth);\n        adjusted = mix(slice0Color, slice1Color, zOffset);\n\n        color.rgb *= color.a;\n    }\n    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);\n\n}",M=function(e){function n(t,n,r){void 0===n&&(n=!1),void 0===r&&(r=1),e.call(this,D,P),this._size=0,this._sliceSize=0,this._slicePixelSize=0,this._sliceInnerSize=0,this._scaleMode=null,this._nearest=!1,this.nearest=n,this.mix=r,this.colorMap=t}e&&(n.__proto__=e),n.prototype=Object.create(e&&e.prototype),n.prototype.constructor=n;var r={colorSize:{configurable:!0},colorMap:{configurable:!0},nearest:{configurable:!0}};return n.prototype.apply=function(e,t,n,r){this.uniforms._mix=this.mix,e.applyFilter(this,t,n,r)},r.colorSize.get=function(){return this._size},r.colorMap.get=function(){return this._colorMap},r.colorMap.set=function(e){e instanceof t.Texture||(e=t.Texture.from(e)),e&&e.baseTexture&&(e.baseTexture.scaleMode=this._scaleMode,e.baseTexture.mipmap=!1,this._size=e.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=e),this._colorMap=e},r.nearest.get=function(){return this._nearest},r.nearest.set=function(e){this._nearest=e,this._scaleMode=e?i.SCALE_MODES.NEAREST:i.SCALE_MODES.LINEAR;var t=this._colorMap;t&&t.baseTexture&&(t.baseTexture._glTextures={},t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=!1,t._updateID++,t.baseTexture.emit("update",t.baseTexture))},n.prototype.updateColorMap=function(){var e=this._colorMap;e&&e.baseTexture&&(e._updateID++,e.baseTexture.emit("update",e.baseTexture),this.colorMap=e)},n.prototype.destroy=function(t){this._colorMap&&this._colorMap.destroy(t),e.prototype.destroy.call(this)},Object.defineProperties(n.prototype,r),n}(t.Filter),R=a,k="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 color;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorOverlay = color * currentColor.a;\n    gl_FragColor = vec4(colorOverlay.r, colorOverlay.g, colorOverlay.b, currentColor.a);\n}\n",j=function(e){function t(t){void 0===t&&(t=0),e.call(this,R,k),this.uniforms.color=new Float32Array(3),this.color=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0}};return n.color.set=function(e){var t=this.uniforms.color;"number"==typeof e?(o.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._color=o.rgb2hex(t))},n.color.get=function(){return this._color},Object.defineProperties(t.prototype,n),t}(t.Filter),E=a,L="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec3 originalColor;\nuniform vec3 newColor;\nuniform float epsilon;\nvoid main(void) {\n    vec4 currentColor = texture2D(uSampler, vTextureCoord);\n    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));\n    float colorDistance = length(colorDiff);\n    float doReplace = step(colorDistance, epsilon);\n    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);\n}\n",I=function(e){function t(t,n,r){void 0===t&&(t=16711680),void 0===n&&(n=0),void 0===r&&(r=.4),e.call(this,E,L),this.uniforms.originalColor=new Float32Array(3),this.uniforms.newColor=new Float32Array(3),this.originalColor=t,this.newColor=n,this.epsilon=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={originalColor:{configurable:!0},newColor:{configurable:!0},epsilon:{configurable:!0}};return n.originalColor.set=function(e){var t=this.uniforms.originalColor;"number"==typeof e?(o.hex2rgb(e,t),this._originalColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._originalColor=o.rgb2hex(t))},n.originalColor.get=function(){return this._originalColor},n.newColor.set=function(e){var t=this.uniforms.newColor;"number"==typeof e?(o.hex2rgb(e,t),this._newColor=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],this._newColor=o.rgb2hex(t))},n.newColor.get=function(){return this._newColor},n.epsilon.set=function(e){this.uniforms.epsilon=e},n.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(t.prototype,n),t}(t.Filter),X=a,B="precision mediump float;\n\nvarying mediump vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec2 texelSize;\nuniform float matrix[9];\n\nvoid main(void)\n{\n   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left\n   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center\n   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right\n\n   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left\n   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center\n   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right\n\n   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left\n   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center\n   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right\n\n   gl_FragColor =\n       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +\n       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +\n       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];\n\n   gl_FragColor.a = c22.a;\n}\n",N=function(e){function t(t,n,r){void 0===n&&(n=200),void 0===r&&(r=200),e.call(this,X,B),this.uniforms.texelSize=new Float32Array(2),this.uniforms.matrix=new Float32Array(9),void 0!==t&&(this.matrix=t),this.width=n,this.height=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={matrix:{configurable:!0},width:{configurable:!0},height:{configurable:!0}};return n.matrix.get=function(){return this.uniforms.matrix},n.matrix.set=function(e){var t=this;e.forEach(function(e,n){return t.uniforms.matrix[n]=e})},n.width.get=function(){return 1/this.uniforms.texelSize[0]},n.width.set=function(e){this.uniforms.texelSize[0]=1/e},n.height.get=function(){return 1/this.uniforms.texelSize[1]},n.height.set=function(e){this.uniforms.texelSize[1]=1/e},Object.defineProperties(t.prototype,n),t}(t.Filter),G=a,q="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);\n\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n\n    if (lum < 1.00)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.75)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.50)\n    {\n        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n\n    if (lum < 0.3)\n    {\n        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)\n        {\n            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n    }\n}\n",W=function(e){function t(){e.call(this,G,q)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t}(t.Filter),K=a,Y="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nconst float SQRT_2 = 1.414213;\n\nconst float light = 1.0;\n\nuniform float curvature;\nuniform float lineWidth;\nuniform float lineContrast;\nuniform bool verticalLine;\nuniform float noise;\nuniform float noiseSize;\n\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\n\nuniform float seed;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    vec2 dir = vec2(coord - vec2(0.5, 0.5));\n\n    float _c = curvature > 0. ? curvature : 1.;\n    float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;\n    vec2 uv = dir * k;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 rgb = gl_FragColor.rgb;\n\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        rgb += _noise * noise;\n    }\n\n    if (lineWidth > 0.0) {\n        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;\n        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;\n        rgb *= j;\n        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);\n        rgb *= 0.99 + ceil(segment) * 0.015;\n    }\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    gl_FragColor.rgb = rgb;\n}\n",Z=function(e){function t(t){e.call(this,K,Y),this.uniforms.dimensions=new Float32Array(2),this.time=0,this.seed=0,Object.assign(this,{curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={curvature:{configurable:!0},lineWidth:{configurable:!0},lineContrast:{configurable:!0},verticalLine:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.destinationFrame.width,this.uniforms.dimensions[1]=t.destinationFrame.height,this.uniforms.seed=this.seed,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.curvature.set=function(e){this.uniforms.curvature=e},n.curvature.get=function(){return this.uniforms.curvature},n.lineWidth.set=function(e){this.uniforms.lineWidth=e},n.lineWidth.get=function(){return this.uniforms.lineWidth},n.lineContrast.set=function(e){this.uniforms.lineContrast=e},n.lineContrast.get=function(){return this.uniforms.lineContrast},n.verticalLine.set=function(e){this.uniforms.verticalLine=e},n.verticalLine.get=function(){return this.uniforms.verticalLine},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),Q=a,U="precision mediump float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform vec4 filterArea;\nuniform sampler2D uSampler;\n\nuniform float angle;\nuniform float scale;\n\nfloat pattern()\n{\n   float s = sin(angle), c = cos(angle);\n   vec2 tex = vTextureCoord * filterArea.xy;\n   vec2 point = vec2(\n       c * tex.x - s * tex.y,\n       s * tex.x + c * tex.y\n   ) * scale;\n   return (sin(point.x) * sin(point.y)) * 4.0;\n}\n\nvoid main()\n{\n   vec4 color = texture2D(uSampler, vTextureCoord);\n   float average = (color.r + color.g + color.b) / 3.0;\n   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);\n}\n",V=function(e){function t(t,n){void 0===t&&(t=1),void 0===n&&(n=5),e.call(this,Q,U),this.scale=t,this.angle=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={scale:{configurable:!0},angle:{configurable:!0}};return n.scale.get=function(){return this.uniforms.scale},n.scale.set=function(e){this.uniforms.scale=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),H=a,$="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float alpha;\nuniform vec3 color;\n\nuniform vec2 shift;\nuniform vec4 inputSize;\n\nvoid main(void){\n    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);\n\n    // Premultiply alpha\n    sample.rgb = color.rgb * sample.a;\n\n    // alpha user alpha\n    sample *= alpha;\n\n    gl_FragColor = sample;\n}",J=function(e){function t(t){t&&t.constructor!==Object&&(console.warn("DropShadowFilter now uses options instead of (rotation, distance, blur, color, alpha)"),t={rotation:t},void 0!==arguments[1]&&(t.distance=arguments[1]),void 0!==arguments[2]&&(t.blur=arguments[2]),void 0!==arguments[3]&&(t.color=arguments[3]),void 0!==arguments[4]&&(t.alpha=arguments[4])),t=Object.assign({rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:r.settings.RESOLUTION},t),e.call(this);var o=t.kernels,i=t.blur,l=t.quality,s=t.pixelSize,a=t.resolution;this._tintFilter=new e(H,$),this._tintFilter.uniforms.color=new Float32Array(4),this._tintFilter.uniforms.shift=new n.Point,this._tintFilter.resolution=a,this._blurFilter=o?new d(o):new d(i,l),this.pixelSize=s,this.resolution=a;var u=t.shadowOnly,c=t.rotation,f=t.distance,h=t.alpha,p=t.color;this.shadowOnly=u,this.rotation=c,this.distance=f,this.alpha=h,this.color=p,this._updatePadding()}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var i={resolution:{configurable:!0},distance:{configurable:!0},rotation:{configurable:!0},alpha:{configurable:!0},color:{configurable:!0},kernels:{configurable:!0},blur:{configurable:!0},quality:{configurable:!0},pixelSize:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=e.getFilterTexture();this._tintFilter.apply(e,t,o,1),this._blurFilter.apply(e,o,n,r),!0!==this.shadowOnly&&e.applyFilter(this,t,n,0),e.returnFilterTexture(o)},t.prototype._updatePadding=function(){this.padding=this.distance+2*this.blur},t.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},i.resolution.get=function(){return this._resolution},i.resolution.set=function(e){this._resolution=e,this._tintFilter&&(this._tintFilter.resolution=e),this._blurFilter&&(this._blurFilter.resolution=e)},i.distance.get=function(){return this._distance},i.distance.set=function(e){this._distance=e,this._updatePadding(),this._updateShift()},i.rotation.get=function(){return this.angle/n.DEG_TO_RAD},i.rotation.set=function(e){this.angle=e*n.DEG_TO_RAD,this._updateShift()},i.alpha.get=function(){return this._tintFilter.uniforms.alpha},i.alpha.set=function(e){this._tintFilter.uniforms.alpha=e},i.color.get=function(){return o.rgb2hex(this._tintFilter.uniforms.color)},i.color.set=function(e){o.hex2rgb(e,this._tintFilter.uniforms.color)},i.kernels.get=function(){return this._blurFilter.kernels},i.kernels.set=function(e){this._blurFilter.kernels=e},i.blur.get=function(){return this._blurFilter.blur},i.blur.set=function(e){this._blurFilter.blur=e,this._updatePadding()},i.quality.get=function(){return this._blurFilter.quality},i.quality.set=function(e){this._blurFilter.quality=e},i.pixelSize.get=function(){return this._blurFilter.pixelSize},i.pixelSize.set=function(e){this._blurFilter.pixelSize=e},Object.defineProperties(t.prototype,i),t}(t.Filter),ee=a,te="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float strength;\nuniform vec4 filterArea;\n\n\nvoid main(void)\n{\n\tvec2 onePixel = vec2(1.0 / filterArea);\n\n\tvec4 color;\n\n\tcolor.rgb = vec3(0.5);\n\n\tcolor -= texture2D(uSampler, vTextureCoord - onePixel) * strength;\n\tcolor += texture2D(uSampler, vTextureCoord + onePixel) * strength;\n\n\tcolor.rgb = vec3((color.r + color.g + color.b) / 3.0);\n\n\tfloat alpha = texture2D(uSampler, vTextureCoord).a;\n\n\tgl_FragColor = vec4(color.rgb * alpha, alpha);\n}\n",ne=function(e){function t(t){void 0===t&&(t=5),e.call(this,ee,te),this.strength=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={strength:{configurable:!0}};return n.strength.get=function(){return this.uniforms.strength},n.strength.set=function(e){this.uniforms.strength=e},Object.defineProperties(t.prototype,n),t}(t.Filter),re=a,oe="// precision highp float;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\nuniform float aspect;\n\nuniform sampler2D displacementMap;\nuniform float offset;\nuniform float sinDir;\nuniform float cosDir;\nuniform int fillMode;\n\nuniform float seed;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nconst int TRANSPARENT = 0;\nconst int ORIGINAL = 1;\nconst int LOOP = 2;\nconst int CLAMP = 3;\nconst int MIRROR = 4;\n\nvoid main(void)\n{\n    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;\n\n    if (coord.x > 1.0 || coord.y > 1.0) {\n        return;\n    }\n\n    float cx = coord.x - 0.5;\n    float cy = (coord.y - 0.5) * aspect;\n    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;\n\n    // displacementMap: repeat\n    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);\n\n    // displacementMap: mirror\n    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);\n\n    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));\n\n    float displacement = (dc.r - dc.g) * (offset / filterArea.x);\n\n    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);\n\n    if (fillMode == CLAMP) {\n        coord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    } else {\n        if( coord.x > filterClamp.z ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x -= filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x = filterClamp.z * 2.0 - coord.x;\n            }\n        } else if( coord.x < filterClamp.x ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.x += filterClamp.z;\n            } else if (fillMode == MIRROR) {\n                coord.x *= -filterClamp.z;\n            }\n        }\n\n        if( coord.y > filterClamp.w ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y -= filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y = filterClamp.w * 2.0 - coord.y;\n            }\n        } else if( coord.y < filterClamp.y ) {\n            if (fillMode == TRANSPARENT) {\n                discard;\n            } else if (fillMode == LOOP) {\n                coord.y += filterClamp.w;\n            } else if (fillMode == MIRROR) {\n                coord.y *= -filterClamp.w;\n            }\n        }\n    }\n\n    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;\n    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;\n    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;\n    gl_FragColor.a = texture2D(uSampler, coord).a;\n}\n",ie=function(e){function r(n){void 0===n&&(n={}),e.call(this,re,oe),this.uniforms.dimensions=new Float32Array(2),n=Object.assign({slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},n),this.direction=n.direction,this.red=n.red,this.green=n.green,this.blue=n.blue,this.offset=n.offset,this.fillMode=n.fillMode,this.average=n.average,this.seed=n.seed,this.minSize=n.minSize,this.sampleSize=n.sampleSize,this._canvas=document.createElement("canvas"),this._canvas.width=4,this._canvas.height=this.sampleSize,this.texture=t.Texture.from(this._canvas,{scaleMode:i.SCALE_MODES.NEAREST}),this._slices=0,this.slices=n.slices}e&&(r.__proto__=e),r.prototype=Object.create(e&&e.prototype),r.prototype.constructor=r;var o={sizes:{configurable:!0},offsets:{configurable:!0},slices:{configurable:!0},direction:{configurable:!0},red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return r.prototype.apply=function(e,t,n,r){var o=t.filterFrame.width,i=t.filterFrame.height;this.uniforms.dimensions[0]=o,this.uniforms.dimensions[1]=i,this.uniforms.aspect=i/o,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,e.applyFilter(this,t,n,r)},r.prototype._randomizeSizes=function(){var e=this._sizes,t=this._slices-1,n=this.sampleSize,r=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var o=this._slices,i=1,l=0;l<t;l++){var s=i/(o-l),a=Math.max(s*(1-.6*Math.random()),r);e[l]=a,i-=a}e[t]=i}else{for(var u=1,c=Math.sqrt(1/this._slices),f=0;f<t;f++){var h=Math.max(c*u*Math.random(),r);e[f]=h,u-=h}e[t]=u}this.shuffle()},r.prototype.shuffle=function(){for(var e=this._sizes,t=this._slices-1;t>0;t--){var n=Math.random()*t>>0,r=e[t];e[t]=e[n],e[n]=r}},r.prototype._randomizeOffsets=function(){for(var e=0;e<this._slices;e++)this._offsets[e]=Math.random()*(Math.random()<.5?-1:1)},r.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},r.prototype.redraw=function(){var e,t=this.sampleSize,n=this.texture,r=this._canvas.getContext("2d");r.clearRect(0,0,8,t);for(var o=0,i=0;i<this._slices;i++){e=Math.floor(256*this._offsets[i]);var l=this._sizes[i]*t,s=e>0?e:0,a=e<0?-e:0;r.fillStyle="rgba("+s+", "+a+", 0, 1)",r.fillRect(0,o>>0,t,l+1>>0),o+=l}n.baseTexture.update(),this.uniforms.displacementMap=n},o.sizes.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._sizes[n]=e[n]},o.sizes.get=function(){return this._sizes},o.offsets.set=function(e){for(var t=Math.min(this._slices,e.length),n=0;n<t;n++)this._offsets[n]=e[n]},o.offsets.get=function(){return this._offsets},o.slices.get=function(){return this._slices},o.slices.set=function(e){this._slices!==e&&(this._slices=e,this.uniforms.slices=e,this._sizes=this.uniforms.slicesWidth=new Float32Array(e),this._offsets=this.uniforms.slicesOffset=new Float32Array(e),this.refresh())},o.direction.get=function(){return this._direction},o.direction.set=function(e){if(this._direction!==e){this._direction=e;var t=e*n.DEG_TO_RAD;this.uniforms.sinDir=Math.sin(t),this.uniforms.cosDir=Math.cos(t)}},o.red.get=function(){return this.uniforms.red},o.red.set=function(e){this.uniforms.red=e},o.green.get=function(){return this.uniforms.green},o.green.set=function(e){this.uniforms.green=e},o.blue.get=function(){return this.uniforms.blue},o.blue.set=function(e){this.uniforms.blue=e},r.prototype.destroy=function(){this.texture.destroy(!0),this.texture=null,this._canvas=null,this.red=null,this.green=null,this.blue=null,this._sizes=null,this._offsets=null},Object.defineProperties(r.prototype,o),r}(t.Filter);ie.TRANSPARENT=0,ie.ORIGINAL=1,ie.LOOP=2,ie.CLAMP=3,ie.MIRROR=4;var le=a,se="varying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform sampler2D uSampler;\n\nuniform float outerStrength;\nuniform float innerStrength;\n\nuniform vec4 glowColor;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform bool knockout;\n\nconst float PI = 3.14159265358979323846264;\n\nconst float DIST = __DIST__;\nconst float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);\nconst float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);\n\nconst float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;\n\nvoid main(void) {\n    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);\n\n    float totalAlpha = 0.0;\n\n    vec2 direction;\n    vec2 displaced;\n    vec4 curColor;\n\n    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {\n       direction = vec2(cos(angle), sin(angle)) * px;\n\n       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {\n           displaced = clamp(vTextureCoord + direction * \n                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);\n\n           curColor = texture2D(uSampler, displaced);\n\n           totalAlpha += (DIST - curDistance) * curColor.a;\n       }\n    }\n    \n    curColor = texture2D(uSampler, vTextureCoord);\n\n    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);\n\n    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;\n    float innerGlowStrength = min(1.0, innerGlowAlpha);\n    \n    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);\n\n    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);\n    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);\n\n    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;\n    \n    if (knockout) {\n      float resultAlpha = outerGlowAlpha + innerGlowAlpha;\n      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);\n    }\n    else {\n      gl_FragColor = innerColor + outerGlowColor;\n    }\n}\n",ae=function(e){function t(n){var r=Object.assign({},t.defaults,n),o=r.distance,i=r.outerStrength,l=r.innerStrength,s=r.color,a=r.knockout,u=r.quality;o=Math.round(o),e.call(this,le,se.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/u/o).toFixed(7)).replace(/__DIST__/gi,o.toFixed(0)+".0")),this.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(this,{color:s,outerStrength:i,innerStrength:l,padding:o,knockout:a})}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0},outerStrength:{configurable:!0},innerStrength:{configurable:!0},knockout:{configurable:!0}};return n.color.get=function(){return o.rgb2hex(this.uniforms.glowColor)},n.color.set=function(e){o.hex2rgb(e,this.uniforms.glowColor)},n.outerStrength.get=function(){return this.uniforms.outerStrength},n.outerStrength.set=function(e){this.uniforms.outerStrength=e},n.innerStrength.get=function(){return this.uniforms.innerStrength},n.innerStrength.set=function(e){this.uniforms.innerStrength=e},n.knockout.get=function(){return this.uniforms.knockout},n.knockout.set=function(e){this.uniforms.knockout=e},Object.defineProperties(t.prototype,n),t}(t.Filter);ae.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1};var ue=a,ce="vec3 mod289(vec3 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 mod289(vec4 x)\n{\n    return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute(vec4 x)\n{\n    return mod289(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt(vec4 r)\n{\n    return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec3 fade(vec3 t)\n{\n    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n    Pi0 = mod289(Pi0);\n    Pi1 = mod289(Pi1);\n    vec3 Pf0 = fract(P); // Fractional part for interpolation\n    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n    vec4 iy = vec4(Pi0.yy, Pi1.yy);\n    vec4 iz0 = Pi0.zzzz;\n    vec4 iz1 = Pi1.zzzz;\n    vec4 ixy = permute(permute(ix) + iy);\n    vec4 ixy0 = permute(ixy + iz0);\n    vec4 ixy1 = permute(ixy + iz1);\n    vec4 gx0 = ixy0 * (1.0 / 7.0);\n    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n    gx0 = fract(gx0);\n    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n    vec4 sz0 = step(gz0, vec4(0.0));\n    gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n    gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n    vec4 gx1 = ixy1 * (1.0 / 7.0);\n    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n    gx1 = fract(gx1);\n    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n    vec4 sz1 = step(gz1, vec4(0.0));\n    gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n    gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);\n    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);\n    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);\n    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);\n    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);\n    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);\n    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);\n    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);\n    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n    g000 *= norm0.x;\n    g010 *= norm0.y;\n    g100 *= norm0.z;\n    g110 *= norm0.w;\n    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n    g001 *= norm1.x;\n    g011 *= norm1.y;\n    g101 *= norm1.z;\n    g111 *= norm1.w;\n    float n000 = dot(g000, Pf0);\n    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n    float n111 = dot(g111, Pf1);\n    vec3 fade_xyz = fade(Pf0);\n    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n    return 2.2 * n_xyz;\n}\nfloat turb(vec3 P, vec3 rep, float lacunarity, float gain)\n{\n    float sum = 0.0;\n    float sc = 1.0;\n    float totalgain = 1.0;\n    for (float i = 0.0; i < 6.0; i++)\n    {\n        sum += totalgain * pnoise(P * sc, rep);\n        sc *= lacunarity;\n        totalgain *= gain;\n    }\n    return abs(sum);\n}\n",fe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform vec2 light;\nuniform bool parallel;\nuniform float aspect;\n\nuniform float gain;\nuniform float lacunarity;\nuniform float time;\n\n${perlin}\n\nvoid main(void) {\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    float d;\n\n    if (parallel) {\n        float _cos = light.x;\n        float _sin = light.y;\n        d = (_cos * coord.x) + (_sin * coord.y * aspect);\n    } else {\n        float dx = coord.x - light.x / dimensions.x;\n        float dy = (coord.y - light.y / dimensions.y) * aspect;\n        float dis = sqrt(dx * dx + dy * dy) + 0.00001;\n        d = dy / dis;\n    }\n\n    vec3 dir = vec3(d, d, 0.0);\n\n    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);\n    noise = mix(noise, 0.0, 0.3);\n    //fade vertically.\n    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);\n    mist.a = 1.0;\n\n    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;\n}\n",he=function(e){function t(t){e.call(this,ue,fe.replace("${perlin}",ce)),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t&&(console.warn("GodrayFilter now uses options instead of (angle, gain, lacunarity, time)"),t={angle:t},void 0!==arguments[1]&&(t.gain=arguments[1]),void 0!==arguments[2]&&(t.lacunarity=arguments[2]),void 0!==arguments[3]&&(t.time=arguments[3])),t=Object.assign({angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0]},t),this._angleLight=new n.Point,this.angle=t.angle,this.gain=t.gain,this.lacunarity=t.lacunarity,this.parallel=t.parallel,this.center=t.center,this.time=t.time}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={angle:{configurable:!0},gain:{configurable:!0},lacunarity:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=t.filterFrame,i=o.width,l=o.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=i,this.uniforms.dimensions[1]=l,this.uniforms.aspect=l/i,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},r.angle.get=function(){return this._angle},r.angle.set=function(e){this._angle=e;var t=e*n.DEG_TO_RAD;this._angleLight.x=Math.cos(t),this._angleLight.y=Math.sin(t)},r.gain.get=function(){return this.uniforms.gain},r.gain.set=function(e){this.uniforms.gain=e},r.lacunarity.get=function(){return this.uniforms.lacunarity},r.lacunarity.set=function(e){this.uniforms.lacunarity=e},Object.defineProperties(t.prototype,r),t}(t.Filter),pe=a,de="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uVelocity;\nuniform int uKernelSize;\nuniform float uOffset;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\n// Notice:\n// the perfect way:\n//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);\n// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.\n// So use uKernelSize directly.\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    vec2 velocity = uVelocity / filterArea.xy;\n    float offset = -uOffset / length(uVelocity) - 0.5;\n    int k = uKernelSize - 1;\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n        vec2 bias = velocity * (float(i) / float(k) + offset);\n        color += texture2D(uSampler, vTextureCoord + bias);\n    }\n    gl_FragColor = color / float(uKernelSize);\n}\n",me=function(e){function t(t,r,o){void 0===t&&(t=[0,0]),void 0===r&&(r=5),void 0===o&&(o=0),e.call(this,pe,de),this.uniforms.uVelocity=new Float32Array(2),this._velocity=new n.ObservablePoint(this.velocityChanged,this),this.velocity=t,this.kernelSize=r,this.offset=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={velocity:{configurable:!0},offset:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){var o=this.velocity,i=o.x,l=o.y;this.uniforms.uKernelSize=0!==i||0!==l?this.kernelSize:0,e.applyFilter(this,t,n,r)},r.velocity.set=function(e){Array.isArray(e)?this._velocity.set(e[0],e[1]):(e instanceof n.Point||e instanceof n.ObservablePoint)&&this._velocity.copyFrom(e)},r.velocity.get=function(){return this._velocity},t.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y},r.offset.set=function(e){this.uniforms.uOffset=e},r.offset.get=function(){return this.uniforms.uOffset},Object.defineProperties(t.prototype,r),t}(t.Filter),ge=a,ve="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform float epsilon;\n\nconst int MAX_COLORS = %maxColors%;\n\nuniform vec3 originalColors[MAX_COLORS];\nuniform vec3 targetColors[MAX_COLORS];\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n\n    float alpha = gl_FragColor.a;\n    if (alpha < 0.0001)\n    {\n      return;\n    }\n\n    vec3 color = gl_FragColor.rgb / alpha;\n\n    for(int i = 0; i < MAX_COLORS; i++)\n    {\n      vec3 origColor = originalColors[i];\n      if (origColor.r < 0.0)\n      {\n        break;\n      }\n      vec3 colorDiff = origColor - color;\n      if (length(colorDiff) < epsilon)\n      {\n        vec3 targetColor = targetColors[i];\n        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);\n        return;\n      }\n    }\n}\n",xe=function(e){function t(t,n,r){void 0===n&&(n=.05),void 0===r&&(r=null),r=r||t.length,e.call(this,ge,ve.replace(/%maxColors%/g,r)),this.epsilon=n,this._maxColors=r,this._replacements=null,this.uniforms.originalColors=new Float32Array(3*r),this.uniforms.targetColors=new Float32Array(3*r),this.replacements=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={replacements:{configurable:!0},maxColors:{configurable:!0},epsilon:{configurable:!0}};return n.replacements.set=function(e){var t=this.uniforms.originalColors,n=this.uniforms.targetColors,r=e.length;if(r>this._maxColors)throw"Length of replacements ("+r+") exceeds the maximum colors length ("+this._maxColors+")";t[3*r]=-1;for(var i=0;i<r;i++){var l=e[i],s=l[0];"number"==typeof s?s=o.hex2rgb(s):l[0]=o.rgb2hex(s),t[3*i]=s[0],t[3*i+1]=s[1],t[3*i+2]=s[2];var a=l[1];"number"==typeof a?a=o.hex2rgb(a):l[1]=o.rgb2hex(a),n[3*i]=a[0],n[3*i+1]=a[1],n[3*i+2]=a[2]}this._replacements=e},n.replacements.get=function(){return this._replacements},t.prototype.refresh=function(){this.replacements=this._replacements},n.maxColors.get=function(){return this._maxColors},n.epsilon.set=function(e){this.uniforms.epsilon=e},n.epsilon.get=function(){return this.uniforms.epsilon},Object.defineProperties(t.prototype,n),t}(t.Filter),ye=a,_e="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\n\nuniform float sepia;\nuniform float noise;\nuniform float noiseSize;\nuniform float scratch;\nuniform float scratchDensity;\nuniform float scratchWidth;\nuniform float vignetting;\nuniform float vignettingAlpha;\nuniform float vignettingBlur;\nuniform float seed;\n\nconst float SQRT_2 = 1.414213;\nconst vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvec3 Overlay(vec3 src, vec3 dst)\n{\n    // if (dst <= 0.5) then: 2 * src * dst\n    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)\n    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),\n                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),\n                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));\n}\n\n\nvoid main()\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord);\n    vec3 color = gl_FragColor.rgb;\n\n    if (sepia > 0.0)\n    {\n        float gray = (color.x + color.y + color.z) / 3.0;\n        vec3 grayscale = vec3(gray);\n\n        color = Overlay(SEPIA_RGB, grayscale);\n\n        color = grayscale + sepia * (color - grayscale);\n    }\n\n    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;\n\n    if (vignetting > 0.0)\n    {\n        float outter = SQRT_2 - vignetting * SQRT_2;\n        vec2 dir = vec2(vec2(0.5, 0.5) - coord);\n        dir.y *= dimensions.y / dimensions.x;\n        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);\n        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);\n    }\n\n    if (scratchDensity > seed && scratch != 0.0)\n    {\n        float phase = seed * 256.0;\n        float s = mod(floor(phase), 2.0);\n        float dist = 1.0 / scratchDensity;\n        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));\n        if (d < seed * 0.6 + 0.4)\n        {\n            highp float period = scratchDensity * 10.0;\n\n            float xx = coord.x * period + phase;\n            float aa = abs(mod(xx, 0.5) * 4.0);\n            float bb = mod(floor(xx / 0.5), 2.0);\n            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);\n\n            float kk = 2.0 * period;\n            float dw = scratchWidth / dimensions.x * (0.75 + seed);\n            float dh = dw * kk;\n\n            float tine = (yy - (2.0 - dh));\n\n            if (tine > 0.0) {\n                float _sign = sign(scratch);\n\n                tine = s * tine / period + scratch + 0.1;\n                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);\n\n                color.rgb *= tine;\n            }\n        }\n    }\n\n    if (noise > 0.0 && noiseSize > 0.0)\n    {\n        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n        pixelCoord.x = floor(pixelCoord.x / noiseSize);\n        pixelCoord.y = floor(pixelCoord.y / noiseSize);\n        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);\n        // float _noise = snoise(d) * 0.5;\n        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;\n        color += _noise * noise;\n    }\n\n    gl_FragColor.rgb = color;\n}\n",be=function(e){function t(t,n){void 0===n&&(n=0),e.call(this,ye,_e),this.uniforms.dimensions=new Float32Array(2),"number"==typeof t?(this.seed=t,t=null):this.seed=n,Object.assign(this,{sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={sepia:{configurable:!0},noise:{configurable:!0},noiseSize:{configurable:!0},scratch:{configurable:!0},scratchDensity:{configurable:!0},scratchWidth:{configurable:!0},vignetting:{configurable:!0},vignettingAlpha:{configurable:!0},vignettingBlur:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,this.uniforms.seed=this.seed,e.applyFilter(this,t,n,r)},n.sepia.set=function(e){this.uniforms.sepia=e},n.sepia.get=function(){return this.uniforms.sepia},n.noise.set=function(e){this.uniforms.noise=e},n.noise.get=function(){return this.uniforms.noise},n.noiseSize.set=function(e){this.uniforms.noiseSize=e},n.noiseSize.get=function(){return this.uniforms.noiseSize},n.scratch.set=function(e){this.uniforms.scratch=e},n.scratch.get=function(){return this.uniforms.scratch},n.scratchDensity.set=function(e){this.uniforms.scratchDensity=e},n.scratchDensity.get=function(){return this.uniforms.scratchDensity},n.scratchWidth.set=function(e){this.uniforms.scratchWidth=e},n.scratchWidth.get=function(){return this.uniforms.scratchWidth},n.vignetting.set=function(e){this.uniforms.vignetting=e},n.vignetting.get=function(){return this.uniforms.vignetting},n.vignettingAlpha.set=function(e){this.uniforms.vignettingAlpha=e},n.vignettingAlpha.get=function(){return this.uniforms.vignettingAlpha},n.vignettingBlur.set=function(e){this.uniforms.vignettingBlur=e},n.vignettingBlur.get=function(){return this.uniforms.vignettingBlur},Object.defineProperties(t.prototype,n),t}(t.Filter),Ce=a,Se="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec2 thickness;\nuniform vec4 outlineColor;\nuniform vec4 filterClamp;\n\nconst float DOUBLE_PI = 3.14159265358979323846264 * 2.;\n\nvoid main(void) {\n    vec4 ownColor = texture2D(uSampler, vTextureCoord);\n    vec4 curColor;\n    float maxAlpha = 0.;\n    vec2 displaced;\n    for (float angle = 0.; angle <= DOUBLE_PI; angle += ${angleStep}) {\n        displaced.x = vTextureCoord.x + thickness.x * cos(angle);\n        displaced.y = vTextureCoord.y + thickness.y * sin(angle);\n        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));\n        maxAlpha = max(maxAlpha, curColor.a);\n    }\n    float resultAlpha = max(maxAlpha, ownColor.a);\n    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);\n}\n",Fe=function(e){function t(n,r,o){void 0===n&&(n=1),void 0===r&&(r=0),void 0===o&&(o=.1);var i=Math.max(o*t.MAX_SAMPLES,t.MIN_SAMPLES),l=(2*Math.PI/i).toFixed(7);e.call(this,Ce,Se.replace(/\$\{angleStep\}/,l)),this.uniforms.thickness=new Float32Array([0,0]),this.thickness=n,this.uniforms.outlineColor=new Float32Array([0,0,0,1]),this.color=r,this.quality=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={color:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.thickness[0]=this.thickness/t._frame.width,this.uniforms.thickness[1]=this.thickness/t._frame.height,e.applyFilter(this,t,n,r)},n.color.get=function(){return o.rgb2hex(this.uniforms.outlineColor)},n.color.set=function(e){o.hex2rgb(e,this.uniforms.outlineColor)},Object.defineProperties(t.prototype,n),t}(t.Filter);Fe.MIN_SAMPLES=1,Fe.MAX_SAMPLES=100;var ze=a,Ae="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform vec2 size;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 pixelate(vec2 coord, vec2 size)\n{\n\treturn floor( coord / size ) * size;\n}\n\nvoid main(void)\n{\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = pixelate(coord, size);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord);\n}\n",we=function(e){function t(t){void 0===t&&(t=10),e.call(this,ze,Ae),this.size=t}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={size:{configurable:!0}};return n.size.get=function(){return this.uniforms.size},n.size.set=function(e){"number"==typeof e&&(e=[e,e]),this.uniforms.size=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Te=a,Oe="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform float uRadian;\nuniform vec2 uCenter;\nuniform float uRadius;\nuniform int uKernelSize;\n\nconst int MAX_KERNEL_SIZE = 2048;\n\nvoid main(void)\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n\n    if (uKernelSize == 0)\n    {\n        gl_FragColor = color;\n        return;\n    }\n\n    float aspect = filterArea.y / filterArea.x;\n    vec2 center = uCenter.xy / filterArea.xy;\n    float gradient = uRadius / filterArea.x * 0.3;\n    float radius = uRadius / filterArea.x - gradient * 0.5;\n    int k = uKernelSize - 1;\n\n    vec2 coord = vTextureCoord;\n    vec2 dir = vec2(center - coord);\n    float dist = length(vec2(dir.x, dir.y * aspect));\n\n    float radianStep = uRadian;\n    if (radius >= 0.0 && dist > radius) {\n        float delta = dist - radius;\n        float gap = gradient;\n        float scale = 1.0 - abs(delta / gap);\n        if (scale <= 0.0) {\n            gl_FragColor = color;\n            return;\n        }\n        radianStep *= scale;\n    }\n    radianStep /= float(k);\n\n    float s = sin(radianStep);\n    float c = cos(radianStep);\n    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));\n\n    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {\n        if (i == k) {\n            break;\n        }\n\n        coord -= center;\n        coord.y *= aspect;\n        coord = rotationMatrix * coord;\n        coord.y /= aspect;\n        coord += center;\n\n        vec4 sample = texture2D(uSampler, coord);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample;\n    }\n\n    gl_FragColor = color / float(uKernelSize);\n}\n",De=function(e){function t(t,n,r,o){void 0===t&&(t=0),void 0===n&&(n=[0,0]),void 0===r&&(r=5),void 0===o&&(o=-1),e.call(this,Te,Oe),this._angle=0,this.angle=t,this.center=n,this.kernelSize=r,this.radius=o}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={angle:{configurable:!0},center:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.uKernelSize=0!==this._angle?this.kernelSize:0,e.applyFilter(this,t,n,r)},n.angle.set=function(e){this._angle=e,this.uniforms.uRadian=e*Math.PI/180},n.angle.get=function(){return this._angle},n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Pe=a,Me="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\nuniform vec2 dimensions;\n\nuniform bool mirror;\nuniform float boundary;\nuniform vec2 amplitude;\nuniform vec2 waveLength;\nuniform vec2 alpha;\nuniform float time;\n\nfloat rand(vec2 co) {\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main(void)\n{\n    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;\n    vec2 coord = pixelCoord / dimensions;\n\n    if (coord.y < boundary) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    float k = (coord.y - boundary) / (1. - boundary + 0.0001);\n    float areaY = boundary * dimensions.y / filterArea.y;\n    float v = areaY + areaY - vTextureCoord.y;\n    float y = mirror ? v : vTextureCoord.y;\n\n    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;\n    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;\n    float _alpha = (alpha.y - alpha.x) * k + alpha.x;\n\n    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;\n    x = clamp(x, filterClamp.x, filterClamp.z);\n\n    vec4 color = texture2D(uSampler, vec2(x, y));\n\n    gl_FragColor = color * _alpha;\n}\n",Re=function(e){function t(t){e.call(this,Pe,Me),this.uniforms.amplitude=new Float32Array(2),this.uniforms.waveLength=new Float32Array(2),this.uniforms.alpha=new Float32Array(2),this.uniforms.dimensions=new Float32Array(2),Object.assign(this,{mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={mirror:{configurable:!0},boundary:{configurable:!0},amplitude:{configurable:!0},waveLength:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.mirror.set=function(e){this.uniforms.mirror=e},n.mirror.get=function(){return this.uniforms.mirror},n.boundary.set=function(e){this.uniforms.boundary=e},n.boundary.get=function(){return this.uniforms.boundary},n.amplitude.set=function(e){this.uniforms.amplitude[0]=e[0],this.uniforms.amplitude[1]=e[1]},n.amplitude.get=function(){return this.uniforms.amplitude},n.waveLength.set=function(e){this.uniforms.waveLength[0]=e[0],this.uniforms.waveLength[1]=e[1]},n.waveLength.get=function(){return this.uniforms.waveLength},n.alpha.set=function(e){this.uniforms.alpha[0]=e[0],this.uniforms.alpha[1]=e[1]},n.alpha.get=function(){return this.uniforms.alpha},Object.defineProperties(t.prototype,n),t}(t.Filter),ke=a,je="precision mediump float;\n\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec2 red;\nuniform vec2 green;\nuniform vec2 blue;\n\nvoid main(void)\n{\n   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;\n   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;\n   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;\n   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;\n}\n",Ee=function(e){function t(t,n,r){void 0===t&&(t=[-10,0]),void 0===n&&(n=[0,10]),void 0===r&&(r=[0,0]),e.call(this,ke,je),this.red=t,this.green=n,this.blue=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={red:{configurable:!0},green:{configurable:!0},blue:{configurable:!0}};return n.red.get=function(){return this.uniforms.red},n.red.set=function(e){this.uniforms.red=e},n.green.get=function(){return this.uniforms.green},n.green.set=function(e){this.uniforms.green=e},n.blue.get=function(){return this.uniforms.blue},n.blue.set=function(e){this.uniforms.blue=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Le=a,Ie="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nuniform vec2 center;\n\nuniform float amplitude;\nuniform float wavelength;\n// uniform float power;\nuniform float brightness;\nuniform float speed;\nuniform float radius;\n\nuniform float time;\n\nconst float PI = 3.14159;\n\nvoid main()\n{\n    float halfWavelength = wavelength * 0.5 / filterArea.x;\n    float maxRadius = radius / filterArea.x;\n    float currentRadius = time * speed / filterArea.x;\n\n    float fade = 1.0;\n\n    if (maxRadius > 0.0) {\n        if (currentRadius > maxRadius) {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);\n    }\n\n    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);\n    dir.y *= filterArea.y / filterArea.x;\n    float dist = length(dir);\n\n    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {\n        gl_FragColor = texture2D(uSampler, vTextureCoord);\n        return;\n    }\n\n    vec2 diffUV = normalize(dir);\n\n    float diff = (dist - currentRadius) / halfWavelength;\n\n    float p = 1.0 - pow(abs(diff), 2.0);\n\n    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );\n    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );\n\n    vec2 offset = diffUV * powDiff / filterArea.xy;\n\n    // Do clamp :\n    vec2 coord = vTextureCoord + offset;\n    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);\n    vec4 color = texture2D(uSampler, clampedCoord);\n    if (coord != clampedCoord) {\n        color *= max(0.0, 1.0 - length(coord - clampedCoord));\n    }\n\n    // No clamp :\n    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);\n\n    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;\n\n    gl_FragColor = color;\n}\n",Xe=function(e){function t(t,n,r){void 0===t&&(t=[0,0]),void 0===n&&(n={}),void 0===r&&(r=0),e.call(this,Le,Ie),this.center=t,Array.isArray(n)&&(console.warn("Deprecated Warning: ShockwaveFilter params Array has been changed to options Object."),n={}),n=Object.assign({amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},n),this.amplitude=n.amplitude,this.wavelength=n.wavelength,this.brightness=n.brightness,this.speed=n.speed,this.radius=n.radius,this.time=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},amplitude:{configurable:!0},wavelength:{configurable:!0},brightness:{configurable:!0},speed:{configurable:!0},radius:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.time=this.time,e.applyFilter(this,t,n,r)},n.center.get=function(){return this.uniforms.center},n.center.set=function(e){this.uniforms.center=e},n.amplitude.get=function(){return this.uniforms.amplitude},n.amplitude.set=function(e){this.uniforms.amplitude=e},n.wavelength.get=function(){return this.uniforms.wavelength},n.wavelength.set=function(e){this.uniforms.wavelength=e},n.brightness.get=function(){return this.uniforms.brightness},n.brightness.set=function(e){this.uniforms.brightness=e},n.speed.get=function(){return this.uniforms.speed},n.speed.set=function(e){this.uniforms.speed=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Be=a,Ne="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform sampler2D uLightmap;\nuniform vec4 filterArea;\nuniform vec2 dimensions;\nuniform vec4 ambientColor;\nvoid main() {\n    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);\n    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;\n    vec4 light = texture2D(uLightmap, lightCoord);\n    vec3 ambient = ambientColor.rgb * ambientColor.a;\n    vec3 intensity = ambient + light.rgb;\n    vec3 finalColor = diffuseColor.rgb * intensity;\n    gl_FragColor = vec4(finalColor, diffuseColor.a);\n}\n",Ge=function(e){function t(t,n,r){void 0===n&&(n=0),void 0===r&&(r=1),e.call(this,Be,Ne),this.uniforms.dimensions=new Float32Array(2),this.uniforms.ambientColor=new Float32Array([0,0,0,r]),this.texture=t,this.color=n}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={texture:{configurable:!0},color:{configurable:!0},alpha:{configurable:!0}};return t.prototype.apply=function(e,t,n,r){this.uniforms.dimensions[0]=t.filterFrame.width,this.uniforms.dimensions[1]=t.filterFrame.height,e.applyFilter(this,t,n,r)},n.texture.get=function(){return this.uniforms.uLightmap},n.texture.set=function(e){this.uniforms.uLightmap=e},n.color.set=function(e){var t=this.uniforms.ambientColor;"number"==typeof e?(o.hex2rgb(e,t),this._color=e):(t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],this._color=o.rgb2hex(t))},n.color.get=function(){return this._color},n.alpha.get=function(){return this.uniforms.ambientColor[3]},n.alpha.set=function(e){this.uniforms.ambientColor[3]=e},Object.defineProperties(t.prototype,n),t}(t.Filter),qe=a,We="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float blur;\nuniform float gradientBlur;\nuniform vec2 start;\nuniform vec2 end;\nuniform vec2 delta;\nuniform vec2 texSize;\n\nfloat random(vec3 scale, float seed)\n{\n    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n}\n\nvoid main(void)\n{\n    vec4 color = vec4(0.0);\n    float total = 0.0;\n\n    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));\n    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;\n\n    for (float t = -30.0; t <= 30.0; t++)\n    {\n        float percent = (t + offset - 0.5) / 30.0;\n        float weight = 1.0 - abs(percent);\n        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);\n        sample.rgb *= sample.a;\n        color += sample * weight;\n        total += weight;\n    }\n\n    color /= total;\n    color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",Ke=function(e){function t(t,r,o,i){void 0===t&&(t=100),void 0===r&&(r=600),void 0===o&&(o=null),void 0===i&&(i=null),e.call(this,qe,We),this.uniforms.blur=t,this.uniforms.gradientBlur=r,this.uniforms.start=o||new n.Point(0,window.innerHeight/2),this.uniforms.end=i||new n.Point(600,window.innerHeight/2),this.uniforms.delta=new n.Point(30,30),this.uniforms.texSize=new n.Point(window.innerWidth,window.innerHeight),this.updateDelta()}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var r={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},r.blur.get=function(){return this.uniforms.blur},r.blur.set=function(e){this.uniforms.blur=e},r.gradientBlur.get=function(){return this.uniforms.gradientBlur},r.gradientBlur.set=function(e){this.uniforms.gradientBlur=e},r.start.get=function(){return this.uniforms.start},r.start.set=function(e){this.uniforms.start=e,this.updateDelta()},r.end.get=function(){return this.uniforms.end},r.end.set=function(e){this.uniforms.end=e,this.updateDelta()},Object.defineProperties(t.prototype,r),t}(t.Filter),Ye=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=e/n,this.uniforms.delta.y=t/n},t}(Ke),Ze=function(e){function t(){e.apply(this,arguments)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.updateDelta=function(){var e=this.uniforms.end.x-this.uniforms.start.x,t=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(e*e+t*t);this.uniforms.delta.x=-t/n,this.uniforms.delta.y=e/n},t}(Ke),Qe=function(e){function t(t,n,r,o){void 0===t&&(t=100),void 0===n&&(n=600),void 0===r&&(r=null),void 0===o&&(o=null),e.call(this),this.tiltShiftXFilter=new Ye(t,n,r,o),this.tiltShiftYFilter=new Ze(t,n,r,o)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={blur:{configurable:!0},gradientBlur:{configurable:!0},start:{configurable:!0},end:{configurable:!0}};return t.prototype.apply=function(e,t,n){var r=e.getFilterTexture();this.tiltShiftXFilter.apply(e,t,r),this.tiltShiftYFilter.apply(e,r,n),e.returnFilterTexture(r)},n.blur.get=function(){return this.tiltShiftXFilter.blur},n.blur.set=function(e){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=e},n.gradientBlur.get=function(){return this.tiltShiftXFilter.gradientBlur},n.gradientBlur.set=function(e){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=e},n.start.get=function(){return this.tiltShiftXFilter.start},n.start.set=function(e){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=e},n.end.get=function(){return this.tiltShiftXFilter.end},n.end.set=function(e){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=e},Object.defineProperties(t.prototype,n),t}(t.Filter),Ue=a,Ve="varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float radius;\nuniform float angle;\nuniform vec2 offset;\nuniform vec4 filterArea;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvec2 twist(vec2 coord)\n{\n    coord -= offset;\n\n    float dist = length(coord);\n\n    if (dist < radius)\n    {\n        float ratioDist = (radius - dist) / radius;\n        float angleMod = ratioDist * ratioDist * angle;\n        float s = sin(angleMod);\n        float c = cos(angleMod);\n        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);\n    }\n\n    coord += offset;\n\n    return coord;\n}\n\nvoid main(void)\n{\n\n    vec2 coord = mapCoord(vTextureCoord);\n\n    coord = twist(coord);\n\n    coord = unmapCoord(coord);\n\n    gl_FragColor = texture2D(uSampler, coord );\n\n}\n",He=function(e){function t(t,n,r){void 0===t&&(t=200),void 0===n&&(n=4),void 0===r&&(r=20),e.call(this,Ue,Ve),this.radius=t,this.angle=n,this.padding=r}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={offset:{configurable:!0},radius:{configurable:!0},angle:{configurable:!0}};return n.offset.get=function(){return this.uniforms.offset},n.offset.set=function(e){this.uniforms.offset=e},n.radius.get=function(){return this.uniforms.radius},n.radius.set=function(e){this.uniforms.radius=e},n.angle.get=function(){return this.uniforms.angle},n.angle.set=function(e){this.uniforms.angle=e},Object.defineProperties(t.prototype,n),t}(t.Filter),$e=a,Je="varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\nuniform vec2 uCenter;\nuniform float uStrength;\nuniform float uInnerRadius;\nuniform float uRadius;\n\nconst float MAX_KERNEL_SIZE = 32.0;\n\n// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\nhighp float rand(vec2 co, float seed) {\n    const highp float a = 12.9898, b = 78.233, c = 43758.5453;\n    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);\n    return fract(sin(sn) * c + seed);\n}\n\nvoid main() {\n\n    float minGradient = uInnerRadius * 0.3;\n    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;\n\n    float gradient = uRadius * 0.3;\n    float radius = (uRadius - gradient * 0.5) / filterArea.x;\n\n    float countLimit = MAX_KERNEL_SIZE;\n\n    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);\n    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));\n\n    float strength = uStrength;\n\n    float delta = 0.0;\n    float gap;\n    if (dist < innerRadius) {\n        delta = innerRadius - dist;\n        gap = minGradient;\n    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity\n        delta = dist - radius;\n        gap = gradient;\n    }\n\n    if (delta > 0.0) {\n        float normalCount = gap / filterArea.x;\n        delta = (normalCount - delta) / normalCount;\n        countLimit *= delta;\n        strength *= delta;\n        if (countLimit < 1.0)\n        {\n            gl_FragColor = texture2D(uSampler, vTextureCoord);\n            return;\n        }\n    }\n\n    // randomize the lookup values to hide the fixed number of samples\n    float offset = rand(vTextureCoord, 0.0);\n\n    float total = 0.0;\n    vec4 color = vec4(0.0);\n\n    dir *= strength;\n\n    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {\n        float percent = (t + offset) / MAX_KERNEL_SIZE;\n        float weight = 4.0 * (percent - percent * percent);\n        vec2 p = vTextureCoord + dir * percent;\n        vec4 sample = texture2D(uSampler, p);\n\n        // switch to pre-multiplied alpha to correctly blur transparent images\n        // sample.rgb *= sample.a;\n\n        color += sample * weight;\n        total += weight;\n\n        if (t > countLimit){\n            break;\n        }\n    }\n\n    color /= total;\n    // switch back from pre-multiplied alpha\n    // color.rgb /= color.a + 0.00001;\n\n    gl_FragColor = color;\n}\n",et=function(e){function t(t){if(e.call(this,$e,Je),"object"!=typeof t){var n=arguments[0],r=arguments[1],o=arguments[2],i=arguments[3];t={},void 0!==n&&(t.strength=n),void 0!==r&&(t.center=r),void 0!==o&&(t.innerRadius=o),void 0!==i&&(t.radius=i)}Object.assign(this,{strength:.1,center:[0,0],innerRadius:0,radius:-1},t)}e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t;var n={center:{configurable:!0},strength:{configurable:!0},innerRadius:{configurable:!0},radius:{configurable:!0}};return n.center.get=function(){return this.uniforms.uCenter},n.center.set=function(e){this.uniforms.uCenter=e},n.strength.get=function(){return this.uniforms.uStrength},n.strength.set=function(e){this.uniforms.uStrength=e},n.innerRadius.get=function(){return this.uniforms.uInnerRadius},n.innerRadius.set=function(e){this.uniforms.uInnerRadius=e},n.radius.get=function(){return this.uniforms.uRadius},n.radius.set=function(e){(e<0||e===1/0)&&(e=-1),this.uniforms.uRadius=e},Object.defineProperties(t.prototype,n),t}(t.Filter);return e.AdjustmentFilter=c,e.AdvancedBloomFilter=y,e.AsciiFilter=C,e.BevelFilter=z,e.BloomFilter=A,e.BulgePinchFilter=O,e.CRTFilter=Z,e.ColorMapFilter=M,e.ColorOverlayFilter=j,e.ColorReplaceFilter=I,e.ConvolutionFilter=N,e.CrossHatchFilter=W,e.DotFilter=V,e.DropShadowFilter=J,e.EmbossFilter=ne,e.GlitchFilter=ie,e.GlowFilter=ae,e.GodrayFilter=he,e.KawaseBlurFilter=d,e.MotionBlurFilter=me,e.MultiColorReplaceFilter=xe,e.OldFilmFilter=be,e.OutlineFilter=Fe,e.PixelateFilter=we,e.RGBSplitFilter=Ee,e.RadialBlurFilter=De,e.ReflectionFilter=Re,e.ShockwaveFilter=Xe,e.SimpleLightmapFilter=Ge,e.TiltShiftAxisFilter=Ke,e.TiltShiftFilter=Qe,e.TiltShiftXFilter=Ye,e.TiltShiftYFilter=Ze,e.TwistFilter=He,e.ZoomBlurFilter=et,e}({},PIXI,PIXI,PIXI,PIXI.utils,PIXI,PIXI.filters,PIXI.filters);Object.assign(PIXI.filters,__filters);
})();

//======================================================================
// Filters
//======================================================================
(function(){

  const parameters = PluginManager.parameters('Integration');
  
  const FILTER = {};
  FILTER.ENABLE     = Boolean(parameters['Filter'] === "true");

  const ADJUSTMENT_FILTERE = {};
  ADJUSTMENT_FILTERE.ENABLE     = Boolean(parameters['Filter.Adjustment'] === "true");
  ADJUSTMENT_FILTERE.GAMMA      = Number(parameters['Filter.Adjustment.Gamma']);
  ADJUSTMENT_FILTERE.SATURATION = Number(parameters['Filter.Adjustment.Saturation']);
  ADJUSTMENT_FILTERE.CONTRAST   = Number(parameters['Filter.Adjustment.Contrast']);
  ADJUSTMENT_FILTERE.BRIGHTNESS = Number(parameters['Filter.Adjustment.Brightness']);
  ADJUSTMENT_FILTERE.RED        = Number(parameters['Filter.Adjustment.Red']);
  ADJUSTMENT_FILTERE.GREEN      = Number(parameters['Filter.Adjustment.Green']);
  ADJUSTMENT_FILTERE.BLUE       = Number(parameters['Filter.Adjustment.Blue']);

  const RGB_SPLIT_FILTERE = {};
  RGB_SPLIT_FILTERE.ENABLE      = Boolean(parameters['Filter.RGBSplitFilter'] === "true");
  RGB_SPLIT_FILTERE.SPLIT       = Number(parameters['Filter.RGBSplitFilter.Split']);

  const TILT_SHIFT_FILTERE = {};
  TILT_SHIFT_FILTERE.ENABLE     = Boolean(parameters['Filter.TiltShiftFilter'] === "true");
  TILT_SHIFT_FILTERE.BLUR       = Number(parameters['Filter.TiltShiftFilter.Blur']);
  TILT_SHIFT_FILTERE.BLUR_RANGE = Number(parameters['Filter.TiltShiftFilter.BlurRange']);

  const CRT_FILTERE = {};
  CRT_FILTERE.ENABLE            = Boolean(parameters['Filter.CRTFilter'] === "true");
  CRT_FILTERE.CURVATURE         = Number(parameters['Filter.CRTFilter.Curvature']);
  CRT_FILTERE.LINE_WIDTH        = Number(parameters['Filter.CRTFilter.LineWidth']);
  CRT_FILTERE.LINE_CONTRAST     = Number(parameters['Filter.CRTFilter.LineContrast']);
  CRT_FILTERE.VERTICAL_LINE     = Boolean(parameters['Filter.CRTFilter.VerticalLine'] === "true");
  CRT_FILTERE.NOISE             = Number(parameters['Filter.CRTFilter.Noise']);
  CRT_FILTERE.NOISE_SIZE        = Number(parameters['Filter.CRTFilter.NoiseSize']);
  CRT_FILTERE.SEED              = Number(parameters['Filter.CRTFilter.Seed']);
  CRT_FILTERE.VIGNETTING        = Number(parameters['Filter.CRTFilter.Vignetting']);
  CRT_FILTERE.VIGNETTING_ALPHA  = Number(parameters['Filter.CRTFilter.VignettingAlpha']);
  CRT_FILTERE.VIGNETTING_BLUR   = Number(parameters['Filter.CRTFilter.VignettingBlur']);
  CRT_FILTERE.TIME              = Number(parameters['Filter.CRTFilter.Time']);
  
  const PIXELATE_FILTER = {};
  PIXELATE_FILTER.ENABLE        = Boolean(parameters['Filter.PixelateFilter'] === "true");
  PIXELATE_FILTER.SIZE          = Number(parameters['Filter.PixelateFilter.Size']);

  const ASCII_FILTER = {};
  ASCII_FILTER.ENABLE           = Boolean(parameters['Filter.AsciiFilter'] === "true");
  ASCII_FILTER.SIZE             = Number(parameters['Filter.AsciiFilter.Size']);

  if (!!!FILTER.ENABLE) return;
  
  let _Stage_initialize = Stage.prototype.initialize;
  Stage.prototype.initialize = function() {
    _Stage_initialize.call(this);

    let filters = [];

    if (ADJUSTMENT_FILTERE.ENABLE) {
      let adjustmentFilter = new PIXI.filters.AdjustmentFilter({
        "gamma":      ADJUSTMENT_FILTERE.GAMMA,
        "saturation": ADJUSTMENT_FILTERE.SATURATION,
        "contrast":   ADJUSTMENT_FILTERE.CONTRAST,
        "brightness": ADJUSTMENT_FILTERE.BRIGHTNESS,
        "red":        ADJUSTMENT_FILTERE.RED,
        "green":      ADJUSTMENT_FILTERE.GREEN,
        "blue":       ADJUSTMENT_FILTERE.BLUE,
        "alpha":      1
      });
      filters.push(adjustmentFilter);
    }

    if (TILT_SHIFT_FILTERE.ENABLE) {
      let tiltShiftXFilter = new PIXI.filters.TiltShiftXFilter(
        TILT_SHIFT_FILTERE.BLUR, 
        Graphics.boxWidth - TILT_SHIFT_FILTERE.BLUR_RANGE * 2,
        new PIXI.Point((Graphics.boxWidth - TILT_SHIFT_FILTERE.BLUR_RANGE) / 2, 0), 
        new PIXI.Point((Graphics.boxWidth - TILT_SHIFT_FILTERE.BLUR_RANGE) / 2, Graphics.boxHeight)
      );
      let tiltShiftYFilter = new PIXI.filters.TiltShiftYFilter(
        TILT_SHIFT_FILTERE.BLUR,
        Graphics.boxHeight - TILT_SHIFT_FILTERE.BLUR_RANGE * 2,
        new PIXI.Point(0, (Graphics.boxHeight - TILT_SHIFT_FILTERE.BLUR_RANGE) / 2),
        new PIXI.Point(Graphics.boxWidth, (Graphics.boxHeight - TILT_SHIFT_FILTERE.BLUR_RANGE) / 2)
      );
      filters.push(tiltShiftXFilter);
      filters.push(tiltShiftYFilter);
    }

    if (RGB_SPLIT_FILTERE.ENABLE) {
      let rgbSplitFilter = new PIXI.filters.RGBSplitFilter(
        new PIXI.Point(-RGB_SPLIT_FILTERE.SPLIT, 0), 
        new PIXI.Point(0, RGB_SPLIT_FILTERE.SPLIT), 
        new PIXI.Point(0, 0)
      );
      filters.push(rgbSplitFilter);
    }

    if (CRT_FILTERE.ENABLE) {
      let crtFilter = new PIXI.filters.CRTFilter({
        "curvature":        CRT_FILTERE.CURVATURE,
        "lineWidth":        CRT_FILTERE.LINE_WIDTH,
        "lineContrast":     CRT_FILTERE.LINE_CONTRAST,
        "verticalLine":     CRT_FILTERE.VERTICAL_LINE,
        "noise":            CRT_FILTERE.NOISE,
        "noiseSize":        CRT_FILTERE.NOISE_SIZE,
        "seed":             CRT_FILTERE.SEED,
        "vignetting":       CRT_FILTERE.VIGNETTING,
        "vignettingAlpha":  CRT_FILTERE.VIGNETTING_ALPHA,
        "vignettingBlur":   CRT_FILTERE.VIGNETTING_BLUR,
        "time":             CRT_FILTERE.TIME,
      });
      filters.push(crtFilter);
    }

    if (PIXELATE_FILTER.ENABLE) {
      let pixelateFilter = new PIXI.filters.PixelateFilter(PIXELATE_FILTER.SIZE);
      filters.push(pixelateFilter);
    }

    if (ASCII_FILTER.ENABLE) {
      let asciiFilter = new PIXI.filters.AsciiFilter(ASCII_FILTER.SIZE);
      filters.push(asciiFilter);
    }

    this.filters = filters;
  };

})();

//======================================================================
// Time
//======================================================================
(function(){

  const parameters = PluginManager.parameters('Integration');
  
  const TIME = {};
  TIME.ENABLE        = Boolean(parameters["Time"] === "true");
  TIME.TIME_VARIABLE = Number(parameters["Time.TimeVariable"]);
  TIME.PAUSE_SWITCH  = Number(parameters["Time.PauseSwitch"]);
  TIME.CLOCK_SWITCH  = Number(parameters["Time.ClockSwitch"]);
  TIME.MINUTE_FRAMES = Number(parameters["Time.MinuteFrames"]);
  TIME.HOUR_FRAMES   = 60 * TIME.MINUTE_FRAMES;
  TIME.ADAY_FRAMES   = 24 * 60 * TIME.MINUTE_FRAMES;
  TIME.SHADOW        = Boolean(parameters["Time.Shadow"] === "true");
  TIME.TINTS         = JSON.parse(parameters['Time.Tints']).map((json)=>{
    let obj = JSON.parse(json);
    obj.Moment   = Number(obj.Moment);
    obj.Red      = Number(obj.Red);
    obj.Green    = Number(obj.Green);
    obj.Blue     = Number(obj.Blue);
    obj.Gray     = Number(obj.Gray);
    obj.Duration = Number(obj.Duration);
    return obj;
  });

  if (!!!TIME.ENABLE) return;

  //======================================================================
  // Time
  //======================================================================
  function Game_TimeSystem() {
    this._frames = 0;
  }
  
  Game_TimeSystem.prototype.now = function() {
    return this._frames;
  };

  Game_TimeSystem.prototype.hour = function() {
    return Math.floor(this._frames / TIME.HOUR_FRAMES);
  };
  
  Game_TimeSystem.prototype.minute = function() {
    return (this._frames - this.hour() * TIME.HOUR_FRAMES) / TIME.MINUTE_FRAMES;
  };
  
  Game_TimeSystem.prototype.print = function() {
    let frames = this._frames;
    let hours = Math.floor(frames / TIME.HOUR_FRAMES);
    let minutes = Math.floor((frames - hours * TIME.HOUR_FRAMES) / TIME.MINUTE_FRAMES);
    return `${hours.padZero(2)}:${minutes.padZero(2)}`;
  };

  Game_TimeSystem.prototype.update = function(active) {
    let pause = false;
    if (TIME.PAUSE_SWITCH !== null && TIME.PAUSE_SWITCH !== 0) {
      pause = $gameSwitches.value(TIME.PAUSE_SWITCH);
    }

    if (active && !pause) {
      this._frames = (this._frames + 1) % TIME.ADAY_FRAMES;
      
      if (TIME.TIME_VARIABLE !== null && TIME.TIME_VARIABLE !== 0) {
        $gameVariables.setValue(TIME.TIME_VARIABLE, this._frames);
      }

      for(tint of TIME.TINTS) {
        if (tint.Moment === this.hour() && this.minute() === 0) {
          if ($dataMap.meta.tint !== null && $dataMap.meta.tint !== undefined && $dataMap.meta.tint === "false") {
            return;
          }
          $gameScreen.startTint([tint.Red, tint.Green, tint.Blue, tint.Gray], tint.Duration * TIME.MINUTE_FRAMES);
        }
      }
    }
  };

  Game_TimeSystem.prototype.resetTint = function() {
    if ($dataMap.meta.tint !== null && $dataMap.meta.tint !== undefined && $dataMap.meta.tint === "false") {
      return;
    }

    let minMoment = 24;
    let targetTint = null;

    for(tint of TIME.TINTS) {
      if(tint.Moment <= minMoment) {
        minMoment = tint.Moment;
      }
    }

    if (this.hour() <= minMoment) {
      if (TIME.TINTS.length > 0) {
        targetTint = TIME.TINTS[TIME.TINTS.length - 1];
      }
    }
    else {
      for(tint of TIME.TINTS) {
        if(this.hour() <= tint.Moment) {
          targetTint = tint;
          break;
        }
      }
    }

    if (targetTint !== null && targetTint !== undefined) {
      $gameScreen.startTint([targetTint.Red, targetTint.Green, targetTint.Blue, targetTint.Gray], 1);
    }
    else {
      $gameScreen.startTint([0, 0, 0, 0], 1);
    }
  };

  Game_TimeSystem.prototype.setTime = function(h, m) {
    this._frames = TIME.HOUR_FRAMES * h + TIME.MINUTE_FRAMES * m;
    this.resetTint();
  };
  
  //======================================================================
  // Global Variable
  //======================================================================
  $gameTimeSystem = new Game_TimeSystem();

  //==================================================================
  // Plugin Command
  //==================================================================
  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Time') {
      switch (args[0]) {
        case 'set':
          let arr = args[1].split(':');
          let h = Number(arr[0]);
          let m = Number(arr[1]);
          $gameTimeSystem.setTime(h, m);
          break;
      }
    }
  };

  //======================================================================
  // Data Manager
  //======================================================================
  let _DataManager_makeSaveContents = DataManager.makeSaveContents;
  DataManager.makeSaveContents = function() {
    let contents = _DataManager_makeSaveContents.call(this);
    contents.time = $gameTimeSystem;
    return contents;
  };

  let _DataManager_extractSaveContents = DataManager.extractSaveContents;
  DataManager.extractSaveContents = function(contents) {
    _DataManager_extractSaveContents.call(this, contents);
    $gameTimeSystem = contents.time;
  };

  //======================================================================
  // Scene Map
  //======================================================================
  let _Scene_Map_start = Scene_Map.prototype.start;
  Scene_Map.prototype.start = function() {
    _Scene_Map_start.call(this);
    $gameTimeSystem.resetTint();
  };

  let _Scene_Map_updateMain = Scene_Map.prototype.updateMain;
  Scene_Map.prototype.updateMain = function() {
    _Scene_Map_updateMain.call(this);
    $gameTimeSystem.update(this.isActive());
  };

  //======================================================================
  // Spriteset Base
  //======================================================================
  let _Spriteset_Base_createUpperLayer = Spriteset_Base.prototype.createUpperLayer;
  Spriteset_Base.prototype.createUpperLayer = function() {
    _Spriteset_Base_createUpperLayer.call(this);
    this.createClock();
  };

  Spriteset_Base.prototype.createClock = function() {
    this._clockSprite = new Sprite_Clock();
    this.addChild(this._clockSprite);
  };

  //======================================================================
  // Sprite Clock
  //======================================================================
  function Sprite_Clock() {
      this.initialize.apply(this, arguments);
  }

  Sprite_Clock.prototype = Object.create(Sprite_Timer.prototype);
  Sprite_Clock.prototype.constructor = Sprite_Clock;

  Sprite_Clock.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._frames = 0;
    this.visible = true;
    this.createBitmap();
    this.update();
  };

  Sprite_Clock.prototype.updateBitmap = function() {
    if (this._frames !== $gameTimeSystem.now()) {
      this._frames = $gameTimeSystem.now();
      this.redraw();
    }
  };

  Sprite_Clock.prototype.timerText = function() {
    return $gameTimeSystem.print();
  };

  Sprite_Clock.prototype.updateVisibility = function() {
    if (TIME.CLOCK_SWITCH !== null && TIME.CLOCK_SWITCH !== 0) {
      this.visible = $gameSwitches.value(TIME.CLOCK_SWITCH);
    }
  };

  //===================================================================
  // Spriteset Map
  //===================================================================
  let _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
  Spriteset_Map.prototype.createLowerLayer = function() {
    _Spriteset_Map_createLowerLayer.call(this);
    this.createCharactersShadow();
  };

  Spriteset_Map.prototype.createCharactersShadow = function() {
    if (TIME.SHADOW) {
      let shadowSprite = [];
      $gameMap.events().forEach(function(event) {
        let data = $dataMap.events[event.eventId()];
        if (!(data.meta.shadow !== null && data.meta.shadow !== undefined &&data.meta.shadow === "false")) {
          shadowSprite.push(new Sprite_Shadow(event));
        }
      }, this);
      $gamePlayer.followers().reverseEach(function(follower) {
          shadowSprite.push(new Sprite_Shadow(follower));
      }, this);
      shadowSprite.push(new Sprite_Shadow($gamePlayer));
      for (var i = 0; i < shadowSprite.length; i++) {
          this._characterSprites.push(shadowSprite[i]);
          this._tilemap.addChild(shadowSprite[i]);
      }
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
    let pw = this.patternWidth();
    let ph = this.patternHeight();
    let sx = (this.characterBlockX() + this.characterPatternX()) * pw;
    let sy = (this.characterBlockY() + this.characterPatternY()) * ph;
    this.updateHalfBodySprites();
    if (this._bushDepth > 0) {
      let d = this._bushDepth;
      this._upperBody.setFrame(sx, sy, pw, ph - d);
      this._lowerBody.setFrame(sx, sy + ph - d, pw, d);
      this.setFrame(sx, sy, 0, ph);
    } else {
      this.setFrame(sx, sy, pw, ph);
    }
  };

  Sprite_Shadow.prototype.calcRate = function(min, max, pointer, value) {
    pointer = pointer.clamp(min, max);
    return ((pointer - min) / (max - min)) * value + 1e-8;
  };

  Sprite_Shadow.prototype.updateTime = function() {
    let hour = $gameTimeSystem.now() / 15 / 60;
    let skew = (Math.PI / 2) - this.calcRate(5, 19, hour, Math.PI);
    this.skew.x = skew;
    this.scale.y = (0.4 * (1 / Math.cos(skew))).clamp(-3, 3);
    this.opacity = (128 * Math.cos(skew)).clamp(0, 128);
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
})();

//======================================================================
// WeatherEx
//======================================================================
(function(){

  const parameters = PluginManager.parameters('Integration');

  const WEATHER = {};
  WEATHER.ENABLE = Boolean(parameters["WeatherEx"] === "true");
  
  if (!!!WEATHER.ENABLE) return;

  Weather.prototype._createBitmaps = function() {
    this._rainBitmap = new Bitmap(1, 20);
    this._rainBitmap.fillAll('white');
    this._stormBitmap = new Bitmap(4, 2);
    this._stormBitmap.fillAll('white');
    this._snowBitmap = new Bitmap(4, 4);
    this._snowBitmap.drawCircle(4, 4, 4, 'white');
  };

  Weather.prototype._updateAllSprites = function() {
    let maxSprites = Math.floor(this.power * 40);
    while (this._sprites.length < maxSprites) {
        this._addSprite();
    }
    while (this._sprites.length > maxSprites) {
        this._removeSprite();
    }
    this._sprites.forEach(function(sprite) {
        this._updateSprite(sprite);
        sprite.x = sprite.ax - this.origin.x;
        sprite.y = sprite.ay - this.origin.y;
    }, this);
  };

  //===============================================================
  // Dimmer
  //===============================================================
  Weather.prototype._createDimmer = function() {
    this._dimmerSprite = new ScreenSprite();
    this._dimmerSprite.setColor(0, 0, 0);
    this.addChild(this._dimmerSprite);
  };

  Weather.prototype._updateDimmer = function() {
    switch (this.type) {
      case 'rain':
        this._updateRainDimmer();
        break;
      case 'storm':
        this._updateStormDimmer();
        break;
      case 'snow':
        this._updateShowDimmer();
        break;
    }
  };
  
  Weather.prototype._updateRainDimmer = function() {
    this._dimmerSprite.opacity = Math.floor(this.power * 12);
  };
  
  Weather.prototype._updateStormDimmer = function() {
    this._dimmerSprite.opacity = Math.floor(this.power * 8);
  };

  Weather.prototype._updateShowDimmer = function() {
    this._dimmerSprite.opacity = Math.floor(this.power * 6);
  };

  //===============================================================
  // Update
  //===============================================================
  Weather.prototype._updateRainSprite = function(sprite) {
    sprite.bitmap = this._rainBitmap;
    sprite.rotation = -Math.PI / 36;
    sprite.ax -= 2 * this.power * Math.sin(sprite.rotation) + Math.cos(sprite.opacity * Math.PI / 180) / 2;
    sprite.ay += 2 * this.power * Math.cos(sprite.rotation);
    sprite.opacity -= 2 * this.power;
  };
  
  Weather.prototype._updateStormSprite = function(sprite) {
    sprite.bitmap = this._stormBitmap;
    sprite.ax += this.power; 
    sprite.ay += Math.sin(sprite.opacity * Math.PI / 180) - 0.5;
    sprite.rotation = 4 * Math.cos(sprite.opacity * Math.PI / 180);
    sprite.opacity -= 1;
  };

  Weather.prototype._updateSnowSprite = function(sprite) {
    sprite.bitmap = this._snowBitmap;
    sprite.ax += Math.sin(sprite.opacity * Math.PI / 180) - 0.5;
    sprite.ay += 1; 
    sprite.opacity -= 1;
  };

  //===============================================================
  // Reborn
  //===============================================================
  Weather.prototype._rebornSprite = function(sprite) {
    switch (this.type) {
      case 'rain':
        this._rebornRainSprite(sprite);
        break;
      case 'storm':
        this._rebornStormSprite(sprite);
        break;
      case 'snow':
        this._rebornSnowSprite(sprite);
        break;
    }
  };
  
  Weather.prototype._rebornRainSprite = function(sprite) {
    sprite.ax = Math.randomInt(Graphics.width + 200) - 200 + this.origin.x;
    sprite.ay = Math.randomInt(Graphics.height) - 100 + this.origin.y;
    sprite.opacity = 100 + Math.randomInt(120);
  };

  Weather.prototype._rebornStormSprite = function(sprite) {
    sprite.ax = Math.randomInt(Graphics.width) - 100 + this.origin.x;
    sprite.ay = Math.randomInt(Graphics.height) + this.origin.y;
    sprite.opacity = 160 + Math.randomInt(60);
  };

  Weather.prototype._rebornSnowSprite = function(sprite) {
    sprite.ax = Math.randomInt(Graphics.width + 300) - 100 + this.origin.x;
    sprite.ay = Math.randomInt(Graphics.height + 200) - 200 + this.origin.y;
    sprite.opacity = 160 + Math.randomInt(60);
  };
})();

//======================================================================
// Camera
//======================================================================
(function() {
  
  const parameters = PluginManager.parameters('Integration');

  const CAMERA = {};
  CAMERA.ENABLE     = Boolean(parameters["Camera"] === "true");
  CAMERA.SHACK_TYPE = String(parameters["Camera.ShackType"]);

  const CLOUD = {};
  CLOUD.ENABLE    = Boolean(parameters["Cloud"] === "true");

  if (!!!CAMERA.ENABLE) return;

  //==================================================================
  // Plugin Command
  //==================================================================
  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'Camera') {
      switch (args[0]) {
        case 'story':
          story();
          break;
        case 'game':
          game();
          break;
        case 'focus':
          switch(args[1]) {
            case 'event':
              args[2] = Number(args[2]) === 0 ? this.eventId() : Number(args[2]);
              args[3] = Number(args[3]);
              args[4] = Number(args[4]);
              focus($gameMap.event(args[2]), Number(args[3]), Number(args[4]));
              break;
            case 'player':
              focus($gamePlayer, Number(args[2]), Number(args[3]));
              break;
            default:
              throw Error('Camera plugin command error.');
          }
          break;
        case 'clear':
          clear(Number(args[1]));
          break;
        default:
          throw Error('Camera plugin command error.');
      }
    }
  };

  //==================================================================
  // Functions
  //==================================================================
  let $Story = false;

  let story = function() {
    $Story = true;
  };
  
  let game = function() {
    $Story = false;
  };

  let focus = function(character, zoom, duration) {
    $gameMap.startFocus(character.x, character.y, duration, ()=>{
      let dx = (Graphics.width * zoom - Graphics.width) / 2;
      let dy = (Graphics.height * zoom - Graphics.height) / 2;
      $gameScreen.startFocus(dx, dy, zoom, duration);
    });
  };

  let clear = function(duration) {
    let x = $gamePlayer.x;
    let y = $gamePlayer.y;
    $gameMap.startFocus(x, y, duration, null);
    $gameScreen.startFocus(0, 0, 1, duration);
  };

  //==================================================================
  // Game Screen: zoom to someone (focus)
  //==================================================================
  let _Game_Screen_clear = Game_Screen.prototype.clear;
  Game_Screen.prototype.clear = function() {
    _Game_Screen_clear.call(this);
    this.clearFocus();
  };

  let _Game_Screen_clearZoom = Game_Screen.prototype.clearZoom;
  Game_Screen.prototype.clearFocus = function() {
    _Game_Screen_clearZoom.call(this);
    this._focusX = 0;
    this._focusY = 0;
    this._focusScale = 1;
    this._focusXTarget = 0;
    this._focusYTarget = 0;
    this._focusScaleTarget = 1;
  };

  Game_Screen.prototype.startFocus = function(x, y, scale, duration) {
    this._focusXTarget = x;
    this._focusYTarget = y;
    this._focusScaleTarget = scale;
    this._focusDuration = duration;
  };

  let _Game_Screen_update = Game_Screen.prototype.update;
  Game_Screen.prototype.update = function() {
    _Game_Screen_update.call(this);
    this.updateFocus();
  };

  Game_Screen.prototype.updateFocus = function() {
    if (this._focusDuration > 0) {
      let d = this._focusDuration;
      this._focusX = (this._focusX * (d - 1) / d + this._focusXTarget / d);
      this._focusY = (this._focusY * (d - 1) / d + this._focusYTarget / d);
      this._focusScale = (this._focusScale * (d - 1) + this._focusScaleTarget) / d;
      this._focusDuration--;
    }
  };

  Game_Screen.prototype.focusScale = function() {
    return this._focusScale;
  };

  Game_Screen.prototype.focusX = function() {
    return this._focusX;
  };

  Game_Screen.prototype.focusY = function() {
    return this._focusY;
  };

  //==================================================================
  // Spriteset Map
  //==================================================================
  let _Spriteset_Map_createUpperLayer = Spriteset_Map.prototype.createUpperLayer;
  Spriteset_Map.prototype.createUpperLayer = function() {
    _Spriteset_Map_createUpperLayer.call(this);
    this.createStoryMask();
  };

  Spriteset_Map.prototype.createStoryMask = function() {
    let w = Graphics.width;
    let h = (Graphics.height - Math.round(w / 2.35)) / 2; // 1:2.35
    let bitmap = new Bitmap(w, h);
    bitmap.fillAll('black');
    this._storyTopMask = new Sprite(bitmap);
    this._storyBottomMask = new Sprite(bitmap);
    this._storyTopMask.y = -this._storyTopMask.bitmap.width;
    this._storyBottomMask.y = Graphics.height;
    this.addChild(this._storyTopMask);
    this.addChild(this._storyBottomMask);
  };

  let _Spriteset_Map_update = Spriteset_Map.prototype.update;
  Spriteset_Map.prototype.update = function() {
    _Spriteset_Map_update.call(this);
    this.updateStoryMask();
  };
  
  Spriteset_Map.prototype.updateStoryMask = function() {
    if ($Story) {
      let scale = $gameScreen.zoomScale() * $gameScreen.focusScale();
      let dy = (Graphics.height * scale - Graphics.height) / (2 * scale);
      this._storyTopMask.scale.y = 1 / scale;
      this._storyBottomMask.scale.y = 1 / scale;
      this._storyTopMask.y = dy;
      this._storyBottomMask.y = (Graphics.height - this._storyBottomMask.height / scale) - dy;
    }
    else {
      let scale = $gameScreen.zoomScale() * $gameScreen.focusScale();
      let dy = (Graphics.height * scale - Graphics.height) / (2 * scale);
      this._storyTopMask.scale.y = 1 / scale;
      this._storyBottomMask.scale.y = 1 / scale;
      this._storyTopMask.y = -this._storyTopMask.height / scale + dy;
      this._storyBottomMask.y = Graphics.height - dy;
    }
  };

  Spriteset_Map.prototype.updatePosition = function() {
    let zoomScale = $gameScreen.zoomScale();
    let focusScale = $gameScreen.focusScale();
    this.scale.x = zoomScale * focusScale;
    this.scale.y = zoomScale * focusScale;
    this.x = Math.round(-$gameScreen.zoomX() * (zoomScale - 1) - $gameScreen.focusX());
    this.y = Math.round(-$gameScreen.zoomY() * (zoomScale - 1) - $gameScreen.focusY());
    if (CAMERA.SHACK_TYPE === "Horizontal") {
      this.x += Math.round($gameScreen.shake());
    }
    else if (CAMERA.SHACK_TYPE === "Vertical") {
      this.y += Math.round($gameScreen.shake());
    }
  };

  //==================================================================
  // Game Map: scroll to someone (focus)
  //==================================================================
  let _Game_Map_initialize = Game_Map.prototype.initialize;
  Game_Map.prototype.initialize = function() {
    _Game_Map_initialize.call(this);
    this._displayTargetX = 0;
    this._displayTargetY = 0;
    this._focusDuration = 0;
    this._focusCallback = null;
  };

  Game_Map.prototype.startFocus = function(x, y, duration, callback) {
    this._displayTargetX = x - this.screenTileX() / 2 + 0.5;
    this._displayTargetY = y - this.screenTileY() / 2 + 0.5;
    this._displayTargetX = this._displayTargetX.clamp(0, this.width() - this.screenTileX());
    this._displayTargetY = this._displayTargetY.clamp(0, this.height() - this.screenTileY());
    this._focusDuration = duration;
    this._focusCallback = callback;
  };

  var _Game_Map_update = Game_Map.prototype.update;
  Game_Map.prototype.update = function(sceneActive) {
    _Game_Map_update.call(this, sceneActive);
    this.updateFocus();
  };

  Game_Map.prototype.updateFocus = function() {
    if(this._focusDuration > 0) {
      let d = this._focusDuration;
      this._displayX = (this._displayX * (d - 1) + this._displayTargetX) / d;
      this._displayY = (this._displayY * (d - 1) + this._displayTargetY) / d;
      this._focusDuration--;
    }
    else {
      if (this._focusCallback) {
        this._focusCallback();
        this._focusCallback = null;
      }
    }
  };
})();

//======================================================================
// Cloud
//----------------------------------------------------------------------
// Must place after Camera block
//======================================================================
(function(){

  const parameters = PluginManager.parameters("Integration");
  
  const CLOUD = {};
  CLOUD.ENABLE         = Boolean(parameters["Cloud"] === "true");
  CLOUD.TILES          = JSON.parse(parameters["Cloud.Tiles"]);
  CLOUD.SWITCH         = Number(parameters["Cloud.Switch"]);
  CLOUD.COUNT          = Number(parameters["Cloud.Count"]);
  CLOUD.WIDTH          = Number(parameters["Cloud.Width"]);
  CLOUD.HEIGHT         = Number(parameters["Cloud.Height"]);
  CLOUD.MIN_TILE_COUNT = Number(parameters["Cloud.MinTileCount"]);
  CLOUD.MAX_TILE_COUNT = Number(parameters["Cloud.MaxTileCount"]);
  CLOUD.MIN_SPEED      = Number(parameters["Cloud.MinSpeed"]);
  CLOUD.MAX_SPEED      = Number(parameters["Cloud.MaxSpeed"]);

  const CAMERA = {};
  CAMERA.ENABLE        = Boolean(parameters["Camera"] === "true");

  //======================================================================
  // Exit
  //======================================================================
  if(!!!CLOUD.ENABLE) return;

  //======================================================================
  // Pre-Processing
  //======================================================================
  let cloudSprites = [];
  let tileBitmaps = [];
  let isCustomTiles = (Array.isArray(CLOUD.TILES) && CLOUD.TILES.length > 0);

  if(isCustomTiles) {
    tileBitmaps = CLOUD.TILES.map((filename)=>{
      return ImageManager.loadPicture(filename);
    });
  }
  else {
    tileBitmaps = [
      "data:image/png;base64,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",
      "data:image/png;base64,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",
      "data:image/png;base64,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"
    ].map((path)=>{
      return ImageManager.loadNormalBitmap(path);
    });
  }

  Bitmap.prototype.bltScale = function(source, r, dx, dy) {
    let sw = source.width;
    let sh = source.height;
    this._context.save();
    this._context.scale(r, r);
    this.blt(source, 0, 0, sw, sh, dx / r, dy / r);
    this._context.restore();
  };

  //======================================================================
  // Sprite_Clouds
  //======================================================================
  function Sprite_Clouds() {
    this.initialize.apply(this, arguments);
  }

  Sprite_Clouds.prototype = Object.create(Sprite.prototype);
  Sprite_Clouds.prototype.constructor = Sprite_Clouds;

  Sprite_Clouds.prototype.initialize = function() {
    Sprite.prototype.initialize.call(this);
    this._width = CLOUD.WIDTH;
    this._height = CLOUD.HEIGHT;
    this._frameCount = 0;
    this.refresh();
  };

  Sprite_Clouds.prototype.refresh = function() {
    this.initPosition();
    this.refreshSpeed();
    this.createBitmap();
  }

  Sprite_Clouds.prototype.createBitmap = function() {
    let w = this._width;
    let h = this._height;
    let min = CLOUD.MIN_TILE_COUNT;
    let max = CLOUD.MAX_TILE_COUNT;
    let n = min + Math.randomInt(max - min);
    let clouds = new Bitmap(w, h);
    for(let i = 0; i < n; i++) {
      let bitmap = tileBitmaps[Math.randomInt(tileBitmaps.length)];
      let r = (50 + Math.randomInt(150)) / 100; // zoom to 50%-200%
      let sw = bitmap.width * r;
      let sh = bitmap.height * r;
      let dx = Math.randomInt(w - sw);
      let dy = Math.randomInt(h - sh);
      clouds.bltScale(bitmap, r, dx, dy);
    }
    this.bitmap = clouds;
    this.visible = true;
  };

  Sprite_Clouds.prototype.update = function() {
    Sprite.prototype.update.call(this);
    this.updatePosition();
    this.updateVisible();
  };

  // Clouds need to cover all screen after initializing map
  Sprite_Clouds.prototype.initPosition = function() {
    let w = Graphics.width;
    let h = Graphics.height;
    this.x = -w + Math.randomInt(3 * w);
    this.y = -h + Math.randomInt(3 * h);
  };

  Sprite_Clouds.prototype.refreshSpeed = function() {
    let min = CLOUD.MIN_SPEED;
    let max = CLOUD.MAX_SPEED;
    this._speed = min + Math.random() * (max - min);
  };

  Sprite_Clouds.prototype.refreshPosition = function() {
    let w = Graphics.width;
    let h = Graphics.height;
    this.x = w + Math.randomInt(w);
    this.y = -h + Math.randomInt(3 * h);
  };

  Sprite_Clouds.prototype.overScreen = function() {
    let w = Graphics.width;
    let h = Graphics.height;
    return (this.x + this._width < -w) || (this.y + this._height < -h) || (this.y > 2 * h);
  };

  Sprite_Clouds.prototype.updatePosition = function() {
    if(!this.overScreen()) {
      this.x -= this._speed;
    }
    else {
      this.refreshSpeed();
      this.refreshPosition();
    }
  };

  Sprite_Clouds.prototype.updateVisible = function() {
    if (CLOUD.SWITCH !== null && CLOUD.SWITCH !== 0) {
      this.visible = $gameSwitches.value(CLOUD.SWITCH);
    }
  };

  //======================================================================
  // Game Boot
  //======================================================================
  let _Scene_Boot_create = Scene_Boot.prototype.create;
  Scene_Boot.prototype.create = function() {
    _Scene_Boot_create.call(this);
    this.createCloudsSprite();
  };

  Scene_Boot.prototype.createCloudsSprite = function() {
    for(let i = 0; i < CLOUD.COUNT; i++) {
      cloudSprites.push(new Sprite_Clouds());
    }
  };

  //======================================================================
  // Spriteset Map
  //======================================================================
  var _Spriteset_Map_createLowerLayer = Spriteset_Map.prototype.createLowerLayer;
  Spriteset_Map.prototype.createLowerLayer = function() {
    _Spriteset_Map_createLowerLayer.call(this);
    this.createClouds();
  };

  var _Spriteset_Map_update = Spriteset_Map.prototype.update;
  Spriteset_Map.prototype.update = function() {
    _Spriteset_Map_update.call(this);
    this.updateClouds();
  };

  Spriteset_Map.prototype.createClouds = function() {
    cloudSprites.forEach((sprite)=>this.addChild(sprite));
  };

  Spriteset_Map.prototype.updateClouds = function() {
    cloudSprites.forEach((sprite)=>sprite.update());
  };

  //======================================================================
  // Game Map
  //======================================================================
  let relativelyMovement = function(dx, dy) {
    cloudSprites.forEach((sprite)=>{
      sprite.x += dx;
      sprite.y += dy;
    });
  };

  let _Game_Map_scrollLeft = Game_Map.prototype.scrollLeft;
  Game_Map.prototype.scrollLeft = function(distance) {
    _Game_Map_scrollLeft.call(this, distance);
    if ($gamePlayer.scrolledX() + distance >= $gamePlayer.centerX()) {
      relativelyMovement(distance * $gameMap.tileWidth(), 0);
    }
  };

  let _Game_Map_scrollRight = Game_Map.prototype.scrollRight;
  Game_Map.prototype.scrollRight = function(distance) {
    _Game_Map_scrollRight.call(this, distance);
    if($gamePlayer.scrolledX() - distance <= $gamePlayer.centerX()) {
      relativelyMovement(-distance * $gameMap.tileWidth(), 0);
    }
  };

  let _Game_Map_scrollUp = Game_Map.prototype.scrollUp;
  Game_Map.prototype.scrollUp = function(distance) {
    _Game_Map_scrollUp.call(this, distance);
    if($gamePlayer.scrolledY() + distance >= $gamePlayer.centerY()) {
      relativelyMovement(0, distance * $gameMap.tileHeight());
    }
  };

  let _Game_Map_scrollDown = Game_Map.prototype.scrollDown;
  Game_Map.prototype.scrollDown = function(distance) {
    _Game_Map_scrollDown.call(this, distance);
    if($gamePlayer.scrolledY() - distance <= $gamePlayer.centerY()) {
      relativelyMovement(0, -distance * $gameMap.tileHeight());
    }
  };
  
  if (CAMERA.ENABLE) {
    let _Game_Map_updateFocus = Game_Map.prototype.updateFocus;
    Game_Map.prototype.updateFocus = function() {
      let ox = this._displayX;
      let oy = this._displayY;
      _Game_Map_updateFocus.call(this);
      let dx = (ox - this._displayX) * this.tileWidth();
      let dy = (oy - this._displayY) * this.tileHeight();
      relativelyMovement(dx, dy);
    };
  }
})();

//======================================================================
// DialogBox
//----------------------------------------------------------------------
// Must place after Camera block
//======================================================================
(function () {

  const parameters = PluginManager.parameters('Integration');

  const DIALOG_BOX = {};
  DIALOG_BOX.ENABLE              = Boolean(parameters["DialogBox"] === "true");
  DIALOG_BOX.STANDARD_FONT_SIZE  = Number(parameters["DialogBox.StandardFontSize"]);
  DIALOG_BOX.TEXT_COLOR          = String(parameters["DialogBox.TextColor"]);
  DIALOG_BOX.OUTLINE_WIDTH       = Number(parameters["DialogBox.OutlineWidth"]);
  DIALOG_BOX.OUTLINE_COLOR       = String(parameters["DialogBox.OutlineColor"]);
  DIALOG_BOX.STANDARD_PADDING    = Number(parameters["DialogBox.StandardPadding"]);
  DIALOG_BOX.BACKGROUND_OPACITY  = Number(parameters["DialogBox.BackgroundOpacity"]);
  DIALOG_BOX.EXPANDING_DIRECTION = String(parameters["DialogBox.ExpandingDirection"]);
  DIALOG_BOX.ANIMATION_SPEED     = Number(parameters["DialogBox.AnimationSpeed"]);
  DIALOG_BOX.OPEN_THRESHOLD      = Number(parameters["DialogBox.OpenThreshold"]);
  DIALOG_BOX.CLOSE_THRESHOLD     = Number(parameters["DialogBox.CloseThreshold"]);

  const CAMERA = {};
  CAMERA.ENABLE                  = Boolean(parameters["Camera"] === "true");

  if (!!!DIALOG_BOX.ENABLE) return;

  //======================================================================
  // Constnat
  //======================================================================
  let $floating = true;

  let _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
  Game_Interpreter.prototype.pluginCommand = function(command, args) {
    _Game_Interpreter_pluginCommand.call(this, command, args);
    if (command === 'DialogBox') {
      switch (args[0]) {
        case 'open':
          $floating = true;
          break;
        case 'close':
          $floating = false;
          break;
        default:
          throw Error('DialogBox plugin command error.');
      }
    }
  };

  //======================================================================
  // Game Message
  //======================================================================
  Game_Message.prototype.character = function () {
    return this._character;
  };

  Game_Message.prototype.setCharacter = function (character) {
    this._character = character;
  };

  Game_Message.prototype.hasCharacter = function () {
    return !!this._character;
  };

  //======================================================================
  // Game Interpreter
  //======================================================================
  let Game_Interpreter_command101 = Game_Interpreter.prototype.command101;
  Game_Interpreter.prototype.command101 = function () {
    if (!$gameMessage.isBusy()) {
      if (this._eventId > 0){
        let event = $gameMap.event(this._eventId);
        $gameMessage.setCharacter(event);
      }
      else {
        $gameMessage.setCharacter($gamePlayer);
      }
    }
    return Game_Interpreter_command101.call(this);
  };

  //======================================================================
  // Window
  //======================================================================
  Object.defineProperty(Window.prototype, 'openness', {
    get: function () {
      return this._openness;
    },
    set: function (value) {
      if (this._openness !== value) {
        this._openness = value.clamp(0, 255);
        if (DIALOG_BOX.EXPANDING_DIRECTION === "Horizontal") {
          this._windowSpriteContainer.scale.x = this._openness / 255;
          this._windowSpriteContainer.x = this.width / 2 * (1 - this._openness / 255);
        }
        if (DIALOG_BOX.EXPANDING_DIRECTION === "Vertical") {
          this._windowSpriteContainer.scale.y = this._openness / 255;
          this._windowSpriteContainer.y = this.height / 2 * (1 - this._openness / 255);
        }
      }
    },
    configurable: true
  });

  Window.prototype.isOpen = function() {
    return Math.round(255 - this._openness) <= 0;
  };

  Window.prototype.isClosed = function() {
    return Math.round(this._openness - 0) <= 0;
  };

  //======================================================================
  // Window Base
  //======================================================================
  let _Window_Base_convertEscapeCharacters = Window_Base.prototype.convertEscapeCharacters;
  Window_Base.prototype.convertEscapeCharacters = function(text) {
    text = _Window_Base_convertEscapeCharacters.call(this, text);
    text = text.replace(/\x1bD\[(\d+)\]/gi, function() {
      let id = parseInt(arguments[1]);
      if(id > 0) {
        let event = $gameMap.event(id);
        $gameMessage.setCharacter(event);
      }
      else {
        $gameMessage.setCharacter($gamePlayer);
      }      
      return "";
    }.bind(this));
    return text;
  };

  Window_Base.prototype.removeEscapeCode = function (text) {
    text = text.replace(/\\/g, '\x1b');
    text = text.replace(/\x1b\x1b/g, '\\');
    text = text.replace(/\x1bV\[(\d+)\]/gi, '');
    text = text.replace(/\x1bV\[(\d+)\]/gi, '');
    text = text.replace(/\x1bN\[(\d+)\]/gi, '');
    text = text.replace(/\x1bP\[(\d+)\]/gi, '');
    text = text.replace(/\x1bD\[(\d+)\]/gi, '');
    text = text.replace(/\x1bc\[(\d+)\]/gi, '');
    text = text.replace(/\x1bG/gi, '');
    return text;
  };

  Window_Base.prototype.updateOpen = function () {
    if (this._opening) {
      this.openness += (255 - this.openness) / Math.max(DIALOG_BOX.ANIMATION_SPEED, 1);
      if ($floating) { 
        if (this.openness > DIALOG_BOX.OPEN_THRESHOLD) {
          this.opacity = 255;
        }
      }
      if (this.isOpen()) {
        this._opening = false;
      }
    }
  };

  Window_Base.prototype.updateClose = function () {
    if (this._closing) {
      this.openness += (0 - this.openness) / Math.max(DIALOG_BOX.ANIMATION_SPEED, 1);
      if ($floating) { 
        if (this.openness < DIALOG_BOX.CLOSE_THRESHOLD) {
          this.opacity = 0;
        }
      }
      if (this.isClosed()) {
        this._closing = false;
      }
    }
  };

  //======================================================================
  // Window Message
  //======================================================================
  Window_Message.prototype.standardFontSize = function () {
    return DIALOG_BOX.STANDARD_FONT_SIZE;
  };

  Window_Message.prototype.standardPadding = function () {
    return DIALOG_BOX.STANDARD_PADDING;
  };

  Window_Message.prototype.lineHeight = function () {
    return this.standardFontSize() + 8;
  };

  Window_Message.prototype.standardBackOpacity = function() {
    return DIALOG_BOX.BACKGROUND_OPACITY;
  };

  Window_Message.prototype.resetFontSettings = function() {
    Window_Base.prototype.resetFontSettings.call(this);
    this.contents.textColor = DIALOG_BOX.TEXT_COLOR;
    this.contents.outlineColor = DIALOG_BOX.OUTLINE_COLOR;
    this.contents.outlineWidth = DIALOG_BOX.OUTLINE_WIDTH;
  };

  Window_Message.prototype.calcWidth = function(texts) {
    let maxWidth = texts.reduce((width, line) => {
      let textWithoutCode = this.removeEscapeCode(line);
      let textWidth = this.textWidth(textWithoutCode);
      return Math.max(textWidth, width);
    }, 0);
    return maxWidth + this.standardPadding() * 2;
  };

  Window_Message.prototype.calcHeight = function(texts) {
    return this.fittingHeight(texts.length);
  };

  let _Window_Message_update = Window_Message.prototype.update;
  Window_Message.prototype.update = function() {
    this.updatePlacement();
    _Window_Message_update.call(this);
  };

  let _Window_Message_updatePlacement = Window_Message.prototype.updatePlacement;
  Window_Message.prototype.updatePlacement = function () {
    let character = $gamePlayer;
    if ($gameMessage.hasCharacter()) {
      character = $gameMessage.character();
    }
    if (!$floating) {
      this.x = 0;
      this.width = this.windowWidth();
      this.height = this.windowHeight();
      _Window_Message_updatePlacement.call(this);
      return;
    }
    if (this._textState) {
      let texts = this._textState.text.split("\n");
      this.width = this.calcWidth(texts);
      this.height = this.calcHeight(texts);
    }
    if (CAMERA.ENABLE) {
      let zoomScale = $gameScreen.zoomScale();
      let focusScale = $gameScreen.focusScale();
      let scale = zoomScale * focusScale;
      let w = this.width;
      let h = this.height;
      let th = $gameMap.tileHeight() * scale;
      let dx = Math.round($gameScreen.zoomX() * (zoomScale - 1) + $gameScreen.focusX());
      let dy = Math.round($gameScreen.zoomY() * (zoomScale - 1) + $gameScreen.focusY());
      this.x = character.screenX() * scale - (w / 2) - dx;
      this.y = character.screenY() * scale - th - h - dy;
    }
    else {
      let scale = $gameScreen.zoomScale();
      let w = this.width;
      let h = this.height;
      let th = $gameMap.tileHeight() * scale;
      let dx = Math.round($gameScreen.zoomX() * (scale - 1));
      let dy = Math.round($gameScreen.zoomY() * (scale - 1));
      this.x = character.screenX() * scale - (w / 2) - dx;
      this.y = character.screenY() * scale - th - h - dy;
    }
  };
  
  //======================================================================
  // Window_ChoiceList
  //======================================================================
  Window_ChoiceList.prototype.standardFontSize = function () {
    return DIALOG_BOX.STANDARD_FONT_SIZE;
  };

  Window_ChoiceList.prototype.standardPadding = function () {
    return DIALOG_BOX.STANDARD_PADDING;
  };

  Window_ChoiceList.prototype.lineHeight = function () {
    return this.standardFontSize() + 8;
  };

  Window_ChoiceList.prototype.standardBackOpacity = function() {
    return DIALOG_BOX.BACKGROUND_OPACITY;
  };

  Window_ChoiceList.prototype.resetFontSettings = function() {
    Window_Base.prototype.resetFontSettings.call(this);
    this.contents.textColor = DIALOG_BOX.TEXT_COLOR;
    this.contents.outlineColor = DIALOG_BOX.OUTLINE_COLOR;
    this.contents.outlineWidth = DIALOG_BOX.OUTLINE_WIDTH;
  };

  let _Window_ChoiceList_updatePlacement = Window_ChoiceList.prototype.updatePlacement;
  Window_ChoiceList.prototype.updatePlacement = function () {
    if ($gameMessage.hasCharacter()) {
      this.width = this.windowWidth();
      this.height = this.windowHeight();
      this.x = this._messageWindow.x + this._messageWindow.width - this.width;
      this.y = this._messageWindow.y + this._messageWindow.height + 4;
    }
    else {
      _Window_ChoiceList_updatePlacement.call(this);
    }
  };
})();
