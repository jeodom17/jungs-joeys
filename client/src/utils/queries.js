import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me{
            _id
            username
            email
            posts {
                content
                comments{
                    commenter
                    content
                    upvotes
                }
            }
        }
    }
  
`;

//******* add topic below  ******************

export const GET_POSTS = gql`
query getPosts($topic: ID!) {
    getPosts(topic: $topic) {
        author {
          username
        }
        content
        comments {
            content
            author {
                username
            }
            upvotes
        }
    }
}
`
