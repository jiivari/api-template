var express = require('express'); // Express web server framework
var request = require('request'); // "Request" library
var qs = require('querystring'); // "querystring library
var bodyParser = require('body-parser'); // "body-parser" library

var app = express();
var port = 3000;

// simple GET method starts here ->
app.get('/api/simpleget', function(req,res) {

  //simple get method with access_token or api_key in the uri
  var apikey = '123'; //accesstoken is used in the uri variable
  var uri = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key='+apikey+'&url=https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/fruitbowl.jpg&version=2016-05-20';

  var options = {
    'method': 'GET',
    'uri': uri
  };

  request(options, function(error, response,body) {
    if (error) {
      res.send(error.message);
    }

    jsonContent = JSON.parse(body); //parse response to JSON array
    // you can do whatever with the json here and return something else to calling app
    message = JSON.stringify(jsonContent); // just reset the jsonContent to string

    res.type('application/json'); //send response as json
    res.set('Content-Length', Buffer.byteLength(message));
    res.status(200).send(message);
  });

});
// simple GET method ends here <--

// GET method with Oauth starts here -->
app.get('/api/oauthget', function(req,res) {

  querystring = 'from:zjanii';
  var uri = 'https://api.twitter.com/1.1/search/tweets.json?q=' + qs.escape(querystring) + '&count=100';

  // get oauth keys from service
  var options = {
    method: 'GET',
    uri: uri,
    oauth: {
      consumer_key: '[CONSUMERKEY]',
      consumer_secret: '[CONSUMERSECRET]',
      token: '[TOKEN]',
      token_secret: '[TOKENSECRET]'
    }
  };

  request(options, function(error, response,body) {
    if (error) {
      res.send(error.message);
    }

    jsonContent = JSON.parse(body); //parse response to JSON array
    // you can do whatever with the json here and return something else to calling app
    message = JSON.stringify(jsonContent); // just reset the jsonContent to string

    res.type('application/json');
    res.set('Content-Length', Buffer.byteLength(message));
    res.status(response.statusCode).send(message);
  });

});
// GET method with Oauth ends here <--


// POST method requires body parser
app.use(bodyParser.json());

// POST method starts here -->
app.post('/api/simplepost', function(req,res) {

  // read input variable from request body
  inputvariable = JSON.stringify(req.body);
  // basic authentication is used
  var username = '[USERNAME]';
  var password = '[PASSWORD]';
  uri = 'https://gateway-a.watsonplatform.net/personality-insights/api/v3/profile?version=2016-10-20&consumption_preferences=true&raw_scores=true';

  var options = {
    'method': 'POST',
    'uri': uri,
    'headers': {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
    },
    'body': inputvariable
  };

  request(options, function(error, response,body) {
    if (error) {
      res.send(error.message);
    }

    jsonContent = JSON.parse(body); //parse response to JSON array
    // you can do whatever with the json here and return something else to calling app
    message = JSON.stringify(jsonContent); // just reset the jsonContent to string

    res.type('application/json');
    res.set('Content-Length', Buffer.byteLength(message));
    res.status(response.statusCode).send(message);
  });

});
// POST method ends here <--

console.log('Listening on ' + port);
app.listen(process.env.PORT || port);
