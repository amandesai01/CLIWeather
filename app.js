const geocoder = require('./Utils/geocoder')
const weather = require('./Utils/weather')

const address = process.argv[2]

if(!address){
    console.log("Please Provide Address as an Argument")
} else {
    geocoder(address, (error, response) => {
        if(error){
            console.log("Error while retrieving coordinates");
        } else {
            weather(response.latitude, response.longitude, (iferror, response) =>{
                if(iferror){
                    console.log("Error while retrieving data: " + iferror);
                } else {
                    console.log(newresponse)
                }
            });
        }
    });
}