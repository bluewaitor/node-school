
var Hapi = require('hapi');
var server = new Hapi.Server();
var Vision = require('vision');

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.register(Vision, function (err) {
    if(err) throw err;
});

server.route({
    path: '/foo/bar/baz/{filename}',
    method: 'GET',
    handler: {
        directory: {
            path: path.join(__dirname, 'public')
        }
    }
});

server.start(function () {
    console.log('Server running at: ', server.info.uri);
});