const mongoose=require('mongoose');
const {graphql} = require('graphql');
const schema = require('./schema.js');
mongoose.connect('mongodb://test:tracking@ds054289.mlab.com:54289/tracking');
module.exports = function(context, req) {

  graphql(schema, req.body)
    .then((result) => {
       context.log(result);
      res = result;
    });
    context.done(null, res);
};
