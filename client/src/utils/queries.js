import { gql } from '@apollo/client';

const GET_ME = gql`
    query me {
        _id
    }
`;

export default GET_ME;