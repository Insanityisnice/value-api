const mongoose=require('mongoose');
mongoose.connect('mongodb://test:tracking@ds054289.mlab.com:54289/tracking');
module.exports = function(context, req) {
  graphql(schema, req.body)
    .then((result) => {
      res = rsult;
    });
    context.done(null, res);
};
