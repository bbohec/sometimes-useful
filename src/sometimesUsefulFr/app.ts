import express from 'express';
import path from 'path';
export const sometimesUsefulFr = express();
sometimesUsefulFr.get('/HYBRID_CLOUD_DEVELOPPER_&_SDDC_TECH_LEADER.docx', (req, res) => res.sendfile(path.join(__dirname + '/HYBRID CLOUD DEVELOPPER & SDDC TECH LEADER.docx')))
sometimesUsefulFr.get('/logo.svg', (req, res) => res.sendfile(path.join(__dirname + '/logo.svg')))
sometimesUsefulFr.get('/', (req, res) => res.sendfile(path.join(__dirname + '/index.html')))