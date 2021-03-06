# 簡介

羊羽系遊戲插件整合包。包含：

* 遊戲基本設定
* 主畫面設定
* 畫面濾鏡
* 雲團效果
* 時間系統
* 鏡頭系統
* 浮動對話框

# 插件參數

## 基本設定類

| 名稱 | 預設值 |
|:----|:--|
| 啟用滑鼠操作 | true |
| 自定義滑鼠圖標 | |
| 方向鍵改成 WSAD | false |
| 設定動畫幀率 | 15 |
| 啟用按住確認鍵快進 | true |
| 啟用自動全螢幕 | false |
| 使用顯示訊息音效 | |

## 主畫面設定類

| 名稱 | 預設值 |
|:----|:--|
| 設定跳過主畫面 | None |
| 主畫面視窗 X 座標 | 213 |
| 主畫面視窗 Y 座標 | 240 |
| 主畫面顯示「繼續」 | true |
| 有存檔才顯示「繼續」 | false |
| 主畫面顯示「選項」 | true |

## 畫面濾鏡類（綜合調整）

| 名稱 | 預設值 |
|:----|:--|
| 啟用畫面綜合調整 | true |
| 畫面明度 | 0.8 |
| 畫面飽和度 | 0.8 |
| 畫面對比度 | 1.6 |
| 畫面亮度 | 1 |
| 紅色通道增益 | 0.95 |
| 綠色通道增益 | 0.95 |
| 藍色通道增益 | 1.05 |

## 畫面濾鏡類（分裂三色通道）

| 名稱 | 預設值 |
|:----|:--|
| 啟用分裂三色通道效果 | false |
| 分裂強度 | 1 |

## 畫面濾鏡類（地圖邊緣模糊）

| 名稱 | 預設值 |
|:----|:--|
| 啟用地圖邊緣模糊效果 | false |
| 模糊強度 | 2 |
| 模糊邊緣的範圍 | 100 |

## 畫面濾鏡類（映像管螢幕效果）

| 名稱 | 預設值 |
|:----|:--|
| 啟用映像管螢幕效果 | false |
| 掃描線曲率 | 1.0 |
| 掃描線寬度 | 1.0 |
| 掃描線對比度 | 0.25 |
| 使用垂直掃描線 | false |
| 噪聲強度 | 0.3 |
| 噪聲顆粒大小 | 1.0 |
| 躁聲種子 | 0 |
| 暈影效果半徑 | 0.1 |
| 暈影效果不透明度 | 1.0 |
| 暈影效果模糊程度 | 0.3 |
| 掃描線動畫速度 | 0 |

## 畫面濾鏡類（像素化效果）

| 名稱 | 預設值 |
|:----|:--|
| 啟用像素化效果 | false |
| 像素化大小 | 10 |

## 畫面濾鏡類（ASCII效果）

| 名稱 | 預設值 |
|:----|:--|
| 啟用 ASCII 效果 | false |
| ASCII 化大小 | 8 |

## 雲團效果類

| 名稱 | 預設值 |
|:----|:--|
| 啟用雲團效果 | true |
| 自定義雲片素材集* | [] |
| 雲團啟用的開關 | 無 |
| 雲團的數量 | 20 |
| 雲團的寬度 | 512 |
| 雲團的長度 | 256 |
| 雲團最少的雲片數量 | 11 |
| 雲團最多的雲片數量 | 30 |
| 雲團移動的最小速度 | -0.05 |
| 雲團移動的最大速度 | -0.10 |

\* *自定義雲片素材集為空，代表使用系統自動預設的雲片。*

## 時間系統類

| 名稱 | 預設值 |
|:----|:--|
| 啟用時間系統 | true |
| 儲存時間的變數 [1] | 無 |
| 暫停時間的開關 | 無 |
| 顯示時鐘的開關 | 無 |
| 遊戲分鐘佔幾個幀 [2] | 15 |
| 啟用影子效果 | true |
| 定義時間色調 | [3] |

[1] 儲存時間的變數僅能讀取（Readonly）。若不提供，則無法讀取。

[2] 預設遊戲分鐘佔 15 幀，代表現實每 1 秒，遊戲中度過 4 分鐘。

[3] 預設時間定義色調請看下一節。

### 預設時間定義色調

預設時間分為三大階段：

* 黎明（04:00-06:00）
* 中午（11:00-13:00）
* 黃昏（16:00-18:00）

| 時刻 | 紅 | 綠 | 藍 | 灰度 | 過渡 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 4 | -96 | -64 | -32 | 128 | 60 |
| 5 | -32 | -32 | -8 | 32 | 60 |
| 6 | 0 | 0 | 0 | 16 | 60 |
| 11 | 32 | 32 | 16 | 16 | 60 |
| 12 | 32 | 32 | 16 | 32 | 60 |
| 13 | 8 | 0 | 0 | 16 | 60 |
| 16 | 48 | -32 | -96 | 16 | 60 |
| 17 | 16 | -64 | -96 | 16 | 60 |
| 18 | -96 | -96 | -96 | 96 | 60 |

根據不同的需求，可以設定不同的時間。

### 定義時間色調格式

| 名稱 | 預設值 |
|:----|:--|
| 時刻（24小時制） | 0 |
| 紅色強度 | 0 |
| 綠色強度 | 0 |
| 藍色強度 | 0 |
| 灰度 | 0 |
| 過渡時間（遊戲分鐘） | 60 |

## 強化天氣系統

| 名稱 | 預設值 |
|:----|:--|
| 啟用強化天氣系統 | true |

## 鏡頭系統

| 名稱 | 預設值 |
|:----|:--|
| 啟用鏡頭系統 | true |
| 鏡頭震盪類型 | Horizontal |

## 浮動對話框

| 名稱 | 預設值 |
|:----|:--|
| 啟用浮動對話框 | true |
| 設定字體大小 | 24 |
| 設定字體顏色 | #FFFFFF |
| 設定字體邊框寬度 | 1 |
| 設定字體邊框顏色 | #333333 |
| 設定視窗內邊距 | 16 |
| 設定背景透明度 | 192 |
| 設定視窗展開方向 | Horizontal |
| 設定視窗開關速度 | 6 |
| 設定開啟閾值 | 64 |
| 設定關閉閾值 | 32 |

# 插件指令

## 進階除錯模式
 - F10：遊戲減速一半
 - F11：遊戲加速一倍 

## 時間事件指令

```
 // 設定目前的時間（24小時制）
 Time set <h>:<m>
```

## 鏡頭事件指令
```
 //鏡頭模仿電影比例（2.35:1）
 Camera story

 //鏡頭恢復遊戲狀態（原比例）
 Camera game 

 //鏡頭關注到指定編號的事件（id=0時為該事件）
 Camera focus event <id> <zoom> <duration> 

 //鏡頭關注到指定編號的事件
 Camera focus player <zoom> <duration>

 //復原鏡頭狀態
 Camera clear <duration>
```