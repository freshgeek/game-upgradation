System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CmdModule, _crd, UserCmdModule;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ca899TzDZHv5PlTR7j07G+", "CmdModule", undefined);

      _export("default", CmdModule = class CmdModule {});

      _export("UserCmdModule", UserCmdModule = /*#__PURE__*/function (UserCmdModule) {
        UserCmdModule[UserCmdModule["MAIN_CMD"] = 1] = "MAIN_CMD";
        UserCmdModule[UserCmdModule["LOGIN"] = 0] = "LOGIN";
        UserCmdModule[UserCmdModule["REGISTER"] = 1] = "REGISTER";
        UserCmdModule[UserCmdModule["GET_USER_INFO"] = 2] = "GET_USER_INFO";
        return UserCmdModule;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf980ef80e94d6fdbb2fee099444fb92502abeb8.js.map