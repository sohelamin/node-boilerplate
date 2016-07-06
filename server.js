'use strict'

const http = require('http');
const url = require('url');
const Router = require('./router');

var router = new Router;

module.exports = class Server {
    get(pathname, callback) {
        router.get(pathname, callback);
    }

    post(pathname, callback) {
        router.post(pathname, callback);
    }

    start(options) {
        options = options || {port: 3000};

        var server = http.createServer(this.onRequest);

        server.listen(options.port);
        console.log('Server has started on port ' + options.port + '.');
    }

    onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        if (router.handler.hasOwnProperty(pathname) && typeof router.handler[pathname].callback === 'function') {

            if (req.method !== router.handler[pathname].verb) {
                res.statusCode = 405;
                res.write('405 Method Not Allowed');
                res.end();
            }

            return router.handler[pathname].callback(req, res);
        } else {
            res.statusCode = 404;
            res.write('404 Not Found');
            res.end();
        }
    }
}
