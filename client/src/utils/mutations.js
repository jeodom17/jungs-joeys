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

export const ADD_POST = gql`
  mutation addPost($postData: PostInput!) {
    addPost(postData: $postData) {
      topicId
      question
      posts {
          postId
          author {
            username
          }
          content
          comments {
              commentId
              author {
                username
              }
              content
              upvotes
          }
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($commentData: CommentInput!) {
    addComment(commentData: $commentData) {
        postId
        author {
          username
        }
        content
        comments {
            commentId
            author {
              username
            }
            content
            upvotes
        }
    }
  }
`;

export const REMOVE_COMMENT = gql`
    mutation removeComment($commentId: ID!) {
        removeComment(commentId: $commentId) {
            postId
            author {
              username
            }
            content
            comments {
                commentId
                author {
                  username
                }
                content
                upvotes
            }
        }
    }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($content: String!, $author: User!, $upvotes: Int!) {
    createComment(content: $content) {
      comment {
        content
        author {
          username
        }
        upvotes
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($content: String!, $author: User!, $topic: Topic!) {
    createPost(content: $content, author: $author, topic: $topic) {
      postId
      content
      
    }
  }
`;
