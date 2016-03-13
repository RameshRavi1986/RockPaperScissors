
var express = require('express');
var request = require('request');
var app = express();
app.use(express.static(__dirname + "/build"));

module.exports = app;


