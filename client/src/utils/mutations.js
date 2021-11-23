import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentData: CommentInput!) {
    addComment(bookData: $commentData) {
      topicId
      question
      comments {
          commentId
          commenter
          content
          upvotes
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($commentId: ID!) {
        removeComment(commentId: $commentId) {
            topicId
            question
            comments {
                commentId
                commenter
                content
                upvotes
            }
        }
    }
`;
