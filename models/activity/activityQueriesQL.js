import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import ActivityType from './activityTypeQL.js';
import Actiivty from './activitySchema.js';

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