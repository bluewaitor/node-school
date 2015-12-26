/**
 * Created by bluewaitor on 15/12/26.
 */

var marked = require('marked');

//将@@...@@替换为<blink>...</blink>
module.exports = function (str) {
    var md = marked(str);
    return md.replace(/@@(.+?)@@/g,'<blink>$1</blink>')
};