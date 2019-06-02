const express = require('express');
const forceDomain = require('forcedomain');
const path = require('path');

const app = express();

app.use(forceDomain({
  hostname: 'www.wixware.com',
  protocol: 'https'
}));

// Serve the static files from React App
app.use(express.static(path.join(__dirname, 'client/build')));

// Firebase dependencies
const admin = require('firebase-admin');

// Initializing firebase admin with default project on Google Cloud
admin.initializeApp({
  credential: admin.credential.applicationDefault()
});

// Initializing Firestore
const db = admin.firestore();

let docRef = db.collection('users').doc('ranajahanzaib');

// This is how you write data into Firestore
// let setRJ = docRef.set({
//   first_name: 'Rana',
//   last_name: 'Jahanzaib',
//   email: 'iam@ranajahanzaib.com'
// });


// This is how you GET data from Firestore
let appRef = db.collection('apps').doc('zero');
let getDoc = appRef.get()
  .then(doc => {
    if(!doc.exists) {
      console.log('No such document found');
    } else {
      console.log('Document data:', doc.data());
    }
  })
  .catch(err => {
    console.log('Error getting document', err);
  });

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
  let list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port 8080`);
  console.log('Press Ctrl+C to quit.');
});
