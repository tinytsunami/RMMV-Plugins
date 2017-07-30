# RMMV_Plugins
RPG 製作大師 MV 的插件腳本，目前都是小腳本居多。


## 目錄
* [總列表](#總列表)
* [標示法說明](#標示法說明)
* [ARPG.js](#arpgjs)
* [Camera.js](#camerajs)
* [FollowerMove.js](#followermovejs)
* [MaxBattleMembers.js](#maxbattlemembersjs)
* [Speed.js](#speedjs)
* [TrackMove.js](#trackmovejs)
* [WeaponPaperDoll.js](#weaponpaperdolljs)


## 總列表
| 名稱 | 插件功能 | 最後更新 |
|:----|:----|:----|
| ARPG.js | 使地圖上可以進行戰鬥 | 2017.7.30 |
| Camera.js | 簡單化對單位的縮放、平移畫面 | 2017.7.23 |
| FollowerMove.js | 跟隨者移動參數的調整 | 2017.7.30 |
| MaxBattleMembers.js | 最大參戰人數的調整 | 2017.7.30 |
| Speed.js | 速度破限與值修改 | 2017.7.30 |
| TrackMove.js | 增加追蹤目標的移動模式 | 2017.7.30 |
| WeaponPaperDoll.js | 地圖上可以顯示裝備武器 | 2017.7.30 |


## 標示法說明
插件指令的說明使用下列標示法：

    <說明>（<範圍或格式>:<型別名稱>）

另外，數值的範圍採用下面的格式：

    <區間><類型>


### 例子
| 標示 | 說明 |
|:----|:----|
| [0, 5]R:Number | 介於 0 到 5 之間（包含 0 跟 5）的所有實數。需注意包含小數 |
| (2, 3]R:Number | 介於 2 到 3 之間（包含 3 但不含 2）的所有實數。注意不包含 2 這個數值 |
| [0, inf)Z:Number | 介於 0 到無限大之間（含）的所有整數，其實就是大於等於 0 的整數 |
| [0, 1]Z:Boolean | 介於 0 到 1 之間（包含 0 跟 1）的所有整數，其實就是布林值 |
| CSS format(color):String | 依據 CSS 格式的字串，格式來源為 color 的值 |
| Refer to help:Number | 字串，實際的數值請參考插件幫助 |

## ARPG.js 
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| control key | 鍵盤控制鍵 | Refer to help:String | A, S, D, F |
| follower skill count | 玩家隊友的技能持有數量 | [0, inf)Z:Number | 4 |
| actor damage range tile color | 玩家傷害地板的顏色 | CSS format(color):String | #FF3300 |
| actor recover range tile color | 玩家回復地板的顏色 | CSS format(color):String | #00FF33 |
| enemy damage range tile color | 怪物攻擊地板的顏色 | CSS format(color):String | #3300FF |
| enemy recover range tile color | 怪物回復地板的顏色 | CSS format(color):String | #33FF00 |
| actor damage range tile cache count | 玩家攻擊地板的暫存精靈數量 | [0, inf)Z:Number | 50 |
| actor recover range tile cache count | 玩家回復地板的暫存精靈數量 | [0, inf)Z:Number | 50 |
| enemy damage range tile cache count | 怪物攻擊地板的暫存精靈數量 | [0, inf)Z:Number | 50 |
| enemy recover range tile cache count | 怪物回復地板的暫存精靈數量 | [0, inf)Z:Number | 50 |
| skill tiles margin | 技能作用地板的外邊距 | [0, inf)Z:Number | 4 |
| skill tiles opacity | 技能作用地板的不透明度 | [0, 255]Z:Number | 128 |
| status sprite margin | 角色血量、魔力條精靈的橫向外邊距 | [0, inf)Z:Number | 2 |
| status sprite width | 角色血量、魔力條精靈的寬度 | [0, inf)Z:Number | 5 |
| hp sprite color | 用於顯示角色血量精靈的顏色 | CSS format(color):String | #FF9900 |
| hp sprite background color | 用於顯示角色血量精靈的背景顏色 | CSS format(color):String | #AA3333 |
| mp sprite color | 用於顯示角色魔力精靈的顏色 | CSS format(color):String | #0099FF |
| mp sprite background color | 用於顯示角色魔力精靈的背景顏色 | CSS format(color):String | #3333AA |
| icon width | 定義的圖標寬度 | [1, inf)Z:Number | 32 |
| icon height | 定義的圖標長度 | [1, inf)Z:Number | 32 |
| keys sprites margin | 玩家操作按鍵精靈的外邊距 | [0, inf)Z:Number | 50 |
| keys sprite font size | 玩家操作按鍵精靈的字體大小 | [1, 64]Z:Number | 12 |
| keys sprite font x | 玩家操作按鍵精靈的字體橫向位置 | [0, inf)Z:Number | 18 |
| keys sprite font y | 玩家操作按鍵精靈的字體縱向位置 | [0, inf)Z:Number | 6 |
| arpgkey invalid opacity | 操作按鍵精靈對應道具不可使用時的透明度 | [0, 255]Z:Number | 64 |
| arpgkey valid opacity | 操作按鍵精靈對應道具正常時的透明度 | [0, 255]Z:Number | 255 |
| skill note regex | 技能資料庫註解解析的正則表達式 | Refer to help:String | /\\$ARPG\.\*\\S/ |
| evaluator | 戰鬥評估用的函數部件 | Refer to help:String | ARPGEvaluation |

### 插件指令

    ARPG player skill <keyIndex> <skillId>                   // 設定玩家技能
    ARPG player item <keyIndex> <skillId>                    // 設定玩家道具
    ARPG follower skill <followerIndex> <keyIndex> <skillId> // 設定跟隨者技能
    ARPG follower item <followerIndex> <keyIndex> <skillId>  // 設定跟隨者道具
    ARPG enemy <enemyId>                                     // 設定事件為指定怪物
    ARPG die erase                                           // 設定事件怪物死亡時，暫時消除劇情
    ARPG die switch <selfSwitchIndex>                        // 設定事件怪物死亡時，切換自開關
    ARPG system open                                         // 系統開啟顯示（顯示血量、魔力等資訊）
    ARPG system close                                        // 系統關閉顯示（停止顯示血量、魔力等資訊）


### 插件常數的參考值
#### control key

    <char1>, <char2>, ... // 字元

字元間以「,」隔開，空白將會忽略

#### skill note regex

    <RegExp> // 正則表達式

用途為解析技能註解（逐行）
除非腳本衝突，否則此參數並不推薦修改

#### evaluator

    <functionName> // 已定義的函數名

預設值為內建評估函數（ARPGEvaluation）
如需修改使用技能的標準可以外接函數

    此函數的結構為：function(<user>, <target>, <item>) {...return <result>;}
    參數 <user> 為技能、道具的使用者，是 Game_Actor 或 Game_Enemy
    參數 <target> 為使用的對象目標，是 Game_Actor 或 Game_Enemy
    參數 <item> 為使用的技能或道具，是 Game_Item
    參數 <result> 為回傳值，為 Boolean 值（是否使用技能、或道具）


### 技能、道具註解
寫在注釋中，使用「$ARPG」開頭（如果沒有修改預設參數）
使用空白隔開，而同一行的「#」之後會被當成一般注釋處理

    $ARPG type <string>                 # 範圍類型（Refer to help）
    $ARPG distance <number>             # 距離（[0, inf)Z:Number）
    $ARPG cooldown <number>             # 技能冷卻幀數（[0, inf)Z:Number）
    $ARPG expand <number>               # 作用域擴張延遲幀數（[0, inf)Z:Number）
    $ARPG duration <number>             # 作用域圖塊滯留幀數（[0, inf)Z:Number）
    $ARPG repelType <number>            # 擊退模式（Refer to help）
    $ARPG repelRate <number>            # 擊退率（[0, 100]Z:Number）
    $ARPG object <string>               # 作用對象（Refer to help）
    $ARPG scope [[x1,y1],[x2,y2],...]   # 定義其他類型作用域（Refer to help）


### 技能、道具註解特殊參考值
#### type
|數值|說明|
|:----|:----|
| none | 無（忽略距離） |
| self | 單位自身（忽略距離） |
| straight | 前方直線 |
| cross | 正十字 |
| x-cross | 交叉十字 |
| star | 星型 |
| square | 方型 |
| diamond | 菱型 |
| all-map | 全地圖（忽略距離） |
| other | 另外定義（忽略距離） |

#### repelType
|數值|說明|
|:----|:----|
| none | 無擊退（忽略擊退率） |
| backward | 退後 |
| jump | 向後跳躍 |
| flight | 退後至底 |

#### object
|數值|說明|
|:----|:----|
| enemy | 敵方 |
| actor | 我方 |
| all | 對所有 |

※ 作用對象會依照發動者做變化


### 其他細節
角色裝備技能、或道具的方法
在道具、技能頁面對選中的單位
按下 control key 設定的按鈕即可


### 開發者提示
* 跟隨者只能利用事件裝備技能或道具，未完成的原因為介面所需不同，如需要可自行擴充功能、以及調整介面  
  ※ 請參考「技能、道具的控制掛載」區域的程式碼
* 外接評估函數的部分 evaluator 參數，插件分開的情況，在載入 ARPG\.js 之前，就應該先載入評估函數的插件。
* 不同角色的 A\.I\. 系統沒有實作，普通使用者的話，利用移動指令就能完成強度的控制。高級使用者可以自行添加。  
  ※ 請參考「角色 ARPG 化」及「自操作角色的更新」區域的程式碼  


## Camera.js 
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| zoom | 縮放畫面的比例大小 | (0,2]R:Number | 2 |
| duration | 縮放到達指定比例所需要的幀數 | [1,inf)R:Number | 60 |
| speed | 平移畫面的速度 | [1,6]Z:Number | 5 |


### 插件指令

    Camera focus event <event_id>      //關注事件（省略時為該事件）
    Camera focus player                //關注角色
    Camera clear                       //清除關注
    Camera setting initialize          //初始化更改
    Camera setting zoom <zoom>         //更改縮放大小
    Camera setting duration <duration> //更改縮放時間
    Camera setting speed <speed>       //更改畫面平移速度


## FollowerMove.js 
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| follower speed | 跟隨者的移動速度 | [1, 6]Z:Number | 4 |
| follower frequency | 跟隨者的移動頻率 | [1, 5]Z:Number | 5 |
| follower collid | 跟隨者的是否允許碰撞 | [0, 1]Z:Boolean | 1 |


### 插件指令

    這個插件沒有插件指令


## MaxBattleMembers.js
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| max battle members | 允許的最大戰鬥人數 | [1, inf)Z:Number | 4 |


### 插件指令

    這個插件沒有插件指令


## Speed.js
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| player speed | 玩家速度 | (0, inf)Z:Number | 16 |
| player dash speed | 玩家跑步時的速度 | (0, inf)Z:Number | 32 |
| dash transition | 玩家跑步至極速的過渡幀數 | [0, inf)Z:Number | 0 |
| max speed | 允許的最高速度 | (0, inf)Z:Number | 128 |
| min speed | 允許的最低速度 | (0, inf)Z:Number | 2 |


### 插件指令

    Speed set <speed> //設定事件的速度值


### 其他細節
速度的的值為 X 的話  
每 1 幀的時間，可移動的距離為 (X/256) 格  
走 1 格的距離，需要花的幀數為 (256/X) 幀  
幀數的單位為 (1/60) 秒  
所以，走 1 格的距離，共需要 (256/X) * (1/60) 秒


## TrackMove.js
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| player tag | 主角的標記 | [0, inf)Z:Number | 2 |
| follower tag | 跟隨者單位標記 | [0, inf)Z:Number | 3 |
| follower track | 跟隨者單位追蹤的標記 | [0, inf)Z:Number | 2 |
| follower move (no target) | 跟隨者單位無目標時的移動模式 | Refer to help:String | random |
| follower toward player | 當玩家移動時、追蹤玩家 | [0, 1]Z:Boolean | 1 |
| follower vision range | 跟隨者單位視野的範圍 | [0,inf)Z:Number | 5 |
| follower miss range | 跟隨者單位放棄追蹤的範圍 | [0,inf)Z:Number | 6 |
| follower found balloon | 跟隨者單位發現目標時的心情符號 | [1,inf)Z:Number | 1 |
| follower miss balloon | 跟隨者單位放棄追蹤時的心情符號 | [1,inf)Z:Number | 8 |
| unit tag | 其他單位標記 | [0, inf)Z:Number | 1 |
| unit track | 其他單位追蹤的標記 | [0, inf)Z:Number | 0 |
| unit move (no target) | 其他單位無目標時的移動模式 | Refer to help:String | random |
| unit vision range | 其他單位視野的範圍 | [0,inf)Z:Number | 5 |
| unit miss range | 其他單位放棄追蹤的範圍 | [0,inf)Z:Number | 6 |
| unit found balloon | 其他單位發現目標時的心情符號 | [1,inf)Z:Number | 1 |
| unit miss balloon | 其他單位放棄追蹤時的心情符號 | [1,inf)Z:Number | 8 |
| track rate | 追蹤時隨機移動的機率 | [0, 1]R:Number | 0.2


### 插件常數的參考值
#### default move
|數值|說明|
|:----|:----|
| stand | 站立不動 |
| random | 隨機移動 |


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


### 其他細節
|單位|透明|暫時消除|
|:----:|:----:|:----:|
| player | 追蹤目標(X)、被追蹤(O) | 主角不會被暫時消除 |
| follower | 追蹤目標(X)、被追蹤(X) | 跟隨者不會被暫時消除 |
| event | 追蹤目標(O)、被追蹤(O) | 追蹤目標(X)、被追蹤(X) |


## WeaponPaperDoll.js
### 插件常數
| 名稱 | 說明 | 型別 | 預設值 |
|:----|:----|:----|:----|
| icon width | 設定圖標的寬度 | [1, inf)Z:Number | 32 |
| icon height | 設定圖標的高度 | [1, inf)Z:Number | 32 |
| weapon anchor x | 武器的旋轉的橫向固定點 | [0, 1]R:Number | 0.875 |
| weapon anchor y | 武器的旋轉的縱向固定點 | [0, 1]R:Number | 0.875 |
| weapon rotaion | 武器圖示的旋轉角度 | [0, 360]Z:Number | -30 |
| weapon sprite shift x | 武器精靈的橫向偏移量 | [0, inf)Z:Number | -5 |
| weapon sprite shift y | 武器精靈的縱向偏移量 | [0, inf)Z:Number | -20 |
| weapon animation speed | 武器動畫週期的幀數 | [0, inf)Z:Number | 60 |
| weapon animation range x | 武器動畫的橫向範圍 | [0, inf)Z:Number | 1 |
| weapon animation range y | 武器動畫的縱向範圍 | [0, inf)Z:Number | 2 |


### 插件指令

    WeaponPaperDoll set <weaponId> //為事件設定武器


 
