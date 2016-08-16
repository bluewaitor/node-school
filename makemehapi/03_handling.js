
var Hapi = require('hapi');
var Inert = require('inert');
var server = new Hapi.Server();
var path = require('path');

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.register(Inert, function (err) {
    if(err) throw err;
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: path.join(__dirname, 'index.html')
    }
});

server.start(function () {
    console.log('Server running at: ', server.info.uri);
});