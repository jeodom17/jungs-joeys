const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    upvotes: {
      type: Number,
      min: 0
    },
  },
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
