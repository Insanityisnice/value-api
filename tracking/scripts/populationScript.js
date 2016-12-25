const mongoose =require('mongoose');

const Activity = require('../Models/activity/activitySchema.js');

mongoose.connect('mongodb://test:tracking@ds054289.mlab.com:54289/tracking');

let fristActivity = new Activity({
  type:'type1',
  description: 'first description',
  quantity: 12,
  completedDate: Date.Now,
  evidence: 'No evidence',
  employee:'Ganesh Anthati',
  notes: 'test notes'
});

let secondActivity = new Activity({
  type:'type2',
  description: 'second description',
  quantity: 22,
  completedDate: Date.Now,
  evidence: 'No evidence',
  employee:'Ganesh Anthati',
  notes: 'test notes'
});
new Promise((resolve, reject) => {
  console.log('in the promise');
    fristActivity.save((err, res) => {
        err ? console.log(err): resolve(res);
    });
});

secondActivity.save();
setTimeout(function() {
  console.log(secondActivity._id);
  mongoose.disconnect();
}, 1000);
