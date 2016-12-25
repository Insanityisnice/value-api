const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} = require('graphql');

const Activity = require('./activitySchema.js');

module.exports = new GraphQLObjectType({
    name: 'Activity',
    description: 'An activity being tracked.',
    fields: () => ({
        _id: { type: new GraphQLNonNull(GraphQLID) },
        type: { type: GraphQLString },
        description:  { type: GraphQLString },
        quantity:  { type: GraphQLInt },
        completedDate:  { type: GraphQLString },
        evidence:  { type: GraphQLString },
        employee: { type: GraphQLString },
        notes:  { type: GraphQLString }
    })
});
