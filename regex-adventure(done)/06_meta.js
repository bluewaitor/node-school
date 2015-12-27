/**
 * Created by bluewaitor on 15/12/26.
 */
//匹配点则需要转义 其它需要转义的字符有: . * + ? [ ] ( ) ^ $ { } | \
module.exports = function(str){
    return /\.$/.test(str);
};
