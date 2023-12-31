System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LoginVerifyHandler, HandleMgr, UserCmdModule, RegisterMgr, _crd;

  function _reportPossibleCrUseOfLoginVerifyHandler(extras) {
    _reporterNs.report("LoginVerifyHandler", "./LoginVerifyHandler", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHandleMgr(extras) {
    _reporterNs.report("HandleMgr", "./HandleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserCmdModule(extras) {
    _reporterNs.report("UserCmdModule", "./cmd/CmdModule", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LoginVerifyHandler = _unresolved_2.default;
    }, function (_unresolved_3) {
      HandleMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      UserCmdModule = _unresolved_4.UserCmdModule;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b39d4vmu61FfbfcmKASLYeT", "RegisterMgr", undefined);

      _export("default", RegisterMgr = class RegisterMgr {
        static get ins() {
          if (!this._ins) this._ins = new RegisterMgr();
          return this._ins;
        } //注册协议


        registCmd() {
          (_crd && HandleMgr === void 0 ? (_reportPossibleCrUseOfHandleMgr({
            error: Error()
          }), HandleMgr) : HandleMgr).addHandler((_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
            error: Error()
          }), UserCmdModule) : UserCmdModule).MAIN_CMD, (_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
            error: Error()
          }), UserCmdModule) : UserCmdModule).LOGIN, new (_crd && LoginVerifyHandler === void 0 ? (_reportPossibleCrUseOfLoginVerifyHandler({
            error: Error()
          }), LoginVerifyHandler) : LoginVerifyHandler)());
        }

      });

      RegisterMgr._ins = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=831e0928694aabd776e734c3f29c556431c9b559.js.map