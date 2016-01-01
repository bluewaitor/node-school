/**
 * Created by bluewaitor on 16/1/1.
 */

var q = require('q');
var defer = q.defer();

defer.promise.then(console.log);
setTimeout(defer.resolve, 300, "RESOLVED!");