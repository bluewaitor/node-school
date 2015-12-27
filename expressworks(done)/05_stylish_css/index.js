/**
 * Created by bluewaitor on 15/12/26.
 */

var express = require('express');
var stylus = require('stylus');

var app = express();

var staticPath = process.argv[3];
app.use(stylus.middleware(staticPath));
app.use(express.static(staticPath));

app.listen(process.argv[2]);
