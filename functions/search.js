var request = require("request");

exports.handler = (event,context,callback) => {
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

    return (request(options, function (error, response, body) {
       let result = JSON.parse(body)
        return(result)
    }));
}