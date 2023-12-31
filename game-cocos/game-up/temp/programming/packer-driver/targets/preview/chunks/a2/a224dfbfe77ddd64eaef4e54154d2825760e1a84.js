System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CmdMgr, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "952a64lk25GU4TpU08kHW7O", "CmdMgr", undefined);

      _export("default", CmdMgr = class CmdMgr {
        //获取cmd
        static getCmd(merge) {
          return merge >> 16;
        } //获取subCmd


        static getSubCmd(merge) {
          return merge & 0xFFFF;
        } //获取mergeCmd


        static getMergeCmd(cmd, subCmd) {
          return (cmd << 16) + subCmd;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a224dfbfe77ddd64eaef4e54154d2825760e1a84.js.map