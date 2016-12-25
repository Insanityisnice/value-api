// import mongoose from 'mongoose';
// import schema from './models/activity/activitySchema.js'
// let db = mongoose.connection;
//
// mongoose.connect('mongodb://test:tracking@ds054289.mlab.com:54289/tracking');
//
// module.exports = function(context, req) {
//   graphql(schema, req.body)
//     .then((result) => {
//       res = result;
//     });
//     context.done(null, res);
// };
import express from 'express';
import schema from './schema.js';
console.log('loaded till schema');

import {graphql} from 'graphql';
import bodyparser from 'body-parser';

import mongoose from 'mongoose';

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
