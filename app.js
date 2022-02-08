const request = require('request')
const geocode = require('./geocode')
// const url =
//   'http://api.weatherstack.com/current?access_key=d47b39a4f55a77a6b10a778a5f798ea2&query=37.8267,-122.4233'
// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect')
//   } else if (response.body.error) {
//     console.log(`Unable Find Location`)
//   } else {
//     console.log(
//       'Its Currently ' +
//         response.body.current.temperature +
//         ' degress out. It feels like ' +
//         response.body.current.feelslike +
//         'degress out'
//     )
//   }
// })
// const geocodeURL =
//   ' ocoding/v5/mapbox.places/-73.989,40.733.json?access_token=pk.eyJ1IjoiYmlqb3kxMjUiLCJhIjoiY2t5emM1ZzNyMHl3bjJvcWswaHB3MnpocSJ9.umDCpAsfdwiw_7zgrA-pKQ'

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log(`Unable To connect`)
//   } else if (response.body.length === 0) {
//     console.log(`Unable to find location`)
//   } else {
//     const latitude = response.body.features[0].center[1]
//     const longitute = response.body.features[0].center[0]

//     console.log(latitude, longitute)
//   }
// })

geocode('Dhaka', (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
