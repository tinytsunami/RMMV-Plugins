# RMMV Plugins
There are plugins on RPG Maker MV.

# List
| Name | Version | Update | Description |
|:------------------|:------|:----------|:-------------------|
| ARPG              | v1.0  | 2017.7.30 | Battle on the map |
| Camera            | v1.0  | 2017.7.23 | Simplify zoom and move screen |
| FollowerMove      | v1.0  | 2017.7.30 | Adjust number of follower |
| MaxBattleMembers  | v1.0  | 2017.7.30 | Adjust maximum battle members |
| Speed             | v1.0  | 2017.7.30 | Breaking event move speed limit |
| TrackMove         | v1.0  | 2017.7.30 | Add track event/player move mode |
| WeaponPaperDoll   | v1.0  | 2017.7.30 | Show weapon on the map |
| MusicGame         | v1.2  | 2020.1.9  | Music game |

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
