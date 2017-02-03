// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
var app      = express();
var port     = process.env.PORT || 80;
var morgan	 = require('morgan');
var bodyParser 	 = require('body-parser');

// configuration ===============================================================

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser({limit: 1024 * 1024})); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/app')); 

// launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);