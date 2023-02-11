const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

mongoose.connect(
  'mongodb://localhost:27017/dymajwt?readPreference=primary&appname=MongoDB%20Compass&ssl=false',
  function (error) {
    if (error) {
      console.log(error);
    } else {
      console.log('Connexion opened to mongodb!');
    }
  },
);

app.use(routes);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = app;

// mongodb+srv://GreksO:FormationDevWeb3.0@meanapp.vptnq99.mongodb.net/meanApp?retryWrites=true&w=majority