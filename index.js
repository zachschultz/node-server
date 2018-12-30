const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:auth/auth',
  {useNewUrlParser: true},
);

const router = require('./router.js');

const app = express();
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));
router(app);

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on port: ', port);
