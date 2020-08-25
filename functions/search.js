var request = require("request");
const axios = require('axios');


exports.handler = async (event,context,callback) => {

  const body = JSON.parse(event.body)
    axios({
      "method":"GET",
      "url":body.url,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"realtor.p.rapidapi.com",
      "x-rapidapi-key":process.env.REACT_APP_API_KEY,
      "useQueryString":true
      }
    })
    .then(res => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers':
            'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify(res)
      })
    })
}