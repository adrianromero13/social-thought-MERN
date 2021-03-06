/* eslint-disable func-names */
const mongoose = require('mongoose');
const { isEmail, isLength } = require('validator');
const bcrypt = require('bcryptjs');

const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'You must provide a first name'],
  },
  lastName: {
    type: String,
    required: [true, 'You must provide a last name'],
  },
  email: {
    type: String,
    unique: true,
    validate: [isEmail, 'Please enter a valid email adress'],
    required: [true, 'You must provide an email address'],
  },
  password: {
    type: String,
    required: [true, 'You must provide a password'],
    validate: [(value) => isLength(value, { min: 6 }), 'Your password must be at least 6 characters long'],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
  friends: [{
    type: [Schema.Types.ObjectId],
    ref: 'Friends',
  }],
  // posts: [{
  //   type: [Schema.Types.ObjectId],
  //   ref: 'Posts',
  // }],
  // comments: [{
  //   type: [Schema.Types.ObjectId],
  //   ref: 'Comments',
  // }],
});

/**
 * @description dealing with user password identification and encrypting
 */
UserSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

UserSchema.methods.comparePassword = async function (candidatePassword) {
  const user = this;
  try {
    const isMatch = await bcrypt.compare(candidatePassword, user.password);
    return Promise.resolve(isMatch);
  } catch (e) {
    return Promise.reject(e);
  }
};

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    try {
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(user.password, salt);
      user.password = hash;
      next();
    } catch (e) {
      next(e);
    }
  }
  next();
});

module.exports = model('User', UserSchema);
