const { Schema, model } = require('mongoose');
const {User} = require('./User');

const commentSchema = new Schema(
  {
    content: {
        type: String,
        required: true
    },
    commenter: User,
    upvotes: {
      type: Number,
    },
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Comment = model('Comment', commentSchema);

module.exports = Comment;
