const request = require("request")
const url1 = 'https://api.darksky.net/forecast/a2958fd4b083d496f479d49678e68a27/37.8267,-122.4233?units=si&lang=en'
const url2 = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoia2FtYWw5OCIsImEiOiJjazl6Nzd3bXAwYnRsM2RudnE5aXg0aHY0In0.F1pd05rqzkfrd3EUj27msQ&limit=1"
request({
    url:url1,
    json:true
},(error,response)=>{
    //const data = JSON.parse(response.body)
    //console.log(response.body.currently)
    console.log(response.body.daily.summary+" It's currently "+ response.body.currently.temperature +" and there is "
    + response.body.currently.precipProbability +" chance to rain")
    })

request({
    url:url2,
    json:true
},(error,response)=>{
    console.log(response.body.features[0].center)
})
