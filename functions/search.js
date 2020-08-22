exports.handler = async event => {
    var request = require("request");
    var options = {
      method: 'GET',
      url: event.queryStringParameters.url,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true
      }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      return(body);
    });
  }