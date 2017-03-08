/**
 * 解析url参数
 * @example ?id=12345&a=b
 * @return Object {id：12345, a:b} //转换成对象
 */
export function urlParse() {
    let url = window.location.search; // 获取?id=12345&a=b url参数
    let obj = {};
    let reg = /[?&][^?&]+=[^?&]+/g;  // 全局匹配
    let arr = url.match(reg);
    // ['?id=12345', '&a=b']
    if (arr) {
        arr.forEach((item) => {
            let tempArr = item.substring(1).split('=');
            let key = decodeURIComponent(tempArr[0]);
            let val = decodeURIComponent(tempArr[1]);
            obj[key] = val;
        });
    }
    return obj;
};
