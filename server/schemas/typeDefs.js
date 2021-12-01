const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Post]
  }
  
  type Topic {
    _id: ID!
    name: String!
    posts: [Post]
  }

  type Post {
    postId: ID
    author: User
    topic: Topic!
    question: String!
    content: String!
    comments: [Comment]
  }

  type Comment {
    commentId: ID!
    author: User
    content: String
    upvotes: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input CommentInput {
    commentId: ID!
    author: String!
    content: String!
    upvotes: Int
  }

  input AuthorCommentInput {
    userId: ID!
    username: String!
  }

  input AuthorPostInput {
    userId: ID!
    username: String!
  }

  input TopicPostInput {
    topicId: ID!
    name: String!
  }

  input PostInput {
    question: String!
    content: String!
    comments: [String]
  }

  type Query {
    me: User
    getTopicByName(name: String!): Topic
    getTopics: [Topic]!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postData: PostInput!): Topic
    removeComment(commentId: ID!): Post
    addComment(postId: ID!): Post
    createComment(content: String!, author: AuthorCommentInput!): Comment
    createPost(content: String!, author: AuthorPostInput!, topic: TopicPostInput!): Post
  }
  `;
  // addComment(commentData: CommentInput!): Post
module.exports = typeDefs;
