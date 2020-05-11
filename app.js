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

const forecast_callback = (error,body)=>{
    if(error){
        console.log("something went wrong , error code : "+error.code)
    }else if(body.error){
        console.log("bad request , error message : "+body.error)
    }else{
        console.log(body.daily.summary+" It's currently "+ body.currently.temperature +" and there is "
        + body.currently.precipProbability +" chance to rain")
    
    }
}




const geocode_callback = (error,body)=>{
    if(error){
        console.log("something went wrong , error code : "+error.code)
    }else if(body.error){
        console.log("bad request , error message : "+body.error)
    }else if(body.features.length === 0){
        console.log("unable to find location !")
    }else{
        console.log("the location u r searching for : "+body.features[0].place_name)
        console.log("the location coordinates : " + body.features[0].center)
        forecast(body.features[0].center[1],body.features[0].center[0],forecast_callback)
    }
    
}



geocode.geo_code(location, geocode_callback)



