import express from 'express';
import path from 'path';

export const defaultApp = express();
defaultApp.get('/', (req, res) => res.sendfile(path.join(__dirname + '/index.html')))