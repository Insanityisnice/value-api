const mongoose = require('mongoose');

let ActivitySchema = new mongoose.Schema({
    id: { type:String, required:true, unique:true, index:true, default:mongoose.Types.ObjectId },
    type: String,
    description: String,
    quantity: Number,
    completedDate: Date,
    evidence: String,
    employee:String,
    notes: String
});

ActivitySchema.set('toJSON', { getters: true});

let Activity = mongoose.model('Activity', ActivitySchema);

module.exports = Activity;

module.exports.getActivityByPosition = (root, {id}) => {
    return new Promise((resolve, reject) => {
        Activity.find({}).exec((err, res) => {
            err ? reject(err) : resolve(res[id]);
        });
    });
};

module.exports.updateActivity = (activity) => {
    return new Promise((resolve, reject) => {
        activity.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};

module.exports.getListOfActivities = () => {
    return new Promise((resolve, reject) => {
        Activity.find({}).exec((err, res) => {
            err ? reject(err) : resoslve(res);
        });
    });
};
