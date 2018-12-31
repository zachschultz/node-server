const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

mongoose.connect(
  // `mongo` instead of `localhost` because in the Dockerized environment the hostname is now `mongo` (from the docker-compose.yml file)
  'mongodb://mongo:27017/auth',
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
