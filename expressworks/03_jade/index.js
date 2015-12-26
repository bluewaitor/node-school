/**
 * Created by bluewaitor on 15/12/26.
 */
var path = require('path');
var express = require('express');

var app = express();

//设置jade文件夹
app.set('views', path.join(__dirname, 'templates'));
//设置视图引擎
app.set('view engine', 'jade');

app.get('/home', function (req, res) {
    //render渲染模版文件
    res.render('index',{date: new Date().toDateString()});
});

app.listen(process.argv[2]);