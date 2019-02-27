require('dotenv').config();
var express = require('express');
var app = express();
const userController = require('./controllers/userController');
const weatherController = require('./controllers/weatherController');
const messagerController = require('./controllers/messagerController');
const bodyParser = require('body-parser');
const http = require('http').Server(app);
const io = require('socket.io', {reconnection: true, transports: ['websockets']})(http);

app.use(bodyParser.json());
//app.use(express.static(__dirname + './../')); //serves the index.html


//AUTH
app.post('/signup', userController.createUserTable, userController.signIn, function (req, res) {
    res.json(res.locals.name);
});

//WEATHER
app.post('/weather', weatherController.getWeather, function (req, res) {
    res.json(res.locals.data);
});

//MESSENGER
app.get('/getMessages', messagerController.getMessages, function (req, res) {
    console.log('got messages');
    res.json(res.locals.messages);
});

app.post('/createMessage', messagerController.createMessage, function (req, res) {
    console.log('created message: ', res.locals.message);
    res.json(res.locals.message);
})

io.on('connection', (socket) => {
    console.log('a user is connected')
    socket.on('client-connect', (data) => {
        console.log(data, socket.id)
        socket.emit('server-connect', 'hey from server')
    })
})

http.listen(3000, function () {
    console.log('listening on port 3000');
}); //listens on port 3000 -> http://localhost:3000/