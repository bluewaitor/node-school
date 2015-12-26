/**
 * Created by bluewaitor on 15/12/26.
 */


var express = require('express');
var path = require('path');
var app = express();

//process.argv[3]传的是index.html所在的文件夹,如果不存在,则指定public为默认的静态文件夹
app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));

app.listen(process.argv[2]);