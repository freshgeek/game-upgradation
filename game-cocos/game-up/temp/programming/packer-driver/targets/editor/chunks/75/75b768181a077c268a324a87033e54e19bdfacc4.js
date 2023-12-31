System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LogUtils, decodeLoginRsp, LoginVerifyHandler, _crd;

  function _reportPossibleCrUseOfLogUtils(extras) {
    _reporterNs.report("LogUtils", "./LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdecodeLoginRsp(extras) {
    _reporterNs.report("decodeLoginRsp", "./pb/user/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIHandler(extras) {
    _reporterNs.report("IHandler", "./IHandler", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LogUtils = _unresolved_2.default;
    }, function (_unresolved_3) {
      decodeLoginRsp = _unresolved_3.decodeLoginRsp;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c440TP1IRA7JlFT2VjPfC9", "LoginVerifyHandler", undefined);

      _export("default", LoginVerifyHandler = class LoginVerifyHandler {
        execute(data) {
          let r_msg = (_crd && decodeLoginRsp === void 0 ? (_reportPossibleCrUseOfdecodeLoginRsp({
            error: Error()
          }), decodeLoginRsp) : decodeLoginRsp)(data);
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("LoginVerifyHandler", r_msg);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=75b768181a077c268a324a87033e54e19bdfacc4.js.map