const express = require('express');
const schema = require('./schema.js');
console.log('loaded till schema');

const {graphql} = require('graphql');
const bodyparser = require('body-parser');

const mongoose =  require('mongoose');

let db = mongoose.connection;

let app = express();
let PORT = 9000;

//Let's use the body-parser middleware
app.use(bodyparser.text({type: 'application/graphql'}));

app.use('/node_modules', express.static('node_modules'));
app.use('/', express.static('index.html'));
console.log('loaded till express');
app.post('/', (req, res) => {
  //Execute the query
  graphql(schema, req.body)
    .then((result) => {
      res.send(result);
    });
});

let server = app.listen(PORT, function () {
  console.log(`Server listening at ${PORT}`);
  mongoose.connect('mongodb://test:tracking@ds054289.mlab.com:54289/tracking');
});
