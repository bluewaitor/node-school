/**
 * Created by bluewaitor on 15/12/26.
 */

//匹配括号中的字符,但是x=12必须有单词分隔符
module.exports = function(str){
    var m = /\bx=(\d+)\b/.exec(str);
    return m ? m[1] : null
};