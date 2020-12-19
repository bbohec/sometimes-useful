import express from 'express'
import path from 'path'
export const sometimesUsefulCom = express();
sometimesUsefulCom.get('/HYBRID_CLOUD_DEVELOPPER_&_SDDC_TECH_LEADER.docx', (req, res)=> res.sendfile(path.join(__dirname + '/HYBRID CLOUD DEVELOPPER & SDDC TECH LEADER.docx')))
sometimesUsefulCom.get('/logo.svg', (req, res) => res.sendfile(path.join(__dirname + '/logo.svg')))
sometimesUsefulCom.get('/*', (req, res) => res.sendfile(path.join(__dirname + '/index.html')))