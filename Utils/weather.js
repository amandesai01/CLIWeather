const request = require('request')

const weather = (latitude, longitude, callback) => {
    url = "https://api.darksky.net/forecast/71df352ffcc6d408df4717c3bdeaa541/" + latitude + "," + longitude
    request(url, (error, response) => {
        if(error){
            callback("Some Network Issue", undefined)
        } else if(response.error.length > 0){
            callback("Server Side Error : " + response.error, undefined)
        } else {
            newresponse = {
                summary : response.currently.summary,
                temprature : response.currently.temprature,
                humidity: response.currently.humidity
            };
            callback(undefined, newresponse);
        }
    })
};

module.exports = weather;