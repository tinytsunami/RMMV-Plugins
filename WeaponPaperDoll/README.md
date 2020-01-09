# 簡介
地圖上可以顯示裝備武器。

# 插件參數
| 名稱 | 型別 | 預設值 | 說明 |
|:--------------------------|:------------------|:------|:----|
| icon width                | [1, inf)Z:Number  | 32    | 設定圖標的寬度 |
| icon height               | [1, inf)Z:Number  | 32    | 設定圖標的高度 |
| weapon anchor x           | [0, 1]R:Number    | 0.875 | 武器的旋轉的橫向固定點 |
| weapon anchor y           | [0, 1]R:Number    | 0.875 | 武器的旋轉的縱向固定點 |
| weapon rotaion            | [0, 360]Z:Number  | -30   | 武器圖示的旋轉角度 |
| weapon sprite shift x     | [0, inf)Z:Number  | -5    | 武器精靈的橫向偏移量 |
| weapon sprite shift y     | [0, inf)Z:Number  | -20   | 武器精靈的縱向偏移量 |
| weapon animation speed    | [0, inf)Z:Number  | 60    | 武器動畫週期的幀數 |
| weapon animation range x  | [0, inf)Z:Number  | 1     | 武器動畫的橫向範圍 |
| weapon animation range y  | [0, inf)Z:Number  | 2     | 武器動畫的縱向範圍 |


# 插件指令

    WeaponPaperDoll set <weaponId> //為事件設定武器
 