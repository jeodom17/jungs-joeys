import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
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

export const GET_TOPICS = gql`
    {
        getTopics {
            name
            question
            posts {
                content
                author {
                    username
                }
            }
        }
    }
`;

export const GET_TOPIC_BY_NAME = gql`
query getTopicByName($name: String) {
    getTopicByName(name: $name) {
        name
        question
        posts {
            content
            author {
                username
            }
            comments {
                content
                author {
                    username
                }
                upvotes
            }
        }
    }
}
`;
