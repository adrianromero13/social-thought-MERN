const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const CommentSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    enums: [
      0, // accepted
      1, // deleted
    ],
    default: 0,
  },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = model('Comment', CommentSchema);
