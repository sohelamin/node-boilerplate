'use strict'

module.exports = class Router {
    constructor() {
        this.handler = [];
    }

    route(pathname, callback, verb) {
        verb = verb || 'GET';

        this.handler[pathname] = {
            callback: callback,
            verb: verb
        };
    }

    get(pathname, callback) {
        this.route(pathname, callback, 'GET');
    }

    post(pathname, callback) {
        this.route(pathname, callback, 'POST');
    }
}