System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, SysConfig, _crd, ccclass, property;

  _export("SysConfig", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1daeegD0bVM64GlFInGS8eC", "SysConfig", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = SysConfig
       * DateTime = Thu Jan 13 2022 13:40:45 GMT+0800 (中国标准时间)
       * Author = 孟凡雷
       * FileBasename = SysConfig.ts
       * FileBasenameNoExtension = SysConfig
       * URL = db://assets/script/data/SysConfig.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("SysConfig", SysConfig = class SysConfig {});
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */


      SysConfig.wsUrl = "ws://192.168.31.15:10100/websocket";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7b76bfb0c396e8c2cd582c4dda2822042a9bc7f7.js.map