import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      posts {
        bookId
        authors
        image
        description
        title
        link
      }
    }
  }
`;
