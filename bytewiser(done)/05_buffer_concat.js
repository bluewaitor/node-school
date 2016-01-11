/**
 * Created by bluewaitor on 2015/12/31.
 */

var res = [];

process.stdin.on('readable', function(){
    var chunk = process.stdin.read();
    if( chunk !== null){
        res.push(chunk);
    }
});

process.stdin.on('end', function(){
    console.log(Buffer.concat(res));
});
