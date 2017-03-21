// authors: Colin & Ally
// assignment: Blog API II
// date: 3.21.17
/*----------------------------*/
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {PORT, DATABASE_URL} = require('./config');
const {BLOGPOSTS} = require('./models');

const app = express();
app.use(bodyParser.json());

app.get('/blogposts', (req, res) => {

})