const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const FriendsSchema = new Schema({
  requester: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  recepient: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  status: {
    type: Number,
    enums: [
      0, // add friend,
      1, // requested
      2, // pending
      3, // friends
    ],
  },
}, { timestamps: true });

module.exports = model('Friends', FriendsSchema);
