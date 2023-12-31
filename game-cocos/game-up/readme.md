
# 集成说明

开始本来打算拿h5写，以为游戏就是一堆图片组成，发现h5根本做不了，只能接触游戏设计引擎：cocos、unity这些

然后看cocos 是JavaScript支持的，觉得应该简单，发现入坑后官方提供的入门视频压根看不懂，推荐看：https://www.bilibili.com/video/BV14i4y1o7YF?p=2 这个up的入个门；
然后看官方文档搜索找，需要注意版本兼容，视频是2d版本，很多可能不兼容，需要自己找一下新版的写法


本项目采用的版本是3.8.1 

# 连接服务器

## 安装pbjs

```bash
npm install -g pbjs
```

## 编译协议文件
由后端提供，https://www.yuque.com/iohao/game/vpe2t6 ， 然后生成ts文件，客户端调用ts文件

```bash
 pbjs ExternalMessage.proto --ts ExternalMessage.ts 
 pbjs user/User.proto --ts user/User.ts 
```

## 协议pb 生成

com.iohao.game.external.core.message.ExternalMessage 

## 封装sdk 
使用回调函数hash生成唯一msgId，作为回调映射handler，RequestCommand.ts 

## 
