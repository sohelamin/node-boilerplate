'use strict'

module.exports = class Router {
    constructor() {
        this.handler = [];
    }

    route(pathname, callback, verb) {
        verb = verb || 'get';

        this.handler[pathname] = {
            callback: callback,
            verb: verb
        };
    }

    get(pathname, callback) {
        this.route(pathname, callback, 'get');
    }

    post(pathname, callback) {
        this.route(pathname, callback, 'post');
    }
}