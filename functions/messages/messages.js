exports.handler = async event => {
    client.messages
        .create({
            from: +9549519782,
            to: process.env.TWILIO_PHONE_NUMBER,
            body: "name :" + event.queryStringParameters.name + " email: " + event.queryStringParameters.email + " message: " + event.queryStringParameters.message
        })
        .then(() => {
            return{ success: true };
        })
        .catch(err => {
            return{ success: false };
        });
    };