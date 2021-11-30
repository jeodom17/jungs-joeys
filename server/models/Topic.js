const { Schema, model } = require('mongoose');

// ***********
// * MIGHT WANT TO INCLUDE topic name so it can be associated with the categories on Forum
//* (added, might need editing)
// ***********

const topicSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }],
  },
);

const Topic = model('Topic', topicSchema);

module.exports = Topic;
