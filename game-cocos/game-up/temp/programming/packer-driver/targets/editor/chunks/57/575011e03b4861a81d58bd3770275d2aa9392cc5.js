System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Node, SocketClient, RequestCommand, UserCmdModule, encodeLoginReq, LogUtils, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, login;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfSocketClient(extras) {
    _reporterNs.report("SocketClient", "db://assets/iogame/SocketClient", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRequestCommand(extras) {
    _reporterNs.report("RequestCommand", "db://assets/iogame/RequestCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUserCmdModule(extras) {
    _reporterNs.report("UserCmdModule", "db://assets/iogame/cmd/CmdModule", _context.meta, extras);
  }

  function _reportPossibleCrUseOfencodeLoginReq(extras) {
    _reporterNs.report("encodeLoginReq", "db://assets/iogame/pb/user/User", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtils(extras) {
    _reporterNs.report("LogUtils", "db://assets/iogame/LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExternalMessage(extras) {
    _reporterNs.report("ExternalMessage", "db://assets/iogame/pb/ExternalMessage", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      SocketClient = _unresolved_2.default;
    }, function (_unresolved_3) {
      RequestCommand = _unresolved_3.default;
    }, function (_unresolved_4) {
      UserCmdModule = _unresolved_4.UserCmdModule;
    }, function (_unresolved_5) {
      encodeLoginReq = _unresolved_5.encodeLoginReq;
    }, function (_unresolved_6) {
      LogUtils = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d357dbukhtALZICQdrKVx+q", "login", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("login", login = (_dec = ccclass('login'), _dec2 = property(EditBox), _dec3 = property(EditBox), _dec(_class = (_class2 = class login extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "accountInput", _descriptor, this);

          this.account = '';

          _initializerDefineProperty(this, "passwordInput", _descriptor2, this);

          this.password = '';
        }

        start() {
          (_crd && SocketClient === void 0 ? (_reportPossibleCrUseOfSocketClient({
            error: Error()
          }), SocketClient) : SocketClient).ins.connect();
          (_crd && RequestCommand === void 0 ? (_reportPossibleCrUseOfRequestCommand({
            error: Error()
          }), RequestCommand) : RequestCommand).init((_crd && SocketClient === void 0 ? (_reportPossibleCrUseOfSocketClient({
            error: Error()
          }), SocketClient) : SocketClient).ins);
          this.accountInput.node.on('editing-did-ended', editbox => {
            this.account = editbox.string;
          }, this);
          this.passwordInput.node.on('editing-did-ended', editbox => {
            this.password = editbox.string;
          }, this); // 登录按钮

          this.node.on(Node.EventType.MOUSE_DOWN, this.loginHandler, this);
          this.node.on(Node.EventType.TOUCH_START, this.loginHandler, this);
        }

        loginHandler(event) {
          if (this.account && this.password) {
            (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
              error: Error()
            }), LogUtils) : LogUtils).info(`登录：${this.account} + ${this.password}`);
            new (_crd && RequestCommand === void 0 ? (_reportPossibleCrUseOfRequestCommand({
              error: Error()
            }), RequestCommand) : RequestCommand)((_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
              error: Error()
            }), UserCmdModule) : UserCmdModule).MAIN_CMD, (_crd && UserCmdModule === void 0 ? (_reportPossibleCrUseOfUserCmdModule({
              error: Error()
            }), UserCmdModule) : UserCmdModule).LOGIN, () => {
              return (_crd && encodeLoginReq === void 0 ? (_reportPossibleCrUseOfencodeLoginReq({
                error: Error()
              }), encodeLoginReq) : encodeLoginReq)({
                name: this.account,
                password: this.password
              });
            }, res => {
              (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
                error: Error()
              }), LogUtils) : LogUtils).log(res);

              if (res.responseStatus === 0) {
                (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
                  error: Error()
                }), LogUtils) : LogUtils).info('登录成功');
              } else {
                (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
                  error: Error()
                }), LogUtils) : LogUtils).warn('登录失败', res.responseStatus);
              }
            }).execute();
          }
        }

        onLoad() {
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log('onload');
        }

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "accountInput", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "passwordInput", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=575011e03b4861a81d58bd3770275d2aa9392cc5.js.map