const Server = require('./server');
const path = require('path');
const fs = require('fs');

var server = new Server;

server.get('/', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World');
    res.end();
});

server.get('/me', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello It\'s me');
    res.end();
});

server.get('/submit', function(req, res) {
    file = path.join(__dirname + '/views/form.html');

    fs.readFile(file, function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});

server.post('/process-submit', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    req.setEncoding("utf8");
    var postData = '';
    req.addListener("data", function(postDataChunk) {
        postData += postDataChunk;
        console.log("Received POST data chunk '"+
        postDataChunk + "'.");
    });

    req.addListener("end", function() {
        res.write(postData);
        res.end();
    });

});

server.start();
