# 砍树升级游戏

## 简介

这个项目主要用于记录并学习，从一个web后端偏全栈的开发，如何学习并转游戏开发一个记录项目，
同时刚好无聊的时候玩了一个三七互娱的微信小游戏-寻道三千，所以直接以这个游戏参考，使用 [ioGame网络游戏服务器框架](https://www.yuque.com/iohao/game)
来开发服务端

客户端目前还没有想好怎么写，前期就先拿websocket 协议来调试，后面再具体选型做

## 项目结构

看了ioGame的文档，基本上就是按照文档来做，还不是很清楚各个组件的职责，所以先all in 在一个项目模块中，
后面再分模块来写

推荐看一下 https://www.yuque.com/iohao/game/gpzmc8vadn4vl70z 这篇，直接采用spring 的方式来接入 这样理解成本更低一些：

对应关系：

controller -> action

所以为了方便理解，后续的action将延续mvc的命名和分包方式：以controller结尾
，同时准守[官方推荐规范](https://www.yuque.com/iohao/game/keyrxn)

```
├── README.md

```

## 规划&进度

- [√] 项目搭建&计划,收发消息正常debug，启动，[路由控制](https://www.yuque.com/iohao/game/nap5y8p5fevhv99y)
- [x] 完成基本的用户登录注册
- [x] 完成基本的用户信息存储
- [x] 完成基本的用户信息查询
- [x] 区服信息
- [x] 人物属性模块
- [x] 等级经验模块
- [x] 装备属性模块
- [x] 主线任务模块
- [x] 仙玉、灵石、仙桃、宝石、武器、防具、道具等模块
- [x] 道具模块
- [x] 战斗模块
- [x] 商店模块
- [x] 邮件模块
- [x] 公告模块
- [x] 排行榜模块
- [x] 排行榜模块
- [x] 。。。
- [x] 客户端

## 参考

- [ioGame网络游戏服务器框架](https://www.yuque.com/iohao/game)
- [websocket 协议在线测试](https://www.wetools.com/websocket)
