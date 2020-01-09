//====================================================================================================================
// MusicGame.js
//====================================================================================================================

/*:
 * @plugindesc 音樂遊戲的腳本
 * @author 羊羽
 * 
 * @param music data
 * @desc 音樂譜面的檔案（Json:File）
 * @default data/game/Music.json
 *
 * @param control keys
 * @desc 玩家操控的按鈕（Refer to help:String）
 * @default up, right, down, left
 * 
 * @param auto play
 * @desc 自動演奏（[0, 1]Z:Boolean）
 * @default 0
 * 
 * @param auto pause
 * @desc 遊戲跟隨窗口狀態自動暫停與開始（[0, 1]Z:Boolean）
 * @default 1
 * 
 * @param pitch rate
 * @desc 演奏速率（[1, inf)Z:Number）
 * @default 100
 * 
 * @param start delay
 * @desc 音樂載入後，第一個音符到達前的空白預留時間（[0, inf)Z:Number）
 * @default 300
 * 
 * @param end delay
 * @desc 演奏結束後，等待回到上一個場景的空白預留時間（[0, inf)Z:Number）
 * @default 300
 * 
 * @param BGM volume
 * @desc BGM 播放的音量（[0, 100]Z:Number）
 * @default 80
 * 
 * @param trackes number
 * @desc 設定的軌道數（[1, inf)Z:Number）
 * @default 4
 * 
 * @param trackes direction
 * @desc 軌道方向（Refer to help:String）
 * @default left to right
 * 
 * @param trackes x position
 * @desc 軌道 X 位置（Refer to help:String）
 * @default 766, 766, 766, 766
 * 
 * @param trackes y position
 * @desc 軌道 Y 位置（Refer to help:String）
 * @default 162, 262, 362, 462
 * 
 * @param image background
 * @desc 預設演奏時的背景圖片（Image:File）
 * @default background
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param image note
 * @desc 演奏時的相關音符圖片（Image:File）
 * @default note
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param image max combo
 * @desc 演奏時的連擊數字圖片（Image:File）
 * @default number
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param image max combo digits
 * @desc 最大連擊位數（[1, inf)Z:Number）
 * @default 3
 * 
 * @param image max combo x offset
 * @desc 最大連擊 X 位置（(-inf, inf)Z:Number）
 * @default 372
 * 
 * @param image max combo y offset
 * @desc 最大連擊 Y 位置（(-inf, inf)Z:Number）
 * @default 296
 * 
 * @param image score
 * @desc 演奏時的分數數字圖片（Image:File）
 * @default number
 * @require 1
 * @dir img/pictures/
 * @type file
 * 
 * @param image score digits
 * @desc 分數位數（[1, inf)Z:Number）
 * @default 7
 * 
 * @param image score x offset
 * @desc 分數 X 位置（(-inf, inf)Z:Number）
 * @default 10
 * 
 * @param image score y offset
 * @desc 分數 Y 位置（(-inf, inf)Z:Number）
 * @default 10
 * 
 * @param animation hit
 * @desc 按下按鍵時的動畫編號（Refer to help:String）
 * @default 1, 2, 3, 4
 * 
 * @param animation great hit
 * @desc 按下按鍵且擊出 great 的動畫（Refer to help:String）
 * @default 5, 5, 5, 5
 * 
 * @param animation good hit
 * @desc 按下按鍵且擊出 good 的動畫（Refer to help:String）
 * @default 6, 6, 6, 6
 * 
 * @param animation miss hit
 * @desc 按下按鍵且擊出 miss 的動畫（Refer to help:String）
 * @default 7, 7, 7, 7
 * 
 * @param animation connect hit
 * @desc 按下按鍵的長音播放動畫（Refer to help:String）
 * @default 8, 8, 8, 8
 * 
 * @param variable total
 * @desc 紀錄結果音符數量的變數（[1, inf)Z:Number）
 * @default 1
 * 
 * @param variable great
 * @desc 紀錄結果 great 數量的變數（[1, inf)Z:Number）
 * @default 2
 * 
 * @param variable good
 * @desc 紀錄結果 good 數量的變數（[1, inf)Z:Number）
 * @default 3
 * 
 * @param variable miss
 * @desc 紀錄結果 miss 數量的變數（[1, inf)Z:Number）
 * @default 4
 * 
 * @param variable combo
 * @desc 紀錄結果當前 combo 的變數（[1, inf)Z:Number）
 * @default 5
 * 
 * @param variable max combo
 * @desc 紀錄結果 max combo 的變數（[1, inf)Z:Number）
 * @default 6
 * 
 * @param variable score
 * @desc 紀錄結果 score 的變數（[1, inf)Z:Number）
 * @default 7
 * 
 * @param precision great
 * @desc 判斷為 Great 的精度範圍，單位是為流速倍率（[1, inf)R:Number）
 * @default 4.0
 *
 * @param precision good
 * @desc 判斷為 Good 的精度範圍，單位是為流速倍率（[1, inf)R:Number）
 * @default 8.0
 * 
 * @param precision miss
 * @desc 判斷為 Miss 的精度範圍，單位是為流速倍率（[1, inf)R:Number）
 * @default 12.0
 * 
 * @param score great
 * @desc 判定為 Great 的分數（(-inf, inf)R:Number）
 * @default 1000
 *
 * @param score good
 * @desc 判定為 Good 的分數（(-inf, inf)R:Number）
 * @default 500
 * 
 * @param score miss
 * @desc 判定為 Miss 的分數（(-inf, inf)R:Number）
 * @default 0
 * 
 * @param score connect
 * @desc 完成長音的分數（(-inf, inf)R:Number）
 * @default 1000
 * 
 * @help
 * 【插件指令】
 * 隨時可以使用的指令：
 * MusicGame auto true                  // 開啟自動演奏
 * MusicGame auto false                 // 關閉自動演奏
 * 
 * 遊戲外可以使用的指令：
 * MusicGame start <id>                 // 以第 <id> 首音樂開始遊戲
 * MusicGame read <id> <args> <var_id>  // 讀取第 <id> 首音樂的參數 <args> 到第 <var_id> 號變數
 * 
 * 遊戲中可以使用的指令：
 * MusicGame pause true                 // 暫停遊戲
 * MusicGame pause false                // 暫停結束
 * MusicGame end                        // 遊戲結束
 * MusicGame number <filename>          // 數字圖片更改為 <filename>
 * MusicGame number reset               // 數字圖片重設為預設圖片
 * MusicGame score great <number>       // 將 Great 得分數設為 <number> 分
 * MusicGame score good <number>        // 將 Good 得分數設為 <number> 分
 * MusicGame score miss <number>        // 將 Miss 得分數設為 <number> 分
 * MusicGame score connect <number>     // 將長音得分數設為 <number> 分
 * 
 * 所有插件指令的參數，皆不允許空白；若為檔案位置名稱，則不需副檔名。
 * 
 * －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
 * 【特殊參考值】
 * 插件常數 trackes direction 的參考值：
 * "left to right" 為音符由左至右
 * "right to left" 為音符由右至左
 * "bottom to top" 為音符由下至上
 * "top to bottom" 為音符由下至上
 * 輸入其他內容，自動變成 "left to right"
 *  
 * 插件常數 trackes x position（(-inf, inf)Z:Number）
 * 插件常數 trackes y position（(-inf, inf)Z:Number）
 * 插件常數 control keys（Refer to help:String）
 * 插件常數 animation hit（[1, inf)Z:Number）
 * 插件常數 animation great hit（[1, inf)Z:Number）
 * 插件常數 animation good hit（[1, inf)Z:Number）
 * 插件常數 animation miss hit（[1, inf)Z:Number）
 * 插件常數 animation connect hit（[1, inf)Z:Number）
 * 
 * 上述 8 個參數的數量皆應與 trackes number 對應
 * 每個值都以「,」隔開，空白將會忽略，型別請參考括弧內容
 * 
 * 插件常數 control keys 參考值為：
 * 格式為 <key_1>, <key_2>, ...
 * 其中 <key> 為字串，為 Input.keyMapper 與英文鍵中任意字符
 * 
 * －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
 * 【設定說明】
 * 在指定目錄 MUSICGAME_FOLDER 的底下，
 * 放置 music.json 與  檔案，檔案結構如下所示：
 * 
 * [
 *   {
 *     "name": <樂曲名>,
 *     "file": <樂曲檔名>,
 *     "background": <背景圖片>,
 *     "level": <難度分級>,
 *     "sign": <拍號>,
 *     "bpm": <曲速>,
 *     "speed": <音符流速>,
 *     "sheet": <譜面>
 *   },
 *   ...
 * ]
 * 
 * 每個 {...} 都為一首樂曲，而「樂曲編號」是這首樂曲在陣列 [...] 中的序位
 * 除了樂曲編號不用填寫外，其他欄位的說明如下：
 * 
 * 「樂曲名、樂曲檔名」為字串，且樂曲檔名應置於 ./audio/bgm 底下（不需副檔名）
 * 「背景圖片」為字串，且圖片檔名應置於 ./picture/ 底下（不需副檔名）
 * 「難度分級」為一數字（整數、小數皆可）
 * 「拍號」為長度二的陣列，像是四四拍應寫成 [4, 4]
 * 「曲速」為一整數
 * 「音符流速」為一整數，單位是像素/每幀（pixel/frame）
 * 「譜面」為二維陣列，如下說明設定
 * 
 * 對於譜面，第一個維度會放置小節數
 * 第二個維度放置指定軌道的音符（二進制）
 * 假設有三個軌道，即：
 * 譜面 1 0 0 要寫成 1
 * 譜面 0 1 0 要寫成 2
 * 譜面 1 1 0 要寫成 3
 * 譜面 0 0 1 要寫成 4
 * 譜面 1 0 1 要寫成 5
 * ...
 * 以此類推
 * 
 * 每個子陣列會按裡面的數量自動分割
 * 所以 [1] 等價於 [1, 0] 或 [1, 0, 0, 0]（都落在第一拍）
 * 而 [1, 0, 2, 0] 可以簡寫成 [1, 2]
 * 
 * 譜面「長音」跟音符邏輯相同，惟數值須給定一組陣列 [A, B]；
 * 其中 A 部分為原本音符的數值，而 B 部分設定哪些軌道為長音。
 * 另外，任意軌道的長音符，重複出現為一組。
 * 
 * 其他部分還請參考範例專案
 * 
 * －－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－－
 * 【關於】
 * 這份腳本是修改《thinking at night》遊戲而來，部分效果請參考該遊戲
 * 
 */

(function() {

    //=========================================================================================================
    // 遊戲參數
    //=========================================================================================================
    var parameters = PluginManager.parameters('MusicGame');

    // 資料參數
    var MUSIC_DATA = `../${String(parameters["music data"])}`;
    var CONTROL_KEYS = String(parameters["control keys"]) || "up, right, down, left";
    CONTROL_KEYS = CONTROL_KEYS.split(",").map((v)=>v.replace(/\s+/g, ""));

    // 時間參數
    var AUTO_PLAY = Boolean(Number(parameters["auto play"]) || 0);
    var PITCH_RATE = Number(parameters["pitch rate"]) || 100;
    var START_DELAY = Number(parameters["start delay"]) || 300;
    var END_DELAY = Number(parameters["end delay"]) || 300;
    var WINDOW_BLUR_PAUSE = Boolean(Number(parameters["window blur pause"]) || 0);
    
    // 音量參數
    var BGM_VOLUME = Number(parameters["BGM volume"]) || 80;

    // 軌道參數
    var TRACKES_NUMBER = Number(parameters["trackes number"]) || 4;
    var TRACKES_DIRECTION = String(parameters["trackes direction"]) || "left to right";
    var TRACKES_X_POSITION = String(parameters["trackes x position"]) || "766, 766, 766, 766";
    var TRACKES_Y_POSITION = String(parameters["trackes y position"]) || "162, 262, 362, 462";
    TRACKES_X_POSITION = TRACKES_X_POSITION.split(",").map((v)=>Number(v));
    TRACKES_Y_POSITION = TRACKES_Y_POSITION.split(",").map((v)=>Number(v));

    // 圖片參數
    var IMAGE_BACKGROUND = String(parameters["image background"]);
    var IMAGE_NOTE = String(parameters["image note"]);
    var IMAGE_MAX_COMBO = String(parameters["image max combo"]);
    var IMAGE_MAX_COMBO_DIGITS = Number(parameters["image max combo digits"]);
    var IMAGE_MAX_COMBO_X_OFFSET = Number(parameters["image max combo x offset"]);
    var IMAGE_MAX_COMBO_Y_OFFSET = Number(parameters["image max combo y offset"]);
    var IMAGE_SCORE = String(parameters["image score"]);
    var IMAGE_SCORE_DIGITS = Number(parameters["image score digits"]);
    var IMAGE_SCORE_X_OFFSET = Number(parameters["image score x offset"]);
    var IMAGE_SCORE_Y_OFFSET = Number(parameters["image score y offset"]);
    
    // 動畫參數
    var ANIMATION_HIT = String(parameters["animation hit"]);
    var ANIMATION_GREAT_HIT = String(parameters["animation great hit"]);
    var ANIMATION_GOOD_HIT = String(parameters["animation good hit"]);
    var ANIMATION_MISS_HIT = String(parameters["animation miss hit"]);
    var ANIMATION_CONNECT_HIT = String(parameters["animation connect hit"]);
    ANIMATION_HIT = ANIMATION_HIT.split(",").map((v)=>Number(v));
    ANIMATION_GREAT_HIT = ANIMATION_GREAT_HIT.split(",").map((v)=>Number(v));
    ANIMATION_GOOD_HIT = ANIMATION_GOOD_HIT.split(",").map((v)=>Number(v));
    ANIMATION_MISS_HIT = ANIMATION_MISS_HIT.split(",").map((v)=>Number(v));
    ANIMATION_CONNECT_HIT = ANIMATION_CONNECT_HIT.split(",").map((v)=>Number(v));

    // 變數參數
    var VARIABLE_TOTAL = Number(parameters["variable total"]) || 1;
    var VARIABLE_GREAT = Number(parameters["variable great"]) || 2;
    var VARIABLE_GOOD = Number(parameters["variable good"]) || 3;
    var VARIABLE_MISS = Number(parameters["variable miss"]) || 4;
    var VARIABLE_COMBO = Number(parameters["variable combo"]) || 5;
    var VARIABLE_MAX_COMBO = Number(parameters["variable max combo"]) || 6;
    var VARIABLE_SCORE = Number(parameters["variable score"]) || 7;

    // 精度參數
    var PRECISION_GREAT = Number(parameters["precision great"]) || 4.0;
    var PRECISION_GOOD = Number(parameters["precision good"]) || 8.0;
    var PRECISION_MISS = Number(parameters["precision miss"]) || 12.0;

    // 分數參數
    var SCORE_GREAT = Number(parameters["score great"]) || 1000;
    var SCORE_GOOD = Number(parameters["score good"]) || 500;
    var SCORE_MISS = Number(parameters["score miss"]) || 0;
    var SCORE_CONNECT = Number(parameters["score connect"]) || 1000;

    //=========================================================================================================
    // 一些例外情況
    //=========================================================================================================
    // 音符框在畫面外
    for(var i = 0; i < TRACKES_NUMBER; i++) {
        var x = TRACKES_X_POSITION[i];
        var y = TRACKES_Y_POSITION[i];
        if(x < 0 || x > Graphics.width || y < 0 || y > Graphics.height) {
            throw new Error("Track(note block) is beyond screen!");
        }
    };

    //=========================================================================================================
    // 設定遊戲幀率
    //=========================================================================================================
    FPS = 60;
    SceneManager._deltaTime = 1.0 / FPS;

    //=========================================================================================================
    // 資料設定
    //=========================================================================================================
    DataManager._databaseFiles.push({name: '$dataMusicGame', src: MUSIC_DATA});
    AudioManager._replayFadeTime = 0.1;

    //=========================================================================================================
    // 操作設定
    //=========================================================================================================
    var index = 0;                                  // 演奏的音樂編號
    
    var keys = CONTROL_KEYS;                        // 玩家設定的按鍵
    var pressTimes = {};                            // 按壓時間的紀錄
    
    var inMusicGaming = false;                      // 正在遊戲中
    var isAutoPlay = AUTO_PLAY;                     // 自動演奏
    var isPausing = false;                          // 正在暫停
    
    var requestNumberImage = IMAGE_MAX_COMBO;       // 請求更換的數字圖片

    var score_great = SCORE_GREAT;                  // 擊中 Great 時的分數
    var score_good = SCORE_GOOD;                    // 擊中 Good 時的分數
    var score_miss = SCORE_MISS;                    // 擊中 Miss 時的分數
    var score_connect = SCORE_CONNECT;              // 完成長音時的分數

    //=========================================================================================================
    // 建立 BGM/SE 物件
    //=========================================================================================================
    var BGM = function(name) {
        return { name: name, volume: BGM_VOLUME, pitch: PITCH_RATE, pan: 0 };
    };

    //=========================================================================================================
    // 插件指令
    //=========================================================================================================
    var _Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand; 
    Game_Interpreter.prototype.pluginCommand = function(command, args) { 
        _Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === "MusicGame") {
            switch (args[0]) {
                case "start":
                    index = Number(args[1]);
                    SceneManager.push(Scene_MusicGame);
                    break;
                case "auto":
                    isAutoPlay = Boolean(args[1] === "true");
                    break;
                case "pause":
                    isPausing = Boolean(args[1] === "true");
                    break;
                case "end":
                    SceneManager.pop();
                    break;
                case "number":
                    var filename = String(args[1]);
                    if (filename === "reset") {
                        requestNumberImage = IMAGE_MAX_COMBO;
                    }
                    else {
                        requestNumberImage = filename;
                    }
                    break;
                case "score":
                    switch(String(args[1])) {
                        case "great":
                            score_great = Number(args[2]);
                            break;
                        case "good":
                            score_good = Number(args[2]);
                            break;
                        case "miss":
                            score_miss = Number(args[2]);
                            break;
                        case "connect":
                            score_connect = Number(args[2]);
                            break;
                    }
                    break;
            }
        }
    };

    //=========================================================================================================
    // 處理音符的靜態函數
    //=========================================================================================================
    function Note() {
        throw new Error('This is a static class');
    }

    Note.create = function(track, time){
        return {
            track: track,
            sprite: null,
            connect: null,
            hitted: false,
            over: false,
            time: time
        };
    };

    Note.setConnect = function(note) {
        note.connect = {            // 設定長音的狀態
            tail: null,             // 紀錄結尾的音符（有值則為開頭）
            head: null,             // 紀錄開頭的音符（有值則為結尾）
            sprite: null,           // 連接圖片的精靈
            length: 0               // 紀錄初始連接長度
        };
    };

    Note.isConnect = function(note){
        return note.connect !== null;
    };

    Note.isConnectHead = function(note){
        return this.isConnect(note) && note.connect.head === null;
    };

    Note.isConnectTail = function(note){
        return this.isConnect(note) && note.connect.tail === null;
    };

    //=========================================================================================================
    // 遊戲場景
    //=========================================================================================================
    function Scene_MusicGame() {
        this.initialize.apply(this, arguments);
    }

    Scene_MusicGame.prototype = Object.create(Scene_Base.prototype);
    Scene_MusicGame.prototype.constructor = Scene_Base;

    Scene_MusicGame.prototype.initialize = function() {
        Scene_Base.prototype.initialize.call(this);
        this._spriteset = null;     // 精靈集
        this._notes = [];           // 所有的音符
        this._bpm = 0;              // 樂曲的速度
        this._sign = null;          // 樂曲的拍號
        this._sheet = null;         // 樂曲的譜面
        this._score = null;         // 計分的物件
        this._audio = null;         // 音訊的物件
        this._pause = false;        // 目前暫停中
        this._speed = 0;            // 音符每幀的流速
        this._combo = 0;            // 目前的連擊數
        this._end = 0;              // 演奏結束後的靜音
        this._now = 0;              // 目前音符的時間
        this._id = 0;               // 判斷音符的編號
        this._t = 0;                // 目前經過的時間
        this._commonEvents = null;  // 公共事件
        this._connected = null;     // 按住長音
        this.prepare();
        this.createSpriteset();
        this.setupCommonEvent();
        if (WINDOW_BLUR_PAUSE) {
            this._blurFunction = ()=>{
                isPausing = true;
            };
            this._focusFunction = ()=>{
                isPausing = false;
            };
            window.addEventListener('blur', this._blurFunction);
            window.addEventListener('focus', this._focusFunction);
        }
    };

    Scene_MusicGame.prototype.setupCommonEvent = function() {
        this._commonEvents = $dataCommonEvents.filter(function(commonEvent) {
            return commonEvent && commonEvent.trigger === 2;
        }).map(function(commonEvent) {
            return new Game_CommonEvent(commonEvent.id);
        });
        this._commonEvents.forEach(function(event) {
            event.refresh();
        });
    };

    Scene_MusicGame.prototype.createSpriteset = function() {
        var background = $dataMusicGame[index].background;
        this._spriteset = new Spriteset_MusicGame(this._notes, background);
        this.addChild(this._spriteset);
    };

    Scene_MusicGame.prototype.prepare = function() {
        inMusicGaming = true;
        this._t = 0;
        this._id = 0;
        this._combo = 0;
        this._end = 0;
        this._pause = false;
        this._bpm = $dataMusicGame[index].bpm * (PITCH_RATE / 100);
        this._sign = $dataMusicGame[index].sign;
        this._speed = $dataMusicGame[index].speed * (60 / FPS);
        this._sheet = $dataMusicGame[index].sheet;
        this._connected = Array.from({
            length: TRACKES_NUMBER
        }, ()=>null);
        this.setupNotes();
        this.setupScore();
        AudioManager.stopBgm();
        var bgm = BGM($dataMusicGame[index].file);
        this._audio = AudioManager.playBgm(bgm);
        this._audio.stop();
    };
    
    Scene_MusicGame.prototype.setupNotes = function() {
        if(!!this._notes) {
            delete this._notes;
            this._notes = [];
        }
        var framesPreSegment = 0;
        framesPreSegment = this._sign[0];           // 每一小節有幾拍
        framesPreSegment *= 4 / this._sign[1];      // 每一小節四分拍
        framesPreSegment /= this._bpm / 60;         // 每一小節有幾秒
        framesPreSegment *= FPS;                    // 每一小節有幾幀
        var connect = Array.from({                  // 紀錄長音的開頭音符
            length: TRACKES_NUMBER
        }, ()=>null);
        this._sheet.forEach((segment, i)=>{
            var unit = framesPreSegment / segment.length;
            segment.forEach((n, j)=>{
                var c = 0;                          // 預設長音標示為沒有
                if(Array.isArray(n)) {              // 如果屬於長音組
                    c = n[1];                       // 第二維度為長音標示
                    n = n[0];                       // 第一維度為音符
                }
                for(var m = Math.pow(2, TRACKES_NUMBER); m >= 1; m /= 2) {
                    if(Math.floor(n / m) == 1) {
                        var v = 0;
                        v += i * framesPreSegment;          // 第幾小節開始
                        v += unit * j;                      // 小節中的第幾單位
                        v += START_DELAY;                   // 遊戲開始時的偏移量
                        v *= -this._speed;                  // 每一幀的流速
                        var track = Math.log2(m);           // 判斷所屬軌道
                        var note = Note.create(track, v);   // 生成音符
                        /* 處理長音音符 */
                        if(Math.floor(c / m) == 1) {
                            Note.setConnect(note);          // 設定長音的狀態
                            if(connect[track] === null) {   // 如果是長音開頭
                                connect[track] = note;      // 紀錄長音開頭
                            }
                            else {                                  // 如果是長音結尾
                                connect[track].connect.tail = note; // 長音開頭記錄結尾
                                note.connect.head = connect[track]; // 長音結尾記錄開頭
                                connect[track] = null;              // 清除長音開頭紀錄
                            }
                        }
                        this._notes.push(note);     // 放入音符
                        n -= m;
                    }
                }
            });
        });
    };

    Scene_MusicGame.prototype.setupScore = function() {
        if(!!this._score) {
            delete this._score;
        }
        this._score = {
            total: this._notes.length,
            great: 0,
            good: 0,
            miss: 0,
            maxCombo: 0,
            score: 0
        };
    };

    Scene_MusicGame.prototype.update = function() {
        Scene_Base.prototype.update.call(this);
        if(isPausing === false && this._pause === false) {
            if(this._audio.isReady()) {
                // 演奏前延遲
                if(this._t == START_DELAY) {
                    this._audio.play(false, 0);
                }
                // 更新音符
                this._notes.forEach((note)=>{
                    note.time += this._speed;
                    // 自動演奏（一般音符）
                    if(isAutoPlay && !note.hitted) {
                        this.autoHit(note.time, note.track);
                    }
                    if(note.over && !note.hitted) {
                        this.overJudge(note);
                    }
                });
                // 自動演奏（長音）
                if(isAutoPlay){
                    this._connected.forEach((note)=>{
                        if(note !== null) {
                            // 音符為長音開頭且被打中，模擬長按
                            if(Note.isConnectHead(note) && note.hitted) {
                                this._spriteset.loopBlockAnimation(note.track, ANIMATION_CONNECT_HIT);
                                note.time = 0;
                            }
                        }
                    });
                }
                // 刪去音符
                this._notes = this._notes.filter((note)=>{
                    return !note.over;
                });
                // 玩家控制
                if(!isAutoPlay) {
                    keys.forEach((key, i)=>{
                        // 一般音符
                        if(Input.isTriggered(key)) {
                            this.hit(i, false);
                        }
                        // 長音音符
                        if(this._connected[i] !== null) {
                            if(Input.isPressed(key)) {
                                var head = this._connected[i];
                                var tail = head.connect.tail;
                                head.time -= this._speed;
                                this._spriteset.loopBlockAnimation(head.track, ANIMATION_CONNECT_HIT);
                                this.autoHit(tail.time, tail.track);
                            }
                            else {
                                this.connectFailJudge(this._connected[i]);
                            }
                        }
                    });
                }
                // 結束遊戲
                if (this._notes.length === 0) {
                    if(this._end === 0) {
                        AudioManager.fadeOutBgm(END_DELAY/FPS);
                        this._end = this._t + END_DELAY;
                    }
                    if(this._end === this._t) {
                        this.end();
                    }
                }
                // 時間更新
                this._t++;
            }
        }
        else if(isPausing === true && this._pause === false) {
            this.pause();
        }
        else if(isPausing === false && this._pause === true) {
            this.unpause();
        }
        // 公共事件更新
        $gameScreen.update();
        this._commonEvents.forEach(function(event) {
            event.update();
        });
    };

    Scene_MusicGame.prototype.autoHit = function(time, track) {
        var great = PRECISION_GREAT * this._speed;
        if(time >= -great && time <= great) {
            this.hit(track, true);
        }
    };

    Scene_MusicGame.prototype.hit = function(track, auto) {
        this._spriteset.showBlockAnimation(track, ANIMATION_HIT);
        for(var i = 0, n = this._notes.length; i < n; i++) {
            var note = this._notes[i];
            if(note.hitted == false && note.track == track) {
                if(Note.isConnectHead(note)) {
                    if(this.connectHeadJudge(note)) {
                        note.hitted = true;
                        break;
                    }
                }
                else if(Note.isConnectTail(note)) {
                    if(auto) {
                        note.hitted = true;
                        this.connectTailJudge(note);
                    }
                    break;
                }
                else {
                    if(this.judge(note)) {
                        note.hitted = true;
                        break;
                    }
                }
            }
        }
    };

    Scene_MusicGame.prototype.judge = function(note) {
        var miss = PRECISION_MISS * this._speed;
        if(note.time >= -miss && note.time <= miss) {
            var great = PRECISION_GREAT * this._speed;
            var good = PRECISION_GOOD * this._speed;
            if(note.time >= -great && note.time <= great) {
                note.sprite.opacity = 0;
                this._score.score += score_great;
                this._score.great++;
                this._combo++;
                this._spriteset.setCombo(this._combo);
                this._spriteset.setScore(this._score.score);
                this._score.maxCombo = Math.max(this._combo, this._score.maxCombo);
                this._spriteset.showBlockAnimation(note.track, ANIMATION_GREAT_HIT);
            }
            else if(note.time >= -good && note.time <= good) {
                note.sprite.opacity = 0;
                this._score.score += score_good;
                this._score.good++;
                this._combo++;
                this._spriteset.setCombo(this._combo);
                this._spriteset.setScore(this._score.score);
                this._score.maxCombo = Math.max(this._combo, this._score.maxCombo);
                this._spriteset.showBlockAnimation(note.track, ANIMATION_GOOD_HIT);
            }
            else {
                note.sprite.opacity = 128;
                this._score.score += score_miss;
                this._score.miss++;
                this._combo = 0;
                this._spriteset.setCombo(this._combo);
                this._spriteset.setScore(this._score.score);
                this._spriteset.showBlockAnimation(note.track, ANIMATION_MISS_HIT);
            }
            this.score();
            return true;
        }
        return false;
    };

    Scene_MusicGame.prototype.connectHeadJudge = function(note) {
        var miss = PRECISION_MISS * this._speed;
        if(note.time >= -miss && note.time <= miss) {
            var great = PRECISION_GREAT * this._speed;
            var good = PRECISION_GOOD * this._speed;
            if(note.time >= -great && note.time <= great) {
                this._connected[note.track] = note;
                this._spriteset.showBlockAnimation(note.track, ANIMATION_GREAT_HIT);
            }
            else if(note.time >= -good && note.time <= good) {
                this._connected[note.track] = note;
                this._spriteset.showBlockAnimation(note.track, ANIMATION_GOOD_HIT);
            }
            else {
                this.connectFailJudge(note);
            }
            this.score();
            return true;
        }
        return false;
    };

    Scene_MusicGame.prototype.connectTailJudge = function(note) {
        note.sprite.opacity = 0;
        this._connected[note.track].sprite.opacity = 0;
        this._connected[note.track] = null;
        this._score.score += score_connect;
        this._spriteset.setScore(this._score.score);
        this._spriteset.showBlockAnimation(note.track, ANIMATION_GREAT_HIT);
    };

    Scene_MusicGame.prototype.connectFailJudge = function(note) {
        this._connected[note.track] = null;
        if(note.sprite) {
            note.sprite.opacity = 128;
        }
        if(note.connect.tail.sprite) {
            note.connect.tail.sprite.opacity = 128;
        }
    };

    Scene_MusicGame.prototype.overJudge = function(note) {
        if(note.hitted == false) {
            if(Note.isConnectHead(note)) {
                this.connectFailJudge(note);
                return;
            }
            this._score.score += score_miss;
            this._score.miss++;
            this._combo = 0;
            this._spriteset.setCombo(this._combo);
            this._spriteset.setScore(this._score.score);
            note.hitted = true;
            if(this._now != note.time) {
                this._id++;
                this._now = note.time;
            }
            this.score();
        }
    };

    Scene_MusicGame.prototype.score = function() {
        $gameVariables.setValue(VARIABLE_TOTAL, this._score.total);
        $gameVariables.setValue(VARIABLE_GREAT, this._score.great);
        $gameVariables.setValue(VARIABLE_GOOD, this._score.good);
        $gameVariables.setValue(VARIABLE_MISS, this._score.miss);
        $gameVariables.setValue(VARIABLE_COMBO, this._combo);
        $gameVariables.setValue(VARIABLE_MAX_COMBO, this._score.maxCombo);
        $gameVariables.setValue(VARIABLE_SCORE, this._score.score);
    };

    Scene_MusicGame.prototype.end = function() {
        this.score();
        this._audio.stop();
        inMusicGaming = false;
        if (WINDOW_BLUR_PAUSE) {
            window.removeEventListener('blur', this._blurFunction);
            window.removeEventListener('focus', this._focusFunction);
        }
        this.popScene();
    };

    Scene_MusicGame.prototype.pause = function() {
        this._audio.stop();
        this._pause = true;
    };

    Scene_MusicGame.prototype.unpause = function() {
        if(this._t >= START_DELAY) {
            var s = (this._t - START_DELAY) / FPS;
            this._audio.play(false, s);
        }
        this._pause = false;
    };
    
    //=========================================================================================================
    // 初始化遊戲精靈集
    //=========================================================================================================
    function Spriteset_MusicGame() {
        this.initialize.apply(this, arguments);
    }

    Spriteset_MusicGame.prototype = Object.create(Spriteset_Base.prototype);
    Spriteset_MusicGame.prototype.constructor = Spriteset_MusicGame;

    Spriteset_MusicGame.prototype.initialize = function(notes, background) {
        this._notes = notes;
        this._tmpComboFilename = requestNumberImage;
        this._backgroundFilename = background || IMAGE_BACKGROUND;
        Spriteset_Base.prototype.initialize.call(this);
        this._noteBitmaps = null;       // 音符位圖
        this._backgroundSprite = null;  // 背景精靈
        this._blockSprites = [];        // 音符框精靈
        this._comboSprites = [];        // 連擊數字精靈
        this._scoreSprites = [];        // 分數數字精靈
        this._scoreValue = 0;           // 顯示的分數值
        this._scoreSpriteWidth = 0;     // 分數數字精靈的寬度
        this._scoreSpriteHeight = 0;    // 分數數字精靈的高度
        this._comboValue = 0;           // 顯示的連擊數
        this._comboSpriteWidth = 0;     // 連擊數字精靈的寬度
        this._comboSpriteHeight = 0;    // 連擊數字精靈的高度
        this._noteDx = 0;               // 音符的 X 位移方向
        this._noteDy = 0;               // 音符的 Y 位移方向
        this._connectNoteAnchorX = 0;   // 長音連接精靈的 X 錨點
        this._connectNoteAnchorY = 0;   // 長音連接精靈的 Y 錨點
        this.create();
    };

    Spriteset_MusicGame.prototype.create = function() {
        this.setNoteSpriteParaments();
        this.cacheNoteBitmaps(()=>{
            this.createBackgroundSprite();
            this.createBlockSprites();
            this.createComboSprite();
            this.createScoreSprite();
            this.createNoteSprite();
        });
    };

    Spriteset_MusicGame.prototype.setNoteSpriteParaments = function() {
        switch(TRACKES_DIRECTION) {
            case "left to right":
                this._noteDx = 1;
                this._noteDy = 0;
                this._connectNoteAnchorX = 1;
                this._connectNoteAnchorY = 0.5;
                break;
            case "right to left":
                this._noteDx = -1;
                this._noteDy = 0;
                this._connectNoteAnchorX = 0;
                this._connectNoteAnchorY = 0.5;
                break;
            case "bottom to top":
                this._noteDx = 0;
                this._noteDy = -1;
                this._connectNoteAnchorX = 0.5;
                this._connectNoteAnchorY = 0;
                break;
            case "top to bottom": 
                this._noteDx = 0;
                this._noteDy = 1;
                this._connectNoteAnchorX = 0.5;
                this._connectNoteAnchorY = 1;
                break;
        }
    };

    Spriteset_MusicGame.prototype.cacheNoteBitmaps = function(callback){
        var NOTE_TYPE_NUMBER = 5;
        var bitmap = ImageManager.loadPicture(IMAGE_NOTE);
        bitmap.addLoadListener(()=>{
            var w = Math.floor(bitmap.width / TRACKES_NUMBER);
            var h = Math.floor(bitmap.height / NOTE_TYPE_NUMBER);
            this._noteBitmaps = Array.from({
                length: TRACKES_NUMBER
            }, (v, track)=>{
                return Array.from({
                    length: NOTE_TYPE_NUMBER
                },(v, type)=>{
                    var cache = new Bitmap(w, h);
                    cache.blt(bitmap, w * track, h * type, w, h, 0, 0);
                    return cache;
                });
            });
            callback.call(this);
        });
    };

    Spriteset_MusicGame.prototype.createNoteSprite = function(){
        this._notes.forEach((note)=>{
            if(note.over === false && note.sprite === null) {
                if (Note.isConnect(note) == false) {
                    note.sprite = new Sprite();
                    note.sprite.bitmap = this._noteBitmaps[note.track][1];
                    note.sprite.opacity = 255;
                    note.sprite.anchor.x = 0.5;
                    note.sprite.anchor.y = 0.5;
                    this._baseSprite.addChild(note.sprite);
                }
                else {
                    note.sprite = new Sprite();
                    if(Note.isConnectHead(note)) {
                        // 建立長音開頭精靈
                        var bitmap = this._noteBitmaps[note.track][2];
                        note.sprite.bitmap = bitmap;
                        // 建立連接精靈
                        var source = this._noteBitmaps[note.track][3];
                        var dt = note.time - note.connect.tail.time;
                        note.connect.sprite = new Sprite();
                        note.connect.sprite.bitmap = this.drawConnectBitmap(source, dt);
                        note.connect.sprite.anchor.x = this._connectNoteAnchorX;
                        note.connect.sprite.anchor.y = this._connectNoteAnchorY;
                        note.connect.length = dt;
                        note.sprite.addChild(note.connect.sprite);
                    }
                    else {
                        // 建立長音結尾精靈
                        note.sprite.bitmap = this._noteBitmaps[note.track][4];
                    }
                    note.sprite.opacity = 255;
                    note.sprite.anchor.x = 0.5;
                    note.sprite.anchor.y = 0.5;
                    this._baseSprite.addChild(note.sprite);
                }
            }
        });
    };

    Spriteset_MusicGame.prototype.createBackgroundSprite = function(){
        this._backgroundSprite = new Sprite_Base();
        this._backgroundSprite.bitmap = ImageManager.loadPicture(this._backgroundFilename);
        this._baseSprite.addChild(this._backgroundSprite);
    };

    Spriteset_MusicGame.prototype.createComboSprite = function(){
        var bitmap = ImageManager.loadPicture(this._tmpComboFilename); 
        bitmap.addLoadListener(()=>{
            this._comboDigitWidth = Math.floor(bitmap.width / 10);
            this._comboDigitHeight = bitmap.height;
            for(var i = 0; i < IMAGE_MAX_COMBO_DIGITS; i++) {    
                var sprite = new Sprite();
                sprite.bitmap = bitmap;
                sprite.x = IMAGE_MAX_COMBO_X_OFFSET + this._comboDigitWidth * i;
                sprite.y = IMAGE_MAX_COMBO_Y_OFFSET;
                this._comboSprites.push(sprite);
                this._baseSprite.addChild(sprite);
            }
            this.setCombo(this._comboValue);
        });
    };

    Spriteset_MusicGame.prototype.createScoreSprite = function(){
        var bitmap = ImageManager.loadPicture(IMAGE_SCORE);
        bitmap.addLoadListener(()=>{
            this._scoreDigitWidth = Math.floor(bitmap.width / 10);
            this._scoreDigitHeight = bitmap.height;
            for(var i = 0; i < IMAGE_SCORE_DIGITS; i++) {    
                var sprite = new Sprite();
                sprite.bitmap = bitmap;
                sprite.x = IMAGE_SCORE_X_OFFSET + this._scoreDigitWidth * i;
                sprite.y = IMAGE_SCORE_Y_OFFSET;
                this._scoreSprites.push(sprite);
                this._baseSprite.addChild(sprite);
            }
            this.setScore(this._scoreValue);
        });
    };

    Spriteset_MusicGame.prototype.createBlockSprites = function(){
        if(!!this._blockSprites) {
            delete this._blockSprites;
            this._blockSprites = [];
        }
        for(var i = 0; i < TRACKES_NUMBER; i++) {
            var sprite = new Sprite_Base();
            sprite.bitmap = this._noteBitmaps[i][0];
            sprite.x = TRACKES_X_POSITION[i];
            sprite.y = TRACKES_Y_POSITION[i];
            sprite.anchor.x = 0.5;
            sprite.anchor.y = 0.5;
            this._blockSprites.push(sprite);
            this._baseSprite.addChild(sprite);
        }
    };

    Spriteset_MusicGame.prototype.noteOverScreen = function(note) {
        if(Note.isConnectHead(note)) {
            return this.noteOverScreen(note.connect.tail);
        }
        if(note.sprite !== null) {
            switch(TRACKES_DIRECTION) {
                case "left to right": 
                    return note.sprite.x > Graphics.width + note.sprite.width / 2;
                case "right to left":
                    return note.sprite.x < -note.sprite.width / 2;
                case "bottom to top": 
                    return note.sprite.y < -note.sprite.height / 2;
                case "top to bottom": 
                    return note.sprite.y > Graphics.height + note.sprite.height / 2;
            }
        }
        return false;
    };
    
    Spriteset_MusicGame.prototype.drawConnectBitmap = function(source, dt) {
        var adx = Math.abs(this._noteDx);
        var ady = Math.abs(this._noteDy);
        var w = dt * adx + source.width * ady;
        var h = dt * ady + source.height * adx;
        var bitmap = new Bitmap(w, h);
        var sw = source.width;
        var sh = source.height;
        var ox = Math.floor((w % sw) / 2);
        var oy = Math.floor((h % sh) / 2);
        var wc = Math.floor(w / sw);
        var hc = Math.floor(h / sh);
        for(var i = 0; i < wc; i++) {
            for(var j = 0; j < hc; j++) {
                bitmap.blt(source, 0, 0, sw, sh, ox + i * sw, oy + j * sh);
            }
        }
        switch(TRACKES_DIRECTION) {
            case "left to right": 
            case "right to left":
                bitmap.blt(source, 0, 0, ox, sh, 0, 0);
                bitmap.blt(source, ox, 0, sw - ox, sh, ox + wc * sw, 0);
                break;
            case "bottom to top":
            case "top to bottom": 
                bitmap.blt(source, 0, 0, sw, oy, 0, 0);
                bitmap.blt(source, 0, oy, sw, sh - oy, 0, oy + hc * sh);
                break;
        }
        return bitmap;
    };

    Spriteset_MusicGame.prototype.connectReduce = function(note) {
        if(Note.isConnectHead(note)) {
            var r = (note.time - note.connect.tail.time) / note.connect.length;
            switch(TRACKES_DIRECTION) {
                case "left to right": 
                case "right to left":
                    note.connect.sprite.scale.x = r;
                    break;
                case "bottom to top":
                case "top to bottom": 
                    note.connect.sprite.scale.y = r;
                    break;
            }
        }
    };

    Spriteset_MusicGame.prototype.update = function() {
        Spriteset_Base.prototype.update.call(this);
        this.updateComboSprite();
        this._notes.forEach((note)=>{
            if(note.over === false && note.sprite !== null) {
                // 音符超出畫面
                if(this.noteOverScreen(note)) {
                    note.over = true;
                    this._baseSprite.removeChild(note.sprite);
                    delete note.sprite;
                }
                else {
                    // 更新精靈位置
                    var block = this._blockSprites[note.track];
                    note.sprite.x = block.x + this._noteDx * note.time;
                    note.sprite.y = block.y + this._noteDy * note.time;
                    // 處理長音縮短
                    if(Note.isConnectHead(note)) {
                        this.connectReduce(note);
                    }
                }
            }
        });
    };

    Spriteset_MusicGame.prototype.updateComboSprite = function(){
        if (this._tmpComboFilename !== requestNumberImage) {
            this._tmpComboFilename = requestNumberImage;
            var bitmap = ImageManager.loadPicture(requestNumberImage); 
            bitmap.addLoadListener(()=>{
                this._comboDigitWidth = Math.floor(bitmap.width / 10);
                this._comboDigitHeight = bitmap.height;
                for(var i = 0; i < IMAGE_MAX_COMBO_DIGITS; i++) {
                    var sprite = this._comboSprites[i];
                    sprite.bitmap = bitmap;
                    sprite.x = IMAGE_MAX_COMBO_X_OFFSET + this._comboDigitWidth * i;
                    sprite.y = IMAGE_MAX_COMBO_Y_OFFSET;
                    this.setCombo(this._comboValue);
                }
            });
        }
    };

    Spriteset_MusicGame.prototype.showBlockAnimation = function(trackIndex, animations){
        var animation = $dataAnimations[animations[trackIndex]];
        this._blockSprites[trackIndex].startAnimation(animation, false, 1);
    };

    Spriteset_MusicGame.prototype.loopBlockAnimation = function(trackIndex, animations){
        if(this._blockSprites[trackIndex].isAnimationPlaying() === false) {
            this.showBlockAnimation(trackIndex, animations);
        }
    };

    Spriteset_MusicGame.prototype.setCombo = function(value){
        this._comboValue = value;
        this._comboSprites.forEach((sprite, digit)=>{
            var number = Math.floor(value / Math.pow(10, IMAGE_MAX_COMBO_DIGITS - digit - 1)) % 10;
            sprite.setFrame(this._comboDigitWidth * number, 0, this._comboDigitWidth, this._comboDigitHeight);
        });
    };

    Spriteset_MusicGame.prototype.setScore = function(value){
        this._scoreValue = value;
        this._scoreSprites.forEach((sprite, digit)=>{
            var number = Math.floor(value / Math.pow(10, IMAGE_SCORE_DIGITS - digit - 1)) % 10;
            sprite.setFrame(this._scoreDigitWidth * number, 0, this._scoreDigitWidth, this._scoreDigitHeight);
        });
    };

    //=========================================================================================================
    // 新增基本精靈顯示/隱藏函數
    //=========================================================================================================
    Sprite.prototype.show = function() {
        this.visible = true;
    };

    Sprite.prototype.hide = function() {
        this.visible = false;
    };

    //=========================================================================================================
    // 禁用螢幕輸入
    //========================================================================================================= 
    TouchInput._setupEventHandlers = function() {
        return;        
    };

    //=========================================================================================================
    // 多按鍵輸入
    //=========================================================================================================   
    var _Input_update = Input.update;
    Input.update = function() {
        if(inMusicGaming) {
            for(var i = 0, n = keys.length; i < n; i++) {
                var key = keys[i];
                if (!(key in pressTimes)) {
                    pressTimes[key] = 0;
                }
                if (this._currentState[key]) {
                    pressTimes[key]++;
                    if (!this._previousState[key]) {
                        pressTimes[key] = 0;
                    }
                }
            }
        }
        _Input_update.call(this);
    };

    var _Input_isTriggered = Input.isTriggered;
    Input.isTriggered = function(keyName) {
        if(inMusicGaming && keys.includes(keyName)) {
            if (this._isEscapeCompatible(keyName) && this.isTriggered('escape')) {
                return true;
            } else {
                return !!this._currentState[keyName] && pressTimes[keyName] === 0;
            }
        }
        else {
            return _Input_isTriggered.call(this, keyName);
        }
    };

    //=========================================================================================================
    // 重載音訊處理
    //=========================================================================================================  
    var _AudioManager_playBgm = AudioManager.playBgm;
    AudioManager.playBgm = function(bgm, pos) {
        _AudioManager_playBgm.call(this, bgm, pos);
        return this._bgmBuffer;
    };
})();
