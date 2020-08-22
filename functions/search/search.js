var request = require("request");

exports.handler = (event,context,callback) => {
    var options = {
      method: 'GET',
      url: event.queryStringParameters.url,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true
      }
    };

    await request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      callback(body);
    });
  }