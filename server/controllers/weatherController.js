var request = require('request');

function getWeather(req, res, next) {
    request(`http://api.openweathermap.org/data/2.5/weather?q=${req.body.city},us&units=imperial&APPID=${process.env.API_KEY}`, 
        function (error, response, body) {
            //console.log('error:', error); // Print the error if one occurred
            //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
            res.locals.data = body;
            next();
        }
    );  
}
module.exports = { getWeather };