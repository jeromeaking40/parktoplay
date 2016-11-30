var express = require('express'),
    dotenv = require('dotenv').config(),
    morgan = require('morgan'),
    Routes = require('./routes'),
    bodyParser = require('body-parser');

var app = express();

//MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}), bodyParser.json());

Routes(app);

app.use(express.static('public'));

//SERVER
app.listen(5000, function(err) {
    console.log('The port is listening on 5000');
});
