const request = require("request")

const forecast =(latitude,longitude,call_back_fnc) =>{
    const url1 = 'https://api.darksky.net/forecast/a2958fd4b083d496f479d49678e68a27/'+latitude + ',' + longitude+'?units=si&lang=en'
request({
    url:url1,
    json:true
},(error,response)=>{
    call_back_fnc(error,response)
})
}

module.exports = forecast