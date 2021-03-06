/**
 * Created by bluewaitor on 2015/12/24.
 */

var net = require('net');


function fillZero(i){
    return (i < 10 ? '0':'') + i;
}

function now(){
    var d = new Date();
    return d.getFullYear() + '-'
            + fillZero(d.getMonth() + 1) + '-'
            + fillZero(d.getDate()) + ' '
            + fillZero(d.getHours()) + ':'
            + fillZero(d.getMinutes());
}

var server = net.createServer(function(socket){
    socket.end(now()+'\n');
});


server.listen(Number(process.argv[2]));