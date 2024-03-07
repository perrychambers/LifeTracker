const express = require('express')
const mongoose = require('mongoose');
const path = require('path')

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello world from node.js server.');
})

mongoose.connect('mongodb://localhost/life-tracker', { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
})