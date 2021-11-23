import { gql } from '@apollo/client';

const LOGIN_USER = gql`
    mutation login {
        email
        password
    }
`;

const ADD_USER = gql`
    mutation addUser {
        email
        username
        password
    }
`;

const ADD_COMMENT = gql`
    mutation addComment {
        commentData
    }
`;

const REMOVE_COMMENT = gql`
    mutation removeBook {
        commentId
    }
`;

export default {LOGIN_USER, ADD_USER, ADD_COMMENT, REMOVE_COMMENT};