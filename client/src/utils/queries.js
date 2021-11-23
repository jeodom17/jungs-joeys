import { gql } from '@apollo/client';

const GET_ME = gql`
    {
        me{
            _id
            username
            email
            posts {
                content
                upvotes
            }
        }
        
    }
`;

export default GET_ME;