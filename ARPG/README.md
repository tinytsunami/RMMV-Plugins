# 簡介
使地圖上可以進行戰鬥。

# 插件參數
| 名稱 | 說明 | 型別 | 預設值 |
|:--------------------------------------|:--------------------------|:------------------|:----------|
| control key                           | Refer to help:String      | A, S, D, F        | 鍵盤控制鍵 |
| follower skill count                  | [0, inf)Z:Number          | 4                 | 玩家隊友的技能持有數量 |
| actor damage range tile color         | CSS format(color):String  | #FF3300           | 玩家傷害地板的顏色 |
| actor recover range tile color        | CSS format(color):String  | #00FF33           | 玩家回復地板的顏色 |
| enemy damage range tile color         | CSS format(color):String  | #3300FF           | 怪物攻擊地板的顏色 |
| enemy recover range tile color        | CSS format(color):String  | #33FF00           | 怪物回復地板的顏色 |
| actor damage range tile cache count   | [0, inf)Z:Number          | 50                | 玩家攻擊地板的暫存精靈數量 |
| actor recover range tile cache count  | [0, inf)Z:Number          | 50                | 玩家回復地板的暫存精靈數量 |
| enemy damage range tile cache count   | [0, inf)Z:Number          | 50                | 怪物攻擊地板的暫存精靈數量 |
| enemy recover range tile cache count  | [0, inf)Z:Number          | 50                | 怪物回復地板的暫存精靈數量 |
| skill tiles margin                    | [0, inf)Z:Number          | 4                 | 技能作用地板的外邊距 |
| skill tiles opacity                   | [0, 255]Z:Number          | 128               | 技能作用地板的不透明度 |
| status sprite margin                  | [0, inf)Z:Number          | 2                 | 角色血量、魔力條精靈的橫向外邊距 |
| status sprite width                   | [0, inf)Z:Number          | 5                 | 角色血量、魔力條精靈的寬度 |
| hp sprite color                       | CSS format(color):String  | #FF9900           | 用於顯示角色血量精靈的顏色 |
| hp sprite background color            | CSS format(color):String  | #AA3333           | 用於顯示角色血量精靈的背景顏色 |
| mp sprite color                       | CSS format(color):String  | #0099FF           | 用於顯示角色魔力精靈的顏色 |
| mp sprite background color            | CSS format(color):String  | #3333AA           | 用於顯示角色魔力精靈的背景顏色 |
| icon width                            | [1, inf)Z:Number          | 32                | 定義的圖標寬度 |
| icon height                           | [1, inf)Z:Number          | 32                | 定義的圖標長度 |
| keys sprites margin                   | [0, inf)Z:Number          | 50                | 玩家操作按鍵精靈的外邊距 |
| keys sprite font size                 | [1, 64]Z:Number           | 12                | 玩家操作按鍵精靈的字體大小 |
| keys sprite font x                    | [0, inf)Z:Number          | 18                | 玩家操作按鍵精靈的字體橫向位置 |
| keys sprite font y                    | [0, inf)Z:Number          | 6                 | 玩家操作按鍵精靈的字體縱向位置 |
| arpgkey invalid opacity               | [0, 255]Z:Number          | 64                | 操作按鍵精靈對應道具不可使用時的透明度 |
| arpgkey valid opacity                 | [0, 255]Z:Number          | 255               | 操作按鍵精靈對應道具正常時的透明度 |
| skill note regex                      | Refer to help:String      | /\\$ARPG\.\*\\S/  | 技能資料庫註解解析的正則表達式 |
| evaluator                             | Refer to help:String      | ARPGEvaluation    | 戰鬥評估用的函數部件 |

## 參考值
### control key

    <char1>, <char2>, ... // 字元

字元間以「,」隔開，空白將會忽略

### skill note regex

    <RegExp> // 正則表達式

用途為解析技能註解（逐行）
除非腳本衝突，否則此參數並不推薦修改

### evaluator

    <functionName> // 已定義的函數名

預設值為內建評估函數（ARPGEvaluation）
如需修改使用技能的標準可以外接函數

    此函數的結構為：function(<user>, <target>, <item>) {...return <result>;}
    參數 <user> 為技能、道具的使用者，是 Game_Actor 或 Game_Enemy
    參數 <target> 為使用的對象目標，是 Game_Actor 或 Game_Enemy
    參數 <item> 為使用的技能或道具，是 Game_Item
    參數 <result> 為回傳值，為 Boolean 值（是否使用技能、或道具）


# 插件指令

    ARPG player skill <keyIndex> <skillId>                   // 設定玩家技能
    ARPG player item <keyIndex> <skillId>                    // 設定玩家道具
    ARPG follower skill <followerIndex> <keyIndex> <skillId> // 設定跟隨者技能
    ARPG follower item <followerIndex> <keyIndex> <skillId>  // 設定跟隨者道具
    ARPG enemy <enemyId>                                     // 設定事件為指定怪物
    ARPG die erase                                           // 設定事件怪物死亡時，暫時消除劇情
    ARPG die switch <selfSwitchIndex>                        // 設定事件怪物死亡時，切換自開關
    ARPG system open                                         // 系統開啟顯示（顯示血量、魔力等資訊）
    ARPG system close                                        // 系統關閉顯示（停止顯示血量、魔力等資訊）


# 技能、道具註解
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


## 參考值
### type
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

### repelType
|數值|說明|
|:----|:----|
| none | 無擊退（忽略擊退率） |
| backward | 退後 |
| jump | 向後跳躍 |
| flight | 退後至底 |

### object
|數值|說明|
|:----|:----|
| enemy | 敵方 |
| actor | 我方 |
| all | 對所有 |

※ 作用對象會依照發動者做變化


# 其他細節
角色裝備技能、或道具的方法，在道具、技能頁面對選中的單位，按下 control key 設定的按鈕即可。

# 開發者提示
* 跟隨者只能利用事件裝備技能或道具，未完成的原因為介面所需不同，如需要可自行擴充功能、以及調整介面  
  ※ 請參考「技能、道具的控制掛載」區域的程式碼
* 外接評估函數的部分 evaluator 參數，插件分開的情況，在載入 ARPG\.js 之前，就應該先載入評估函數的插件。
* 不同角色的 A\.I\. 系統沒有實作，普通使用者的話，利用移動指令就能完成強度的控制。高級使用者可以自行添加。  
  ※ 請參考「角色 ARPG 化」及「自操作角色的更新」區域的程式碼  
