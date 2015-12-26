/**
 * Created by bluewaitor on 15/12/26.
 */

var express = require('express');
var app = express();

app.get('/home', function(req, res){
    res.end('Hello World!');
});

app.listen(process.argv[2]);