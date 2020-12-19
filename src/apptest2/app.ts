import express from 'express'
export const app2 = express()
app2.get('/', (req, res) => res.send('Hello World! APPTEST2'))