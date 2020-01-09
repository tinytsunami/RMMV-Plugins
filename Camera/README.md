# 簡介
簡單化對單位的縮放、平移畫面。

# 插件參數
| 名稱 | 型別 | 預設值 | 說明 |
|:----------|:------------------|:------|:----|
| zoom      | (0,2]R:Number     | 2     | 縮放畫面的比例大小 |
| duration  | [1,inf)R:Number   | 60    | 縮放到達指定比例所需要的幀數 |
| speed     | [1,6]Z:Number     | 5     | 平移畫面的速度 |

# 插件指令

    Camera focus event <event_id>      //關注事件（省略時為該事件）
    Camera focus player                //關注角色
    Camera clear                       //清除關注
    Camera setting initialize          //初始化更改
    Camera setting zoom <zoom>         //更改縮放大小
    Camera setting duration <duration> //更改縮放時間
    Camera setting speed <speed>       //更改畫面平移速度

