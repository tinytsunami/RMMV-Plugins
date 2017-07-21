# RMMV_Plugins
RPG 製作大師 MV 的插件腳本，目前都是小腳本居多。

## 目錄
* [總列表](#總列表)
* [標示法說明](#標示法說明)
* [Camera.js](#camerajs)
* [TrackMove.js](#trackmovejs)

## 總列表
| 名稱 | 插件功能 | 最後更新 |
|:----|:----|:----|
|Camera.js| 簡單化對單位的縮放、平移畫面 | 2017.7.21 |
|TrackMove.js| 增加追蹤目標的移動模式 | 2017.7.21 |

## 標示法說明
插件指令的說明使用下列標示法：

    <說明>（<範圍或格式>:<型別名稱>）

另外，數值的範圍採用下面的格式：

    <區間><類型>

### 例子
| 標示 | 說明 |
|:----|:----|
|[0, 5]R:Number| 介於 0 到 5 之間（包含 0 跟 5）的所有實數。需注意包含小數 |
|(2, 3]R:Number| 介於 2 到 3 之間（包含 3 但不含 2）的所有實數。注意不包含 2 這個數值 |
|[0, inf)Z:Number| 介於 0 到無限大之間（含）的所有整數，其實就是大於等於 0 的整數 |
|[0, 1]Z:Boolean| 介於 0 到 1 之間（包含 0 跟 1）的所有整數，其實就是布林值 |
|CSS format(color):String| 依據 CSS 格式的字串，格式來源為 color 的值 |
|Refer to help:Number| 字串，實際的數值請參考插件幫助 |

## Camera.js 
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
|zoom|縮放畫面的比例大小|(0,2]R:Number|2|
|duration|縮放到達指定比例所需要的幀數|[1,inf)R:Number|60|
|speed|平移畫面的速度|[1,6]Z:Number|5|

### 插件指令

    Camera focus event <event_id>      //關注事件（省略時為該事件）
    Camera focus player                //關注角色
    Camera clear                       //清除關注
    Camera setting initialize          //初始化更改
    Camera setting zoom <zoom>         //更改縮放大小
    Camera setting duration <duration> //更改縮放時間
    Camera setting speed <speed>       //更改畫面平移速度
    
## TrackMove.js
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
|player tag|主角的預設標記|[0, inf)Z:Number|1|
|follower tag|主角跟隨者的預設標記|[0,inf)Z:Number|2|
|default tag|預設單位標記|[0, inf)Z:Number|0|
|default track|預設追蹤的標記|[0, inf)Z:Number|0|
|default move|預設無目標時的移動模式|Refer to help:String|random|
|default vision range|預設視野的範圍|[0,inf)Z:Number|5|
|default miss range|預設放棄追蹤的範圍|[0,inf)Z:Number|6|
|default found balloon|發現目標時的心情符號|[1,inf)Z:Number|1|
|default miss balloon|放棄追蹤時的心情符號|[1,inf)Z:Number|8|

### 插件常數的參考值
#### default move
|數值|說明|
|:----|:----|
|stand|站立不動|
|random|隨機移動|

### 插件指令

    TrackMove tag <tag>                  //設定本單位的標記
    TrackMove track <tag>                //設定要追蹤的標記
    TrackMove visionRange <range>        //設定視野的範圍
    TrackMove missRange <range>          //設定放棄追蹤的範圍
    TrackMove foundBalloon <balloon_id>  //設定發現目標時的心情符號
    TrackMove missBalloon <balloon_id>   //設定放棄追蹤時的心情符號
    TrackMove defaultMove <move>         //設定無目標時的移動模式

### 腳本指令
於自定義移動的腳本：

    this.track();                        //追蹤目標
    this.miss();                         //強制放棄追蹤
