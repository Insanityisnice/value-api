// schema.js
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
  } from 'graphql';

import mongoose from 'mongoose';
import Activity from './models/activity/activitySchema.js';

import {
  ActivityQueries,
  ActivityMutations,
  ActivityType
} from './models/activity/activityQL.js';


let RootQuery = new GraphQLObjectType({
  name: 'Query',      //Return this type of object
  fields: () => ({
    activity: ActivityQueries.activity,
    activitys: ActivityQueries.activities
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
export default schema;
