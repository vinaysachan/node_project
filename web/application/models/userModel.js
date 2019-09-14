const mongoose  = require('mongoose');

var userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password:String,
    mobile:Number
  }, { collection: 'user' });


module.exports = mongoose.model('user', userSchema);