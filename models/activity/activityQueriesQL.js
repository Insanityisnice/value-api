const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} = require('graphql');

const ActivityType = require('./activityTypeQL.js');
const Activity= require('./activitySchema.js');

module.exports = {
    activities: {
        type: new GraphQLList(ActivityType),
        resolve: Activity.getListOfActivities
    },
    activity: {
        type: ActivityType,
        args: {
            id: { type: GraphQLID }
        },
        resolve: Activity.getActivityByPosition
    }
};
