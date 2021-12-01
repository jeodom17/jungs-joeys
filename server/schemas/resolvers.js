const { AuthenticationError } = require('apollo-server-express');
const { User, Topic, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id }).select('-__v -password');

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },

        getTopicByName: async (parent, args) => {
            const postData = await Topic.findOne({ name: args.name }).populate({
                path: 'posts',
                populate: [
                    {
                        path: 'author',
                        model: 'User'
                    },
                    {
                        path: 'comments',
                        model: 'Comment',
                        populate: {
                            path: 'author',
                            model: 'User'
                        },
                    },
                    {
                        path: 'comments',
                        model: 'Comment',
                        populate: {
                            path: 'author',
                            model: 'User'
                        }
                    }
                ]
            });
            return postData;
        },
        getTopics: async () => {
            return Topic.find();
        },
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);

            if (!user) {
                throw new AuthenticationError('user not created');
            }
            const token = signToken(user);

            if (!token) {
                throw new AuthenticationError('token not signed');
            }

            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            console.log(password)
            if (!user) {
                throw new AuthenticationError('No user exists');
            }

            const correctPw = await user.isCorrectPassword(password);
            console.log(correctPw)
            // if (!correctPw) {
            //     throw new AuthenticationError('Incorrect password');
            // }

            const token = signToken(user);
            return { token, user };
        },
        addPost: async (parent, { postData }, context) => {
            if (context.topic) {
                const updatedTopic = await Topic.findByIdAndUpdate(
                    { _id: context.topic._id },
                    { $push: { posts: postData } },
                    { new: true }
                );

                return updatedTopic;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        createComment: async(parent, {commentData}, context) => {
            const newComment = await Comment.create({
                content: commentData.content,
                author: commentData.author
            });

            return newComment;
        },
        addComment: async (parent, { commentData }, context) => {
            if (context.post) {
                const updatedPost = await Post.findByIdAndUpdate(
                    { _id: context.post._id },
                    { $push: { comments: commentData } },
                    { new: true }
                );

                return updatedPost;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        removeComment: async (parent, { commentId }, context) => {
            if (context.topic) {
                const updatedTopic = await Topic.findOneAndUpdate(
                    { _id: context.topic._id },
                    { $pull: { comments: { commentId } } },
                    { new: true }
                );

                return updatedTopic;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        createPost: async (parent, {postData}, context) => {
            const newPost = await Post.create({
                content: postData.content,
                author: postData.author,
                topic: postData.topic
            })
            return newPost;
        }

    },
};

module.exports = resolvers;
