var express = require('express');
var path = require('path');

var sometimesuseful_fr = express();
sometimesuseful_fr.get('/HYBRID_CLOUD_DEVELOPPER_&_SDDC_TECH_LEADER.docx', function (req, res) {
  res.sendfile(path.join(__dirname + '/HYBRID CLOUD DEVELOPPER & SDDC TECH LEADER.docx'));
})
sometimesuseful_fr.get('/logo.svg', function (req, res) {
  res.sendfile(path.join(__dirname + '/logo.svg'));
})
sometimesuseful_fr.get('/', function (req, res) {
  res.sendfile(path.join(__dirname + '/index.html'));
})

/*
var sometimesuseful = express()
sometimesuseful.get('/', function (req, res) {
  
})
*/

module.exports.sometimesuseful_fr = sometimesuseful_fr;