const request = require('request')

exports.handler = function (event, context, callback) {

    let url = `https://api.netlify.com/api/v1/sites/${process.env.SITE_ID}/submissions?access_token=${process.env.API_AUTH}`

    request(url, function (err, response, body) {
        if (err) {
            callback(err)
        } else {
            let submissions = JSON.parse(body)
            let messages = submissions.map(submission => ({
                id: submission['number'],
                username: submission['data']['username'],
                text: submission['data']['text']
            }))
            callback(null, {
                statusCode: 200,
                body: JSON.stringify(messages)
            })
        }
    })
}
