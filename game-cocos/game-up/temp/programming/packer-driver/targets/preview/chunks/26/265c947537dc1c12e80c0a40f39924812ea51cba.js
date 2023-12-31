System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd;

  function hashFun(handler) {
    var callbackString = handler.toString(); // 将回调函数转换为字符串形式
    // 这里可以根据需要选择不同的算法进行哈希处理，比如MD5、SHA1等

    function hashCode(str) {
      var hash = 0;
      if (str.length === 0) return hash;

      for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        hash = (hash << 5) - hash + char | 0;
      }

      return hash;
    } // 对字符串进行哈希处理并转换为字符串类型


    return hashCode(callbackString);
  }

  _export("hashFun", hashFun);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0252fos23pOw7AFlK+qeN/F", "HashUtils", undefined);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=265c947537dc1c12e80c0a40f39924812ea51cba.js.map