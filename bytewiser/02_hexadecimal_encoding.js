/**
 * Created by bluewaitor on 15/12/29.
 */

var bytes = process.argv.slice(2).map(Number);
console.log(new Buffer(bytes).toString('hex'));