var express = require('express');
var path = require('path');

var sometimesuseful_com = express();
sometimesuseful_com.get('/HYBRID_CLOUD_DEVELOPPER_&_SDDC_TECH_LEADER.docx', function (req, res) {
  res.sendfile(path.join(__dirname + '/HYBRID CLOUD DEVELOPPER & SDDC TECH LEADER.docx'));
})
sometimesuseful_com.get('/logo.svg', function (req, res) {
  res.sendfile(path.join(__dirname + '/logo.svg'));
})

sometimesuseful_com.get('/*', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
})

/*
var sometimesuseful = express()
sometimesuseful.get('/', function (req, res) {
  
})
*/

module.exports.sometimesuseful_com = sometimesuseful_com;