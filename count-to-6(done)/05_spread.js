/**
 * Created by bluewaitor on 2016/1/29.
 */

var numbers = process.argv.slice(2);
var min = Math.min(...numbers);
console.log(`The minimum of [${numbers}] is ${min}`);