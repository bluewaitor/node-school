/**
 * Created by bluewaitor on 15/12/26.
 */

//以逗号或者括号和空白符号的组合分割字符串
module.exports = function(str){
    return str.split(/\s*,\s*/);
};