var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose')
var config = require('./config');

var app = express();

mongoose.connect(config.database, (err) => {
	err ? console.log(err) : console.log('connect to the DB');
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var api = require('./app/routes/api')(app, express);
app.use('/api', api);

app.get('*', (req, res) => {
	res.sendFile(__dirname + '/public/views/index.html');
})

app.listen(config.port, (err) => {
	err ? console.log(err) : console.log('listen 1009');
})