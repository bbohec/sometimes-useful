#!/usr/bin/env nodejs
import express from 'express'
import compression from 'compression'
import vhost from 'vhost'
import {app1} from './apptest1/app'
import {app2} from './apptest2/app'
import {sometimesUsefulCom} from './sometimesUsefulCom/app';
import {sometimesUsefulFr} from './sometimesUsefulFr/app';
import {defaultApp} from './defaultApp/app'
express()
	.use(compression())
  .use( vhost( 'app1.test', app1 ) )
  .use( vhost( 'app2.test', app2 ) )
  .use( vhost( 'sometimesuseful.com', sometimesUsefulCom ) )
  .use( vhost( 'www.sometimesuseful.com', sometimesUsefulCom ) )
  .use( vhost( 'sometimesuseful.fr', sometimesUsefulFr ) )
  .use( vhost( 'www.sometimesuseful.fr', sometimesUsefulFr ) )
  .use( vhost( '*', defaultApp ) )
  .listen(80);