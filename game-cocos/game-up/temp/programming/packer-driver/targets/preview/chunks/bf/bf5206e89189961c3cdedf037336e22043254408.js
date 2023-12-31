System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, resources, instantiate, isValid, assetManager, AssetUtils, _crd, ccclass, property;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      resources = _cc.resources;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c59faDc7gBIxq0zJFNEPnPj", "AssetUtils", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'resources', 'Asset', 'Prefab', 'instantiate', 'isValid', 'assetManager', 'ImageAsset']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = AssetUtils
       * DateTime = Fri Dec 24 2021 21:25:35 GMT+0800 (中国标准时间)
       * Author = 孟凡雷
       * FileBasename = AssetUtils.ts
       * FileBasenameNoExtension = AssetUtils
       * URL = db://assets/script/utils/AssetUtils.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/zh/
       *
       */

      _export("default", AssetUtils = class AssetUtils {
        /**加载远程图片 */
        static loadRemotePic(url) {
          return new Promise(resolve => {
            assetManager.loadRemote(url, (err, res) => {
              resolve(err ? null : res);
            });
          });
        }
        /** 加载res资源 */


        static loadResSync(url, type, onProgress) {
          return new Promise(resolve => {
            resources.load(url, type, onProgress, (err, asset) => {
              if (err) {
                // LogUtils.log(err)
                resolve(null);
              } else {
                // LogUtils.log(asset)
                resolve(asset);
                this.addRef(asset);
              }
            });
          });
        }
        /**实例化动态预制体*/


        static cloneResSync(prefab) {
          return new Promise(resolve => {
            var node = null;

            if (isValid(prefab)) {
              node = instantiate(prefab); // this.releaseAsset(prefab);
            }

            resolve(node);
          });
        }
        /** 释放资源 */


        static releaseAsset(assets) {
          if (typeof assets == "string") {
            assets = resources.get(assets);
          }

          this.decRes(assets);
        }
        /** 增加引用计数 */


        static addRef(assets) {
          if (assets instanceof Array) {
            for (var a of assets) {
              a.addRef();
            }
          } else {
            assets.addRef();
          }
        }
        /** 减少引用计数, 当引用计数减少到0时,会自动销毁 */


        static decRes(assets) {
          if (assets instanceof Array) {
            for (var a of assets) {
              a.decRef();
            }
          } else {
            assets.decRef();
          }
        }

      });
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/zh/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/zh/scripting/ccclass.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/zh/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bf5206e89189961c3cdedf037336e22043254408.js.map