const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


let express = require('express');
let app = express();

// To handle HTTP Get request
app.get('/', function (req, res) {
  console.log('GET REQUEST:');
  res.send('Get Request');
})

app.put('/', function (req, res) {
  console.log("HTTP Put Request");
  res.send("HTTP PUT Request");
});

app.post('/', function (req, res) {
  console.log("HTTP POST Request");
  res.send("HTTP POST Request");  
});

app.delete('/', function (req, res) {
  console.log("HTTP DELETE Request");
  res.send("HTTP DELETE Request");
});

// Start server on Port 8080
let server = app.listen(8080, function() {
  
  let host = server.address().address;
  let port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);

})