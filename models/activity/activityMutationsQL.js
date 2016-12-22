import {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import ActivityType from './activityTypeQL.js';
import Activity from './activitySchema.js';

export default {
    addActivity: {
        type: ActivityType,
        args: { 
            type: { name:'type', type: new GraphQLNonNull(GraphQLString) },
            description: { name:'description', type: GraphQLString },
            quantity: { name:'quantity', type: new GraphQLNonNull(GraphQLInt) },
            completedDate: { name:'completedDate', type: GraphQLString },
            evidence: { name:'evidence', type: GraphQLString },
            employee:{ name:'employee', type: new GraphQLNonNull(GraphQLString) },
            notes: { name:'notes', type: GraphQLString }
        },
        resolve: (root, {type, description, quantity, completedDate, evidence, employee, notes}) => {
            var newActivity = new Activity({
                type:type, 
                description:description,
                quantity:quantity,
                completedDate:completedDate,
                evidence:evidence,
                employee:employee,
                notes:notes
            });

            return new Promise((resolve, reject) => {
                newActivity.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    updateActivity: {
        type: ActivityType,
        args: {
            id: { name:'id', type: new GraphQLNonNull(GraphQLID) }, 
            type: { name:'type', type: new GraphQLNonNull(GraphQLString) },
            description: { name:'description', type: GraphQLString },
            quantity: { name:'quantity', type: new GraphQLNonNull(GraphQLInt) },
            completedDate: { name:'completedDate', type: GraphQLString },
            evidence: { name:'evidence', type: GraphQLString },
            employee:{ name:'employee', type: new GraphQLNonNull(GraphQLString) },
            notes: { name:'notes', type: GraphQLString }
        },
        resolve: (root, {id, type, description, quantity, completedDate, evidence, employee, notes}) => {
            var updateActivity = Activity.getActivityByPosition(id);
            updateActivity.description = description;
            updateActivity.quantity = quantity;
            updateActivity.completedDate = completedDate;
            updateActivity.evidence = evidence;
            updateActivity.employee = employee;
            updateActivity.notes = notes;

            return new Promise((resolve, reject) => {
                updateActivity.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};