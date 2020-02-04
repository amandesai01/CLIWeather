const request = require('request');

url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
params = ".json?access_token=pk.eyJ1IjoiYW1hbmRlc2FpMDEiLCJhIjoiY2s2N3c1czZwMDZ5YzNqcGdwMWlidndtaiJ9._ZfmHWHgOaWcanGrdMBmTg&limit=1";

const geocoder = (address, callback) => {
    request(url + address + params, (error, response) => {
        if(error || response.body.features.length === 0) {
            callback(true, undefined)
        } else {
            callback(undefined, { latitude: response.body.features[0].center[0], longitude: response.body.features[0].center[1]})
        }
    });
};

module.exports = geocoder;