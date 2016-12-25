// schema.js
const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} = require('graphql');

const mongoose =  require('mongoose');
const Activity =  require('./models/activity/activitySchema.js');

const {
  ActivityQueries,
  ActivityMutations,
  ActivityType
} =  require('./models/activity/activityQL.js');


let RootQuery = new GraphQLObjectType({
  name: 'Query',      //Return this type of object
  fields: () => ({
    activity: ActivityQueries.activity,
    activities: ActivityQueries.activities
  })
});


let RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    addActivity: ActivityMutations.addActivity
  })
});

console.log(RootQuery);
console.log(RootMutation);

let schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation
});

module.exports = schema;
