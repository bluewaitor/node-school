/**
 * Created by bluewaitor on 15/12/26.
 */

var express = require('express');
var fs = require('fs');

var app = express();

app.get('/books', function(req, res){
    var fileName = process.argv[3];
    fs.readFile(fileName, function(err, data){
        if(err) return res.sendStatus(500);
        try{
            var books = JSON.parse(data);
        }catch (e){
            res.sendStatus(500);
        }
        res.json(books);
    });
});

app.listen(process.argv[2]);
