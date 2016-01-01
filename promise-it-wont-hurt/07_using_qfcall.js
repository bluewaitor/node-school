/**
 * Created by bluewaitor on 16/1/1.
 */

var q = require('q');

q.fcall(JSON.parse, process.argv[2])
    .then(null, console.log);