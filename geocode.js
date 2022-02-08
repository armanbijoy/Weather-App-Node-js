const request = require('request')

const geocode = (address, callback) => {
  const url =
    'geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoiYmlqb3kxMjUiLCJhIjoiY2t5emM1ZzNyMHl3bjJvcWswaHB3MnpocSJ9.umDCpAsfdwiw_7zgrA-pKQ'
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to Connect', undefined)
    } else if (response.body.features.length == 0) {
      callback('Unable To Find Location', undefined)
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitute: response.body.features[0].center[0],
        location: response.body.features[0].place_name,
      })
    }
  })
}

module.exports = geocode
