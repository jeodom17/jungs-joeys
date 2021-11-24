const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Post]
  }

  type Topic {
    topicId: ID!
    question: String!
    posts: [Post]
  }

  type Post {
    postId: ID!
    author: User
    topic: Topic!
    content: String!
    comments: [Comment]
  }

  type Comment {
    commentId: ID!
    commenter: User
    content: String
    upvotes: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  input CommentInput {
    commentId: ID!
    commenter: User
    content: String
    upvotes: Int
  }

  input PostInput {
    postId: ID!
    topic: Topic!
    content: String!
    comments: [Comment]
  }


  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addPost(postData: PostInput!): Topic
    addComment(commentData: CommentInput!): Post
    removeComment(commentId: ID!): Post
  }
`;

module.exports = typeDefs;
