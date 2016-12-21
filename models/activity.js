var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var activitySchema = new Schema({
    activityType: String,
    description: String,
    quantity: Number,
    completedDate: Date,
    evidence: URL,
    employee:String,
    notes: String
});

module.exports = Mongoose.model('Activity', activitySchema)