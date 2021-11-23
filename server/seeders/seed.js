const db = require('../config/connection');
const { User, Topic, Post, Comment } = require('../models');
const userSeeds = require('./userSeeds.json');
const topicSeeds = require('./topicSeeds.json');
const postSeeds = require('./postSeeds.json');
const commentSeeds = require('./commentSeeds.json');


db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Topic.deleteMany({});
        await Post.deleteMany({});
        await Comment.deleteMany({});

        await User.create(userSeeds);
        await Topic.create(topicSeeds);
        await Post.create(postSeeds);
        await Comment.create(commentSeeds);

        console.log('all done!');
        process.exit(0);
    } catch (err) {
        throw err;
    }
});
