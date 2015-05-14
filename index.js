var connect = require('connect');
var serveStatic = require('serve-static');

module.exports = function (path) {
    var app = connect();

    app
        .use(function (request, response, next) {
            if (request.url === '/current-time') {
                response.end((new Date()).toISOString());
            }
            next();
        })
        .use(serveStatic(path));


    return app;
};