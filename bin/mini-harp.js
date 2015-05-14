#!/usr/bin/env node

//var createMiniHarp = require("mini-harp")
var createMiniHarp = require("..")
    , app = createMiniHarp(),
    minimist = require('minimist'),
    argv = minimist(process.argv.slice(2));


console.log("Starting mini-harp on http://localhost:" + argv.port);

app.use(function(request, response, next){
    if(request.url === '/current-time'){
        response.end((new Date()).toISOString());
    }
});

app.listen(argv.port || 4000);

