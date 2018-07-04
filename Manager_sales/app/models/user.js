var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs')
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: String,
    username: { type: String, required: true, index: { unique: true }},
    password: { type: String, required: true, select: false }
})

userSchema.pre('save', (next) => {
  var user = this;

  // !user.isModified('password') && next();
   
  bcrypt.hash(user.password, null, null, function (err, hash) {
    err && next(err);

    user.password = hash;
    next();
  })
})

userSchema.methods.comparePassword = function (password) {
  var user = this;
  return bcrypt.compareSync(password, user.password);
}

module.exports = mongoose.model('User', userSchema);