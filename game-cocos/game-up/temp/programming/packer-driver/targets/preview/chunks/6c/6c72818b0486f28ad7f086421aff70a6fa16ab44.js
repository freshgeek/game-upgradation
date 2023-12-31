System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, SysConfig, HandleMgr, LogUtils, decodeExternalMessage, SocketClient, _crd;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfSysConfig(extras) {
    _reporterNs.report("SysConfig", "./SysConfig", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHandleMgr(extras) {
    _reporterNs.report("HandleMgr", "./HandleMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLogUtils(extras) {
    _reporterNs.report("LogUtils", "./LogUtils", _context.meta, extras);
  }

  function _reportPossibleCrUseOfdecodeExternalMessage(extras) {
    _reporterNs.report("decodeExternalMessage", "./pb/ExternalMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfExternalMessage(extras) {
    _reporterNs.report("ExternalMessage", "./pb/ExternalMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfISocket(extras) {
    _reporterNs.report("ISocket", "./ISocket", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      SysConfig = _unresolved_2.SysConfig;
    }, function (_unresolved_3) {
      HandleMgr = _unresolved_3.default;
    }, function (_unresolved_4) {
      LogUtils = _unresolved_4.default;
    }, function (_unresolved_5) {
      decodeExternalMessage = _unresolved_5.decodeExternalMessage;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fc9a1anekxC9LOuMaeCUamP", "SocketClient", undefined);

      /**
       * Predefined variables
       * Name = SocketClient
       * DateTime = Sat Nov 27 2021 13:14:23 GMT+0800 (中国标准时间)
       * Author = 孟凡雷
       * FileBasename = SocketClient.ts
       * FileBasenameNoExtension = SocketClient
       * URL = db://assets/script/net/socket/SocketClient.ts
       * ManualUrl = https://docs.cocos.com/creator/3.3/manual/zh/
       *
       */
      _export("default", SocketClient = class SocketClient {
        constructor() {
          // private constructor() {
          // this.SocketState = this.SocketState_NoConnect;
          // this.webScoket = null;
          // }
          //Socket连接状态定义
          this.SocketState_NoConnect = 0;
          //没有连接
          this.SocketState_Connected = 1;
          //已经连接
          this.SocketState_Closing = 2;
          //正在关闭中
          this.SocketState_Closed = 3;
          //已经关闭
          this.SocketState = this.SocketState_NoConnect;
          this.webScoket = null;
          this.AUTO_CONNECT = null;
          this.recvBuf = void 0;
        }

        //获得实例对象
        static get ins() {
          return this._ins == null ? this._ins = new SocketClient() : this._ins;
        }

        //接收缓冲
        connect(ws) {
          var _this = this;

          return _asyncToGenerator(function* () {
            if (ws === void 0) {
              ws = (_crd && SysConfig === void 0 ? (_reportPossibleCrUseOfSysConfig({
                error: Error()
              }), SysConfig) : SysConfig).wsUrl;
            }

            (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
              error: Error()
            }), LogUtils) : LogUtils).log('已经启动了断开自动连接');

            if (!_this.webScoket) {
              // if (sys.isNative) {
              //     let cacert: Asset = await AssetUtils.loadResSync("ssl/cacert", Asset)
              //     let pemUrl = cacert.nativeUrl;
              //     // if (loader.md5Pipe) {
              //     //     pemUrl = loader.md5Pipe.transformURL(pemUrl);
              //     // }
              //     this.webScoket = new WebSocket(ws, pemUrl);
              // } else {
              _this.webScoket = new WebSocket(ws); // }
            }

            if (_this.SocketState != _this.SocketState_Connected) {
              _this.webScoket.binaryType = "arraybuffer";
              _this.webScoket.onclose = _this.onclose.bind(_this);
              _this.webScoket.onerror = _this.onerror.bind(_this);
              _this.webScoket.onmessage = _this.onmessage.bind(_this);
              _this.webScoket.onopen = _this.onopen.bind(_this);
            } else {
              _this.onopen(null);
            }
          })();
        }

        onopen(event) {
          this.SocketState = this.SocketState_Connected;
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("onopen", event);
        }

        checkAndAutoConnect() {
          if (!this.webScoket || this.webScoket.readyState !== this.SocketState_Connected) {
            // if (this.AUTO_CONNECT) {
            (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
              error: Error()
            }), LogUtils) : LogUtils).log('已经启动了断开自动连接'); // continue
            // }

            this.connect();
          } // if (this.AUTO_CONNECT) {
          //     clearInterval(this.AUTO_CONNECT)
          //     this.AUTO_CONNECT = null
          // }

        } //发送消息


        send(pbBuff) {
          this.checkAndAutoConnect();

          if (!pbBuff) {
            (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
              error: Error()
            }), LogUtils) : LogUtils).error("没有数据");
            return;
          }

          this.webScoket.send(pbBuff);
        }

        onmessage(event) {
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("onmessage", event);
          var recvData = new Uint8Array(event.data);
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("recvData", recvData);
          var data = (_crd && decodeExternalMessage === void 0 ? (_reportPossibleCrUseOfdecodeExternalMessage({
            error: Error()
          }), decodeExternalMessage) : decodeExternalMessage)(recvData);
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("data ", data);
          (_crd && HandleMgr === void 0 ? (_reportPossibleCrUseOfHandleMgr({
            error: Error()
          }), HandleMgr) : HandleMgr).packageHandler(data.cmdMerge, data);
        } //发送消息
        // public send(cmd: number, subCmd: number, pbBuff: Uint8Array, cmdCode: number = 1, protocolSwich: number = 0): void {
        //     if (this.webScoket && this.webScoket.readyState === this.SocketState_Connected) {
        //         if (!pbBuff) {
        //             pbBuff = new Uint8Array(0);
        //         }
        //         let ab = new ArrayBuffer(NetPackageHead.LENGTH + pbBuff.length);
        //         let dv = new DataView(ab);
        //         dv.setUint16(0, NetPackageHead.LENGTH + pbBuff.length, true);
        //         dv.setUint16(2, cmdCode, true);
        //         dv.setUint16(4, protocolSwich, true);
        //         dv.setUint32(5, CmdMgr.getMergeCmd(cmd, subCmd), true);
        //         dv.setUint16(9, 0, true);
        //         dv.setUint32(11, pbBuff.length, true);
        //         let tempUi8A = new Uint8Array(dv.buffer);
        //         tempUi8A.set(pbBuff, NetPackageHead.LENGTH);
        //         this.webScoket.send(tempUi8A);
        //     } else {
        //         //网络连接异常
        //         // this.connect();
        //     }
        // }
        // public onmessage(event: MessageEvent): void {
        //     LogUtils.log("onmessage", event)
        //     let recvData = new Uint8Array(<ArrayBuffer>event.data);
        //     if (this.recvBuf != null && this.recvBuf.byteLength > 0) {
        //         let allBuf = new Uint8Array(this.recvBuf.length + recvData.length);
        //         allBuf.set(this.recvBuf, 0);
        //         allBuf.set(recvData, this.recvBuf.length);
        //     } else {
        //         this.recvBuf = recvData;
        //     }
        //     //处理数据
        //     while (this.recvBuf.length >= NetPackageHead.LENGTH) {
        //         let packageHead = new NetPackageHead();
        //         packageHead.read(this.recvBuf);
        //         if (this.recvBuf.length >= NetPackageHead.LENGTH) {
        //             let netPackage = new NetPackage();
        //             this.recvBuf = netPackage.read(this.recvBuf);
        //             HandleMgr.packageHandler(CmdMgr.getCmd(netPackage.head.mergeCmd), CmdMgr.getSubCmd(netPackage.head.mergeCmd), netPackage.bodyBuff);
        //         }
        //     }
        // }
        //关闭close


        close() {
          if (this.webScoket) this.webScoket.close();
        }

        onclose(event) {
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("onclose", event);
          this.SocketState = this.SocketState_Closed;
        }

        onerror(event) {
          (_crd && LogUtils === void 0 ? (_reportPossibleCrUseOfLogUtils({
            error: Error()
          }), LogUtils) : LogUtils).log("onerror", event);
          this.SocketState = this.SocketState_Closed;
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


      SocketClient._ins = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6c72818b0486f28ad7f086421aff70a6fa16ab44.js.map