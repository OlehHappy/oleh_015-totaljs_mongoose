var mongoose = require('mongoose');
var userSchema = mongoose.Schema({ alias: String, created: Date })
exports.schema = mongoose.model('user', userSchema);
exports.name = 'user';

// compile our model
// var Person = mongoose.model('User', userSchema);

// create a document
// var record = new Person();
//
// record.alias = 'test Alias';
// record.created = new Date();
//
// record.save(function() {
//   User.find().all(function(arr) {
//      console.log(arr);
//      console.log('length='+arr.length);
//    });
// });
