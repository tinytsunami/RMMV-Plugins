# 簡介
增加追蹤目標的移動模式。

# 插件參數
| 名稱 | 型別 | 預設值 | 說明 |
|:------------------------------|:----------------------|:----------|:----|
| player tag                    | [0, inf)Z:Number      | 2         | 主角的標記 |
| follower tag                  | [0, inf)Z:Number      | 3         | 跟隨者單位標記 |
| follower track                | [0, inf)Z:Number      | 2         | 跟隨者單位追蹤的標記 |
| follower move (no target)     | Refer to help:String  | random    | 跟隨者單位無目標時的移動模式 |
| follower toward player        | [0, 1]Z:Boolean       | 1         | 當玩家移動時、追蹤玩家 |
| follower vision range         | [0,inf)Z:Number       | 5         | 跟隨者單位視野的範圍 |
| follower miss range           | [0,inf)Z:Number       | 6         | 跟隨者單位放棄追蹤的範圍 |
| follower found balloon        | [1,inf)Z:Number       | 1         | 跟隨者單位發現目標時的心情符號 |
| follower miss balloon         | [1,inf)Z:Number       | 8         | 跟隨者單位放棄追蹤時的心情符號 |
| unit tag                      | [0, inf)Z:Number      | 1         | 其他單位標記 |
| unit track                    | [0, inf)Z:Number      | 0         | 其他單位追蹤的標記 |
| unit move (no target)         | Refer to help:String  | random    | 其他單位無目標時的移動模式 |
| unit vision range             | [0,inf)Z:Number       | 5         | 其他單位視野的範圍 |
| unit miss range               | [0,inf)Z:Number       | 6         | 其他單位放棄追蹤的範圍 |
| unit found balloon            | [1,inf)Z:Number       | 1         | 其他單位發現目標時的心情符號 |
| unit miss balloon             | [1,inf)Z:Number       | 8         | 其他單位放棄追蹤時的心情符號 |
| track rate                    | [0, 1]R:Number        | 0.2       | 追蹤時隨機移動的機率 |

## 參考值
### default move
| 數值 | 說明 |
|:----------|:----|
| stand     | 站立不動 |
| random    | 隨機移動 |


# 插件指令

    TrackMove tag <tag>                  //設定本單位的標記
    TrackMove track <tag>                //設定要追蹤的標記
    TrackMove visionRange <range>        //設定視野的範圍
    TrackMove missRange <range>          //設定放棄追蹤的範圍
    TrackMove foundBalloon <balloon_id>  //設定發現目標時的心情符號
    TrackMove missBalloon <balloon_id>   //設定放棄追蹤時的心情符號
    TrackMove defaultMove <move>         //設定無目標時的移動模式

# 腳本指令
於自定義移動的腳本：

    this.track();                        //追蹤目標
    this.miss();                         //強制放棄追蹤

# 其他細節
| 單位 | 透明 | 暫時消除 |
|:---------:|:----:|:----:|
| player    | 追蹤目標(X)、被追蹤(O) | 主角不會被暫時消除 |
| follower  | 追蹤目標(X)、被追蹤(X) | 跟隨者不會被暫時消除 |
| event     | 追蹤目標(O)、被追蹤(O) | 追蹤目標(X)、被追蹤(X) |
