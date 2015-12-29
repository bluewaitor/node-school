/**
 * Created by bluewaitor on 15/12/29.
 */

var str = process.stdin.on('data', function(buf){
    for( var i = 0; i < buf.length; i++){
        if(buf[i] == 46) {
            buf[i] = '!'.charCodeAt(0);
        }
    }
    console.log(buf);
});