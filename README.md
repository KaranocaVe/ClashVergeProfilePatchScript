# ClashVergeProfilePatchScript
一个js脚本，用于向Clash Verge(rev)的策略组中添加自动节点选择和均衡负载


复制粘贴main.js中的内容到“扩展脚本”中，对于任意形式的配置文件它都应当运作的很好。

- 无人值守的机器，使用自动选择可以使它永远在线
- 从多个墙外网站同时拉取信息请使用均衡负载-散列
- 从单一网站大量拉取信息请使用均衡负载-轮询
