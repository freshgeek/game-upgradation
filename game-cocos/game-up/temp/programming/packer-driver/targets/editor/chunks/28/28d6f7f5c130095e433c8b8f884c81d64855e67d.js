System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SocketClient, encodeExternalMessage, CmdMgr, HandleMgr, hashFun, LogUtils, RequestCommand, _crd;

  function _reportPossibleCrUseOfISocket(extras) {
    _reporterNs.report("ISocket", "db://assets/iogame/ISocket", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSocketClient(extras) {
    _reporterNs.report("SocketClient", "db://assets/iogame/SocketClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencodeExternalMessage(extras) {
    _reporterNs.report("encodeExternalMessage", "db://assets/iogame/pb/ExternalMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCmdMgr(extras) {
    _reporterNs.report("CmdMgr", "db://assets/iogame/cmd/CmdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHandleMgr(extras) {
    _reporterNs.report("HandleMgr", "db://assets/iogame/HandleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfhashFun(extras) {
    _reporterNs.report("hashFun", "db://assets/iogame/HashUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtils(extras) {
    _reporterNs.report("LogUtils", "db://assets/iogame/LogUtils", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SocketClient = _unresolved_2.default;
    }, function (_unresolved_3) {
      encodeExternalMessage = _unresolved_3.encodeExternalMessage;
    }, function (_unresolved_4) {
      CmdMgr = _unresolved_4.default;
    }, function (_unresolved_5) {
      HandleMgr = _unresolved_5.default;
    }, function (_unresolved_6) {
      hashFun = _unresolved_6.hashFun;
    }, function (_unresolved_7) {
      LogUtils = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "710dcvb3xdEhYr48msVTIBz", "RequestCommand", undefined);

      _export("default", RequestCommand = class RequestCommand {
        static init(client) {
          this.SC = client;
        }

        constructor(mainCmdCode, subCmdCode, data, callback) {
          this.title = "RequestCommand";
          this.mainCmdCode = 0;
          this.subCmdCode = 0;
          this.data = null;
          this.callback = null;
          this.mainCmdCode = mainCmdCode;
          this.subCmdCode = subCmdCode;
          this.data = data;
          this.callback = callback;
        }

        execute() {
          // 执行
          let mergeCmd = (_crd && CmdMgr === void 0 ? (_reportPossibleCrUseOfCmdMgr({
            error: Error()
          }), CmdMgr) : CmdMgr).getMergeCmd(this.mainCmdCode, this.subCmdCode);
          let callHash = (_crd && hashFun === void 0 ? (_reportPossibleCrUseOfhashFun({
            error: Error()
          }), hashFun) : hashFun)(this.callback);
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("callHash", callHash);
          (_crd && HandleMgr === void 0 ? (_reportPossibleCrUseOfHandleMgr({
            error: Error()
          }), HandleMgr) : HandleMgr).addHandler(mergeCmd, this.callback);
          let msg = {
            cmdCode: 1,
            protocolSwitch: 0,
            cmdMerge: mergeCmd,
            responseStatus: 0,
            validMsg: "",
            msgId: callHash,
            data: this.data()
          };
          (_crd && SocketClient === void 0 ? (_reportPossibleCrUseOfSocketClient({
            error: Error()
          }), SocketClient) : SocketClient).ins.send((_crd && encodeExternalMessage === void 0 ? (_reportPossibleCrUseOfencodeExternalMessage({
            error: Error()
          }), encodeExternalMessage) : encodeExternalMessage)(msg));
        }

      });

      // 多实例方式，避免连多个问题
      RequestCommand.SC = null;
      RequestCommand.counter = 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=28d6f7f5c130095e433c8b8f884c81d64855e67d.js.map