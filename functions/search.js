var request = require("request");

exports.handler = async (event,context,callback) => {
  const body = JSON.parse(event.body)
  console.log(body.url)
    var options = {
      method: 'GET',
      uri: body.url,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true
      }
    };
  request(options, function (error, response, body) {
    console.log(body)
    body.json()
    callback (null, {
    headers: {
      "Access-Control-Allow-Origin" : "*", 
      "Access-Control-Allow-Credentials" : true 
    },
    statusCode: 200, 
    body: body})
  })
}