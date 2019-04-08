const request = require('request')

exports.handler = function(event, context, callback) {

  var url = `https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/submissions?access_token=${process.env.API_AUTH}`

  request(url, function(err, response, body){
    if (err) {
       callback(err)
    } else {
      callback(null, {
        statusCode: 200,
        body
      })
    }
  })
}
