System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, LogUtils, _crd, ccclass, property;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7274dnQEHZDFbcmFByIOseT", "LogUtils", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = LogUtils
       * DateTime = Sat Nov 13 2021 21:45:49 GMT+0800 (中国标准时间)
       * Author = 孟凡雷
       * FileBasename = LogUtils.ts
       * FileBasenameNoExtension = LogUtils
       * URL = db://assets/script/utils/LogUtils.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */

      _export("default", LogUtils = class LogUtils {
        static log(message, ...optionalParams) {
          if (!this.isDebug) return;
          console.log(message, ...optionalParams);
        }

        static info(message, ...optionalParams) {
          if (!this.isInfo) return;
          console.info(message, ...optionalParams);
        }

        static warn(message, ...optionalParams) {
          if (!this.isWarn) return;
          console.warn(message, ...optionalParams);
        }

        static error(message, ...optionalParams) {
          if (!this.isError) return;
          console.error(message, ...optionalParams);
        }

      });
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.3/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.3/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.3/manual/zh/scripting/life-cycle-callbacks.html
       */


      LogUtils.isDebug = true;
      LogUtils.isInfo = true;
      LogUtils.isWarn = true;
      LogUtils.isError = true;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5f1ecc771dd66ae09a3da69b2a831aa44e9f3693.js.map