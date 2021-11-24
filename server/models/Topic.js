const { Schema, model } = require('mongoose');

const topicSchema = new Schema(
  {
    question: {
      type: String,
      required: true
    },
    posts: [{
      type: Schema.Types.ObjectId,
      ref: 'Post'
    }]
  },
);

const Topic = model('Topic', topicSchema);

module.exports = Topic;
