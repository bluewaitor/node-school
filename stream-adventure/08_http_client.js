/**
 * Created by bluewaitor on 16/1/11.
 */
var request = require('request');

var r = request.post('http://localhost:8099');

process.stdin.pipe(r).pipe(process.stdout);