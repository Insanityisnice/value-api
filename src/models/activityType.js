var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var activityTypeSchema = new Schema({
    name: String,
    category: String,
    description: String,
    value: Number,
    requiresEvidence: Boolean,
    minQuantity: Number,
    maxQuantity:Number,
    tags: Object
});

module.exports = Mongoose.model('ActivityType', activityTypeSchema)