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
