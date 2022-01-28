const request = require('request')
const url =
  'http://api.weatherstack.com/current?access_key=d47b39a4f55a77a6b10a778a5f798ea2&query=37.8267,-122.4233'
request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.current)
})
