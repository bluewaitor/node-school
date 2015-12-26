/**
 * Created by bluewaitor on 15/12/26.
 */

//匹配"中的字符包括"
module.exports = function (str) {
    return str.match(/"[^"]*"/g);
};
