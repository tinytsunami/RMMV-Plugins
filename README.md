# RMMV Plugins
There are plugins on RPG Maker MV.

\* Notice! Now branch is develop, ALL plugins unpublish are unstable!

# List
| Name | Version | Update | Description |
|:------------------|:------|:----------|:-------------------|
| DialogBox             | beta | 2020.8.19 | Floating message window |
| Filter                | beta | 2020.8.19 | Simplify use PIXI.js filters |
| ReinforcementLearning | beta | 2020.8.19 | AI test |
| SeenPlayer            | beta | 2020.8.19 | Event vision (could be block by building on map) |
| Shadow                | beta | 2020.8.19 | Make event/player have shadow |
| Tiles                 | beta | 2020.8.19 | Show tile in specific ranges by some color mask |
| TimeSystem            | beta | 2020.8.19 | Time system (may be combined with Shadow) |

# Notation
This is parameters of plugin:

    <description>（<range><set>:<type>）

## Examples
| Notation | Description | 
|:--------------------------|:---------------------------------------------------------------|
| [0, 5]R:Number            | All real numbers from 0 to 5 (include 0 and 5) |
| (2, 3]R:Number            | All real numbers from 2 to 3 (include 3, but exclude 2) |
| [0, inf)Z:Number          | All integers numbers from 0 (include) to positive infinity, same as N set (natural numbers) |
| [0, 1]Z:Boolean           | All integers numbers from 0 to 1 (include both), so it only have 0 and 1 |
| CSS format(color):String  | Color code with CSS format |
| Refer to help:String      | String, refer to help of this plugin |
| Json:File                 | Filename (location), type is json |
| Image:File                | Filename (location), type is image with RMMV support |
