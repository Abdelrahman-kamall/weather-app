const geocode = require("./utils/geocode")
const forecast = require("./utils/forecast")

    

if(process.argv.length < 3){
    return console.log("you didn't specify a location for the forcast")
}
var location = ""
for(i=2;i<process.argv.length;i++){
    location+=process.argv[i]+" "
}
//console.log(location)

const forecast_callback = (error,response)=>{
    if(error){
        console.log("something went wrong , error code : "+error.code)
    }else if(response.body.error){
        console.log("bad request , error message : "+response.body.error)
    }else{
        console.log(response.body.daily.summary+" It's currently "+ response.body.currently.temperature +" and there is "
        + response.body.currently.precipProbability +" chance to rain")
    
    }
}




const geocode_callback = (error,response)=>{
    if(error){
        console.log("something went wrong , error code : "+error.code)
    }else if(response.body.error){
        console.log("bad request , error message : "+response.body.error)
    }else if(response.body.features.length === 0){
        console.log("unable to find location !")
    }else{
        console.log("the location u r searching for : "+response.body.features[0].place_name)
        console.log("the location coordinates : " + response.body.features[0].center)
        forecast(response.body.features[0].center[1],response.body.features[0].center[0],forecast_callback)
    }
    
}



geocode.geo_code(location, geocode_callback)



