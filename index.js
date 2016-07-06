const Server = require('./server');

var server = new Server;

server.get('/', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
    res.end();
});

server.get('/me', function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello It's me");
    res.end();
});

server.start();
