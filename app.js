const request = require('request')
const url =
  'http://api.weatherstack.com/current?access_key=d47b39a4f55a77a6b10a778a5f798ea2&query=37.8267,-122.4233'
request({ url: url, json: true }, (error, response) => {
  //   const data = JSON.parse(response.body)
  //   console.log(data.current)
  //   console.log(response.body.current)

  console.log(
    'Its Currently ' +
      response.body.current.temperature +
      ' degress out. It feels like ' +
      response.body.current.feelslike +
      'degress out'
  )
})
const geocodeURL =
  'https://api.mapbox.com/geocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiYmlqb3kxMjUiLCJhIjoiY2t5emM1ZzNyMHl3bjJvcWswaHB3MnpocSJ9.umDCpAsfdwiw_7zgrA-pKQ'

request({ url: geocodeURL, json: true }, (error, response) => {
  const latitude = response.body.features[0].center[1]
  const longitute = response.body.features[0].center[0]

  console.log(latitude, longitute)
})
