import express from 'express'
import path from 'path'
export const sometimesUsefulComv2 = express();
sometimesUsefulComv2.get('/sometimesUsefulBW-min.gif', (request, response) => {response.sendFile(path.join(__dirname + '/sometimesUsefulBW-min.gif'))})
sometimesUsefulComv2.get('/*', (request, response) => response.sendFile(path.join(__dirname + '/sometimesuseful.html')))