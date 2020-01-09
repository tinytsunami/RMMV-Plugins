# 簡介
音樂遊戲腳本。

# 插件參數
| 名稱 | 型別 | 預設值 | 說明 |
|:--------------------------|:----------------------|:--------------------------|:--------------|
| music data                | Json:File             | data/game/Music.json      | 音樂譜面的檔案 |
| control keys              | Refer to help:String  | up, right, down, left     | 玩家操控的按鈕 |
| auto play                 | [0, 1]Z:Boolean       | 0                         | 自動演奏 |
| auto pause                | [0, 1]Z:Boolean       | 1                         | 遊戲跟隨窗口狀態自動暫停與開始 |
| pitch rate                | [1, inf)Z:Number      | 100                       | 演奏速率 |
| start delay               | [0, inf)Z:Number      | 300                       | 音樂載入後<br/>第一個音符到達前的空白預留時間 |
| end delay                 | [0, inf)Z:Number      | 300                       | 演奏結束後<br/>等待回到上一個場景的空白預留時間 |
| BGM volume                | [0, 100]Z:Number      | 80                        | BGM 播放的音量 |
| trackes number            | [1, inf)Z:Number      | 4                         | 設定的軌道數 |
| trackes direction         | Refer to help:String  | left to right             | 軌道方向 |
| trackes x position        | Refer to help:String  | 766, 766, 766, 766        | 軌道 X 位置 |
| trackes y position        | Refer to help:String  | 162, 262, 362, 462        | 軌道 Y 位置 |
| image background          | Image:File            | img/pictures/background   | 預設演奏時的背景圖片 |
| image note                | Image:File            | img/pictures/note         | 演奏時的相關音符圖片 |
| image max combo           | Image:File            | img/pictures/number       | 演奏時的連擊數字圖片 |
| image max combo digits    | [1, inf)Z:Number      | 3                         | 最大連擊位數 |
| image max combo x offset  | (-inf, inf)Z:Number   | 372                       | 最大連擊 X 位置 |
| image max combo y offset  | (-inf, inf)Z:Number   | 296                       | 最大連擊 Y 位置 |
| image score               | Image:File            | img/pictures/number       | 演奏時的分數數字圖片 |
| image score digits        | [1, inf)Z:Number      | 7                         | 分數位數 |
| image score x offset      | (-inf, inf)Z:Number   | 10                        | 分數 X 位置 |
| image score y offset      | (-inf, inf)Z:Number   | 10                        | 分數 Y 位置 |
| animation hit             | Refer to help:String  | 1, 2, 3, 4                | 按下按鍵時的動畫編號 |
| animation great hit       | Refer to help:String  | 5, 5, 5, 5                | 按下按鍵且擊出 great 的動畫 |
| animation good hit        | Refer to help:String  | 6, 6, 6, 6                | 按下按鍵且擊出 good 的動畫 |
| animation miss hit        | Refer to help:String  | 7, 7, 7, 7                | 按下按鍵且擊出 miss 的動畫 |
| animation connect hit     | Refer to help:String  | 8, 8, 8, 8                | 按下按鍵的長音播放動畫 |
| variable total            | [1, inf)Z:Number      | 1                         | 紀錄結果音符數量的變數 |
| variable great            | [1, inf)Z:Number      | 2                         | 紀錄結果 great 數量的變數 |
| variable good             | [1, inf)Z:Number      | 3                         | 紀錄結果 good 數量的變數 |
| variable miss             | [1, inf)Z:Number      | 4                         | 紀錄結果 miss 數量的變數 |
| variable combo            | [1, inf)Z:Number      | 5                         | 紀錄結果當前 combo 的變數 |
| variable max combo        | [1, inf)Z:Number      | 6                         | 紀錄結果 max combo 的變數 |
| variable score            | [1, inf)Z:Number      | 7                         | 紀錄結果 score 的變數 |
| precision great           | [1, inf)R:Number      | 4.0                       | 判斷為 Great 的精度範圍<br/>單位是為流速倍率 |
| precision good            | [1, inf)R:Number      | 8.0                       | 判斷為 Good 的精度範圍<br/>單位是為流速倍率 |
| precision miss            | [1, inf)R:Number      | 12.0                      | 判斷為 Miss 的精度範圍<br/>單位是為流速倍率 |
| score great               | (-inf, inf)R:Number   | 1000                      | 判定為 Great 的分數 |
| score good                | (-inf, inf)R:Number   | 500                       | 判定為 Good 的分數 |
| score miss                | (-inf, inf)R:Number   | 0                         | 判定為 Miss 的分數 |
| score connect             | (-inf, inf)R:Number   | 1000                      | 完成長音的分數 |

## 參考值
### trackes direction

| 數值 | 說明 |
|:--------------|:----|
| left to right | 為音符由左至右 |
| right to left | 為音符由右至左 |
| bottom to top | 為音符由下至上 |
| top to bottom | 為音符由下至上 |

輸入其他內容，自動變成「left to right」

### other

下面 8 個參數的數量皆應與 trackes number 對應，  
每個值都以「,」隔開，空白將會忽略，型別請參考註解內容：

    trackes x position      // (-inf, inf)Z:Number
    trackes y position      // (-inf, inf)Z:Number
    control keys            // Refer to help:String
    animation hit           // [1, inf)Z:Number
    animation great hit     // [1, inf)Z:Number
    animation good hit      // [1, inf)Z:Number
    animation miss hit      // [1, inf)Z:Number
    animation connect hit   // [1, inf)Z:Number

### control keys

    <key_1>, <key_2>, ... // 字元

其中每個參數皆為字串，為 Input.keyMapper 與英文鍵中任意字符。

# 插件指令

隨時可以使用的指令：

    MusicGame auto true                  // 開啟自動演奏
    MusicGame auto false                 // 關閉自動演奏

遊戲外可以使用的指令：

    MusicGame start <id>                 // 以第 <id> 首音樂開始遊戲
    MusicGame read <id> <args> <var_id>  // 讀取第 <id> 首音樂的參數 <args> 到第 <var_id> 號變數

遊戲場景中可以使用的指令：

    MusicGame pause true                 // 暫停遊戲
    MusicGame pause false                // 暫停結束
    MusicGame end                        // 遊戲結束
    MusicGame number <filename>          // 數字圖片更改為 <filename>
    MusicGame number reset               // 數字圖片重設為預設圖片
    MusicGame score great <number>       // 將 Great 得分數設為 <number> 分
    MusicGame score good <number>        // 將 Good 得分數設為 <number> 分
    MusicGame score miss <number>        // 將 Miss 得分數設為 <number> 分
    MusicGame score connect <number>     // 將長音得分數設為 <number> 分

所有插件指令的參數，皆不允許空白；若為檔案位置名稱，則不需副檔名。

# 設定說明
在指定目錄 MUSICGAME_FOLDER 的底下，  
放置 music.json 與  檔案，檔案結構如下所示：

    [
        {
            "name": <樂曲名>,
            "file": <樂曲檔名>,
            "background": <背景圖片>,
            "level": <難度分級>,
            "sign": <拍號>,
            "bpm": <曲速>,
            "speed": <音符流速>,
            "sheet": <譜面>
        },
        ...
    ]

每個 {...} 都為一首樂曲，而「樂曲編號」是這首樂曲在陣列 [...] 中的序位，  
除了樂曲編號不用填寫外，其他欄位的說明如下：

* 「樂曲名、樂曲檔名」為字串，且樂曲檔名應置於 ./audio/bgm 底下（不需副檔名）
* 「背景圖片」為字串，且圖片檔名應置於 ./picture/ 底下（不需副檔名，省略時為參數預設）
* 「難度分級」為一數字（整數、小數皆可）
* 「拍號」為長度二的陣列，像是四四拍應寫成 [4, 4]
* 「曲速」為一整數
* 「音符流速」為一整數，單位是像素/每幀（pixel/frame）
* 「譜面」為二維陣列，如下說明設定

對於譜面，第一個維度會放置小節數，  
第二個維度放置指定軌道的音符（二進制）。  
假設有三個軌道，即：  
譜面 1 0 0 要寫成 1  
譜面 0 1 0 要寫成 2  
譜面 1 1 0 要寫成 3  
譜面 0 0 1 要寫成 4  
譜面 1 0 1 要寫成 5  
...以此類推

每個子陣列會按裡面的數量自動分割，  
所以 [1] 等價於 [1, 0] 或 [1, 0, 0, 0]（都落在第一拍）  
而 [1, 0, 2, 0] 可以簡寫成 [1, 2]。

譜面「長音」跟音符邏輯相同，惟數值須給定一組陣列 [A, B]；  
其中 A 部分為原本音符的數值，而 B 部分設定哪些軌道為長音。  
另外，任意軌道的長音符，重複出現為一組。

其他部分還請參考範例專案。

# 其他細節

這份腳本是修改《thinking at night》遊戲而來，部分效果請參考該遊戲。