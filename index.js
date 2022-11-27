const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors());

const catagorys = require('./data/catagory.json')

app.get('/', (req, res) => {
    res.send('Resail-Mubail-Phone-Server Is Running')
})

app.get('/catagorys', (req, res) => {
    res.send(catagorys);
})

app.listen(port, () => {
    console.log('Resail-Mubail-Phone Rerver is Running Port', port)
})