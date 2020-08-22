
const TwilioSdk = require('twilio')
// Your Account SID from www.twilio.com/console
const accountSid = process.env.TWILIO_ACCOUNT_SID
// Your Auth Token from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN
// instantiate twilio SDK
const twilio = new TwilioSdk(accountSid, authToken)

// use twilio SDK to send text message https://www.twilio.com/docs/libraries/node
exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body)

  const sms = {
    to: process.env.TWILIO_PHONE_NUMBER,
    body: "name :" + event.queryStringParameters.name + " email: " + event.queryStringParameters.email + " message: " + event.queryStringParameters.message,
    from: +9549519782,
  }


  twilio.messages.create(sms).then((message) => {
    return callback(null, {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Text message successfully sent!',
        data: message,
      })
    })
  }).catch((error) => {
    console.log('text message failed', error)
    return callback(null, {
      statusCode: error.status,
      body: JSON.stringify({
        message: error.message,
        error: error,
      })
    })
  })
}