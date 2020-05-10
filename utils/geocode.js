const request = require("request")
const geo_code = (address,call_back_fnc)=>{
    const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+
    ".json?access_token=pk.eyJ1Ijoia2FtYWw5OCIsImEiOiJjazl6Nzd3bXAwYnRsM2RudnE5aXg0aHY0In0.F1pd05rqzkfrd3EUj27msQ&limit=1"
    request({
        url:url2,
        json:true
    },(error,response)=>{
           call_back_fnc(error,response)
    })
}

module.exports={
    geo_code:geo_code
}