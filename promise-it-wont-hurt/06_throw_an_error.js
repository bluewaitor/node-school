/**
 * Created by bluewaitor on 16/1/1.
 */


var q = require('q');

var json = process.argv[2];

function parsePromised ( json ) {
    var def = q.defer();
    var result;

    try{
        result = JSON.parse(json);
    }catch (e){
        def.reject(e);
    }

    def.resolve(result);
    return def.promise;
}

parsePromised(json)
    .then(null, console.log);
