System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, UserCmdModule, encodeLoginReq, encodeExternalMessage, SocketClient, CmdMgr, SendMgr, _crd;

  function _reportPossibleCrUseOfUserCmdModule(extras) {
    _reporterNs.report("UserCmdModule", "./cmd/CmdModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencodeLoginReq(extras) {
    _reporterNs.report("encodeLoginReq", "./pb/user/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoginReq(extras) {
    _reporterNs.report("LoginReq", "./pb/user/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencodeExternalMessage(extras) {
    _reporterNs.report("encodeExternalMessage", "./pb/ExternalMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketClient(extras) {
    _reporterNs.report("SocketClient", "./SocketClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCmdMgr(extras) {
    _reporterNs.report("CmdMgr", "./cmd/CmdMgr", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      UserCmdModule = _unresolved_2.UserCmdModule;
    }, function (_unresolved_3) {
      encodeLoginReq = _unresolved_3.encodeLoginReq;
    }, function (_unresolved_4) {
      encodeExternalMessage = _unresolved_4.encodeExternalMessage;
    }, function (_unresolved_5) {
      SocketClient = _unresolved_5.default;
    }, function (_unresolved_6) {
      CmdMgr = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d56f89pVqVE35HmtPcxzShD", "SendMgr", undefined);

      _export("default", SendMgr = class SendMgr {
        static LoginVerify(data) {
          if (data === void 0) {
            data = null;
          }

          var msg = (_crd && encodeLoginReq === void 0 ? (_reportPossibleCrUseOfencodeLoginReq({
            error: Error()
          }), encodeLoginReq) : encodeLoginReq)(data);
          this.send((_crd && CmdMgr === void 0 ? (_reportPossibleCrUseOfCmdMgr({
            error: Error()
          }), CmdMgr) : CmdMgr).getMergeCmd((_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
            error: Error()
          }), UserCmdModule) : UserCmdModule).MAIN_CMD, (_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
            error: Error()
          }), UserCmdModule) : UserCmdModule).LOGIN), msg);
        }

        static send(mergeCmd, data, cmdCode, protocolSwitch) {
          if (cmdCode === void 0) {
            cmdCode = 1;
          }

          if (protocolSwitch === void 0) {
            protocolSwitch = 0;
          }

          var msg = {
            cmdCode: cmdCode,
            protocolSwitch: protocolSwitch,
            cmdMerge: mergeCmd,
            responseStatus: 0,
            validMsg: "",
            data: data
          };
          (_crd && SocketClient === void 0 ? (_reportPossibleCrUseOfSocketClient({
            error: Error()
          }), SocketClient) : SocketClient).ins.send((_crd && encodeExternalMessage === void 0 ? (_reportPossibleCrUseOfencodeExternalMessage({
            error: Error()
          }), encodeExternalMessage) : encodeExternalMessage)(msg));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=48bbabbb38e5a5501940fc49e7cb06d21598bc4e.js.map