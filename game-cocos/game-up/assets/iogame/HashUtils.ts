export function hashFun(handler: Function) {
    const callbackString = handler.toString(); // 将回调函数转换为字符串形式
    // 这里可以根据需要选择不同的算法进行哈希处理，比如MD5、SHA1等
    function hashCode(str) {
        let hash = 0;
        if (str.length === 0) return hash;

        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = ((hash << 5) - hash + char) | 0;
        }
        return hash;
    }
     // 对字符串进行哈希处理并转换为字符串类型
    return hashCode(callbackString);
}
