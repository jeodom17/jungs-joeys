const { Schema, model } = require('mongoose');
const {Post} = require('./Post');

const topicSchema = new Schema(
  {
    question: {
        type: String,
        required: true
    },
    posts: [Post]
  },
);

const Topic = model('Topic', topicSchema);

module.exports = Topic;
