const { Schema, model } = require('mongoose');
const {User} = require('./User');
const {Post} = require('./Post');

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
    post: Post
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
