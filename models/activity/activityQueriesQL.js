import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLList,
    GraphQLID
} from 'graphql';

import ActivityType from './activityTypeQL.js';
import Activity from './activitySchema.js';

export default {
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
