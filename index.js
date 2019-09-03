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

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`App listening on port 8080`);
  console.log('Press Ctrl+C to quit.');
});
