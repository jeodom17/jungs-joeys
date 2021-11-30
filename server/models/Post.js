const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    topic: {
      type: Schema.Types.ObjectId,
      ref: 'Topic'
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
