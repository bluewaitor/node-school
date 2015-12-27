/**
 * Created by bluewaitor on 15/12/26.
 */

//匹配()中的字符
module.exports = function (str) {
    var m = /x=(\d+)/.exec(str);
    return m ? m[1] : null;
};