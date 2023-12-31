System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, hashFun, CmdMgr, LogUtils, HandleMgr, _crd;

  function _reportPossibleCrUseOfhashFun(extras) {
    _reporterNs.report("hashFun", "db://assets/iogame/HashUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCmdMgr(extras) {
    _reporterNs.report("CmdMgr", "db://assets/iogame/cmd/CmdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExternalMessage(extras) {
    _reporterNs.report("ExternalMessage", "db://assets/iogame/pb/ExternalMessage", _context.meta, extras);
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
      hashFun = _unresolved_2.hashFun;
    }, function (_unresolved_3) {
      CmdMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      LogUtils = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f2eb21dw2NEV46ifpP2LB6p", "HandleMgr", undefined);

      _export("default", HandleMgr = class HandleMgr {
        static init() {}
        /**注册回调*/


        static addHandler(cmdMerge, handler) {
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log('add', cmdMerge + "_" + (_crd && hashFun === void 0 ? (_reportPossibleCrUseOfhashFun({
            error: Error()
          }), hashFun) : hashFun)(handler));
          if (HandleMgr.handlers[cmdMerge + "_" + (_crd && hashFun === void 0 ? (_reportPossibleCrUseOfhashFun({
            error: Error()
          }), hashFun) : hashFun)(handler)] == undefined) HandleMgr.handlers[cmdMerge + "_" + (_crd && hashFun === void 0 ? (_reportPossibleCrUseOfhashFun({
            error: Error()
          }), hashFun) : hashFun)(handler)] = handler;
        }
        /**获取回调接口*/


        static getHandler(cmdMerge, funHash) {
          var handler;
          if (HandleMgr.handlers[cmdMerge + "_" + funHash]) handler = HandleMgr.handlers[cmdMerge + "_" + funHash];

          if (handler == null) {
            console.error("cmd handler is null,请检查是否回调异常", (_crd && CmdMgr === void 0 ? (_reportPossibleCrUseOfCmdMgr({
              error: Error()
            }), CmdMgr) : CmdMgr).getCmd(cmdMerge), (_crd && CmdMgr === void 0 ? (_reportPossibleCrUseOfCmdMgr({
              error: Error()
            }), CmdMgr) : CmdMgr).getSubCmd(cmdMerge), funHash);
          }

          return handler;
        } //消息分发


        static packageHandler(cmdMerge, data) {
          var handler = this.getHandler(cmdMerge, data.msgId);
          if (handler) handler(data);
        }

      });

      HandleMgr.handlers = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5c0be38cfe39480f72cd539b17feca3b3abcc75.js.map