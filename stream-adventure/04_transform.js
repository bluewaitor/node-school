/**
 * Created by bluewaitor on 15/12/26.
 */

var through = require('through2');

var tr = through(function(buf, _, next){
    this.push(buf.toString().toUpperCase());
    next();
});

process.stdin.pipe(tr).pipe(process.stdout);
