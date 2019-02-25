require('dotenv').config();
var express = require('express');
var app = express();
const userController = require('./controllers/userController');
const weatherController = require('./controllers/weatherController');
const bodyParser = require('body-parser');
const http = require('http');

app.use(bodyParser.json());
//app.use(express.static(__dirname + './../')); //serves the index.html


app.post('/signup', userController.createUserTable, userController.signIn, function (req, res) {
    res.json(res.locals.name);
});

app.post('/weather', weatherController.getWeather, function (req, res) {
    res.send(JSON.stringify(res.locals.data));
});

app.listen(3000, function () {
    console.log('listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/