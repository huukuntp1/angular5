var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
})

userSchema.methods.comparePassword = function(password) {
  var user = this;
  var crrPass = bcrypt.hashSync(user.password);

  return bcrypt.compareSync(password, crrPass);
}

module.exports = mongoose.model('User', userSchema);