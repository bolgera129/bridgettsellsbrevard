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
      console.log(JSON.parse(body))
      return callback(null, {
        body : JSON.stringify(JSON.parse(body))
      })
    });
    }