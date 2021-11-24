const { Schema, model } = require('mongoose');
const { userSchema } = require('./User');
const { commentSchema } = require('./Comment');

const postSchema = new Schema(
  {
    content: {
      type: String,
      required: true
    },
    poster: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
    ],
  },
);

const Post = model('Post', postSchema);

module.exports = Post;
