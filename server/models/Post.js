const { Schema, model } = require('mongoose');
const {User} = require('./User');
const {Comment} = require('./Comment');

const postSchema = new Schema(
  {
    content: {
        type: String,
        required: true
    },
    poster: User,
    comments: [Comment],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
