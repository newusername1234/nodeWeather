const { WEATHERKEY, MAPKEY } = require('./config');
const request = require('request');
const weatherURL = `http://api.weatherstack.com/current?access_key=${WEATHERKEY}&query=37.8267,-122.4233&units=f`;
const mapURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${MAPKEY}&limit=1`;

request({ url: weatherURL, json: true }, (err, res) => {
    console.log(`${res.body.current.weather_descriptions[0]}. It is currently ${res.body.current.temperature} degrees.
It feels like ${res.body.current.feelslike}`);
});

request({url: mapURL, json: true}, (err, res) => {
    const latLongArr = res.body.features[0].center;
    console.log(`lat: ${latLongArr[0]}\nlong: ${latLongArr[1]}`)
});