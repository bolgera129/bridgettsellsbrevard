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
    var result;
  request(options, function (error, response, body) {
    result = body.json()
    console.log(result)
    console.log(body)
  })
  console.log(result)
  callback(null, {body: result})
}