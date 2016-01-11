/**
 * Created by bluewaitor on 15/12/26.
 */
var split = require('split');
var through = require('through2');

var lineCount = 0;
process.stdin
    .pipe(split())
    .pipe(through(function(buf, _, next){
        var line = buf.toString();
        this.push(lineCount % 2 === 0 ? line.toLowerCase() + '\n' : line.toUpperCase() + '\n');
        lineCount ++;
        next();
    }))
    .pipe(process.stdout);