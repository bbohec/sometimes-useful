#!/usr/bin/env nodejs
var express = require('express')
var compression = require('compression')

var {app1} = require('./apptest1/app.js');

var app2 = express()
app2.get('/', function (req, res) {
  res.send('Hello World! APPTEST2')
})

var {sometimesuseful_com} = require('./sometimesuseful_com/app.js');
var {sometimesuseful_fr} = require('./sometimesuseful_fr/app.js');
var {default_app} = require('./default_app/app.js');

express()
	.use(compression())
  .use( express.vhost( 'app1.test', app1 ) )
  .use( express.vhost( 'app2.test', app2 ) )
  .use( express.vhost( 'sometimesuseful.com', sometimesuseful_com ) )
  .use( express.vhost( 'www.sometimesuseful.com', sometimesuseful_com ) )
  .use( express.vhost( 'sometimesuseful.fr', sometimesuseful_fr ) )
  .use( express.vhost( 'www.sometimesuseful.fr', sometimesuseful_fr ) )
  .use( express.vhost( '*', default_app ) )
  .listen(80);