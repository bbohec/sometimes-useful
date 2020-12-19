var express = require('express')

var app1 = express();
app1.get('/', function (req, res) {
  res.send('Hello World! APPTEST1')
})

module.exports.app1 = app1;