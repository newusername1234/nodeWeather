const { APIKEY } = require('./config');
const request = require('request');
const URL = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=37.8267,-122.4233&units=f`;
request({ url: URL, json: true }, (err, res) => {
    console.log(`${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees.
It feels like ${res.body.current.feelslike}`);
});