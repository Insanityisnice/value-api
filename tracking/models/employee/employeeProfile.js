var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var employeeProfileSchema = new Schema({
    email: String,
    tags: Object
});

module.exports = Mongoose.model('EmployeeProfile', employeeProfileSchema)
