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
        static log(message) {
          if (!this.isDebug) return;

          for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            optionalParams[_key - 1] = arguments[_key];
          }

          console.log(message, ...optionalParams);
        }

        static info(message) {
          if (!this.isInfo) return;

          for (var _len2 = arguments.length, optionalParams = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            optionalParams[_key2 - 1] = arguments[_key2];
          }

          console.info(message, ...optionalParams);
        }

        static warn(message) {
          if (!this.isWarn) return;

          for (var _len3 = arguments.length, optionalParams = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
            optionalParams[_key3 - 1] = arguments[_key3];
          }

          console.warn(message, ...optionalParams);
        }

        static error(message) {
          if (!this.isError) return;

          for (var _len4 = arguments.length, optionalParams = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
            optionalParams[_key4 - 1] = arguments[_key4];
          }

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