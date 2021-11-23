const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: Post
  }

  type Topic {
    topicId: ID!
    question: String!
    comments: [Comment]
  }

  type Comment {
    commentId: ID!
    commenter: User
    content: String
    upvotes: Number
  }

  type Auth {
    token: ID!
    user: User
  }

  input CommentInput {
    commentId: ID!
    commenter: User
    content: String
    upvotes: Number
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addComment(commentData: CommentInput!): Topic
    removeComment(commentId: ID!): Topic
  }
`;

module.exports = typeDefs;
