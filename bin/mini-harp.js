#!/usr/bin/env node

//var createMiniHarp = require("mini-harp")

var miniHarp = require(".."),
    argv = require('minimist')(process.argv.slice(2));

var root = process.cwd();
var app = miniHarp(root);

console.log("Starting mini-harp on http://localhost:" + argv.port);

app.listen(4000);