var express = require('express');
var path = require('path');

var default_app = express();
default_app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
})
module.exports.default_app = default_app;