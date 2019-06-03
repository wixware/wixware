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


// This is how you write data into Firestore
// let setRJ = docRef.set({
//   first_name: 'Rana',
//   last_name: 'Jahanzaib',
//   email: 'iam@ranajahanzaib.com'
// });


// // This is how you GET data from Firestore
// let citiesRef = db.collection('cities');

// let setSf = citiesRef.doc('SF').set({
//   name: 'San Francisco', state: 'CA', country: 'USA',
//   capital: false, population: 860000
// });
// let setLa = citiesRef.doc('LA').set({
//   name: 'Los Angeles', state: 'CA', country: 'USA',
//   capital: false, population: 3900000
// });
// let setDc = citiesRef.doc('DC').set({
//   name: 'Washington, D.C.', state: null, country: 'USA',
//   capital: true, population: 680000
// });
// let setTok = citiesRef.doc('TOK').set({
//   name: 'Tokyo', state: null, country: 'Japan',
//   capital: true, population: 9000000
// });
// let setBj = citiesRef.doc('BJ').set({
//   name: 'Beijing', state: null, country: 'China',
//   capital: true, population: 21500000
// });




// function getList() {

//   function getCollections(db) {
//     // [START get_collections]
//     var sfRef = db.collection('cities').doc('SF');
//     sfRef.getCollections().then(collections => {
//       collections.forEach(collection => {
//         console.log('Found subcollection with id:', collection.id);
//       });
//     });
//     // [END get_collections]
//   }
//   res.json(list);
//   console.log('Sent list of items');

// }

// Get all documents in a collection
// let citiesRef = db.collection('cities');
// let allCities = citiesRef.get()
//   .then(snapshot => {
//     snapshot.forEach(doc => {
//       console.log(doc.id, '=>', doc.data());
//     });
//   })
//   .catch(err => {
//     console.log('Error getting documents', err);
//   });


// This is how you get single document
// let cityRef = db.collection('apps').doc('zero');
// let getDoc = cityRef.get()
//   .then(doc => {
//     if (!doc.exists) {
//       console.log('No such document!');
//     } else {
//       list = doc.data();
//     }
//   })
//   .catch(err => {
//     console.log('Error getting document', err);
//   });

// API ENDPOINT /get 

let list = {};

let appsRef = db.collection('users');
let allApps = appsRef.get()
  .then(snapshot => {
    let i = 0;
    snapshot.forEach(doc => {
      list[i] = doc.id;
      i++;
    });
  })
  .catch(err => {
    console.log('Erorr getting documents', err);
  });

// An api endpoint that returns a short list of items
app.get('/api/get/', (req,res) => {
  res.json(list);
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
