const { Schema, model } = require('mongoose');
const {Comment} = require('./Comment');

const topicSchema = new Schema(
  {
    question: {
        type: String,
        required: true
    },
    comments: [Comment]
  },

);

const Topic = model('Topic', topicSchema);

module.exports = Topic;
