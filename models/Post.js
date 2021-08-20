const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const PostSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  comments: [{
    type: [Schema.Types.ObjectId],
    ref: 'Comment',
  }],
  user: { type: Schema.Types.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = model('Post', PostSchema);
