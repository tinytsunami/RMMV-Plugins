# 簡介
速度破限與值修改。

# 插件參數
| 名稱 | 型別 | 預設值 | 說明 |
|:----------------------|:-----------------|:-------|:----|
| player speed          | (0, inf)Z:Number | 16     | 玩家速度 |
| player dash speed     | (0, inf)Z:Number | 32     | 玩家跑步時的速度 |
| dash transition       | [0, inf)Z:Number | 0      | 玩家跑步至極速的過渡幀數 |
| max speed             | (0, inf)Z:Number | 128    | 允許的最高速度 |
| min speed             | (0, inf)Z:Number | 2      | 允許的最低速度 |


# 插件指令

    Speed set <speed> //設定事件的速度值

# 其他細節
速度的的值為 X 的話。

每 1 幀的時間，可移動的距離為 (X/256) 格；  
走 1 格的距離，需要花的幀數為 (256/X) 幀。

幀數的單位為 (1/60) 秒。

所以，走 1 格的距離，共需要 (256/X) * (1/60) 秒。
