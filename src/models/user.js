const mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const UserSchema = new Schema({
  email: {type: String, required: true, unique: true},
  password: {type: String, required: true}
});

UserSchema.set('toObject', {
  virtuals: true,
  transform: (doc, result) => {
    delete result._id;
    delete result.__v;
    delete result.password;
  }
});

module.exports = mongoose.model('User', UserSchema);