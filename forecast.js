const request = require('request')
const forecast = (lat, log, callback) => {
  const url =
    'http://api.weatherstack.com/current?access_key=d47b39a4f55a77a6b10a778a5f798ea2&query=' +
    lat +
    ',' +
    log

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable To Connect', undefined)
    } else if (body.error) {
      callback('Unable to find location', undefined)
    } else {
      callback(
        undefined,
        'Its Currently ' +
          body.current.temperature +
          ' degress out. It feels like ' +
          body.current.feelslike +
          'degress out'
      )
    }
  })
}

module.exports = forecast
