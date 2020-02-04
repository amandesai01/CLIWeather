const request = require('request')

const weather = (latitude, longitude, callback) => {
    url = "https://api.darksky.net/forecast/71df352ffcc6d408df4717c3bdeaa541/" + latitude + "," + longitude;
    request({ url: url, json:true}, (error, response) => {
        if(error){
            callback("Some Network Issue", undefined)
        } else if(response.body.error){
            callback("Server Side Error : " + response.body.error, undefined)
        } else {
            newresponse = {
                summary : response.body.currently.summary,
                temprature : response.body.currently.temperature,
                humidity: response.body.currently.humidity
            };
            callback(undefined, newresponse);
        }
    })
};

module.exports = weather;