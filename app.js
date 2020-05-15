const { APIKEY } = require('./config');
const request = require('request');
const URL = `http://api.weatherstack.com/current?access_key=${APIKEY}&query=37.8267,-122.4233`;
request({ url: URL }, (err, res) => {
    const data = JSON.parse(res.body);
    console.log(data);
});