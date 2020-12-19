import express from 'express'
export const app1 = express();
app1.get('/', (req, res) => res.send('Hello World! APPTEST1'))