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
    result = JSON.parse(body)
    console.log(result)
    console.log(body)
    callback(null, {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':
          'Origin, X-Requested-With, Content-Type, Accept'
      },
      body: JSON.stringify(result)
    });
  })
}