/**
 * Created by bluewaitor on 16/1/11.
 */

var concat = require('concat-stream');

process.stdin.pipe(concat(function(src){
    var s = src.toString().split('').reverse().join('');
    console.log(s);
}));