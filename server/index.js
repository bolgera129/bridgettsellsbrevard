const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const pino = require('express-pino-logger')();
const client = require('twilio')(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')))

 
  app.post('/api/messages', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: +9549519782,
        to: process.env.TWILIO_PHONE_NUMBER,
        body: "name :" + req.body.text.name + " email: " + req.body.text.email + " message: " + req.body.text.message
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        res.send(JSON.stringify({ success: false }));
      });
  });

  app.post('/apis/search', (req,res) => {
    var request = require("request");

    var options = {
      method: 'GET',
      url: req.body.url,
      headers: {
        'x-rapidapi-host': 'realtor.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY,
        useQueryString: true
      }
    };
    
    request(options, function (error, response, body) {
      if (error) throw new Error(error);
    
      res.send(body);
    });
  })

app.listen(8080, () => console.log("listening"));
