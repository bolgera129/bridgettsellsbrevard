
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
    body: "name :" + body.text.name + " email: " + body.text.email + " message: " + body.text.message,
    from: +19549519782,
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