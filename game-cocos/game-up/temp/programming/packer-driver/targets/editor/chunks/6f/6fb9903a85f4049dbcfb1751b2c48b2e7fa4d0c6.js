System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, ErrorCode, _crd;

  _export("ErrorCode", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3d542uGJshOgIAVk0UZB7DV", "ErrorCode", undefined);

      _export("ErrorCode", ErrorCode = class ErrorCode {});

      ErrorCode.OK = 0;
      ErrorCode.ERROR = -1;
      ErrorCode.ERROR_NOT_INIT = -2;
      ErrorCode.ERROR_NOT_LOGIN = -3;
      ErrorCode.ERROR_NOT_REGISTER = -4;
      ErrorCode.ERROR_NOT_VERIFY = -5;
      ErrorCode.ERROR_NOT_FIND_USER = -6;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fb9903a85f4049dbcfb1751b2c48b2e7fa4d0c6.js.map