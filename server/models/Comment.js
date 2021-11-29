const { Schema, model } = require('mongoose');


// ***********

// * MIGHT WANT TO INCLUDE postID to link comment to its post

// ***********

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
