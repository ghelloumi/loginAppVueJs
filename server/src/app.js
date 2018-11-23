const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const config = require('../config/');

const app = express();

/*Middlewares*/
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

router = express.Router();

/*Set up mongoose connection*/
mongoose.connect(config.mongoDB, function (err) {
  if (err) {
    throw err;
  }
});

/*Routes*/
app.use('/users', require('./controllers/users/user.route')(router));

app.listen(config.port, function () {
  console.log('API listening on port: ', config.port);
});
