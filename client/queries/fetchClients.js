import gql from 'graphql-tag'

export default gql `
    {
        clients{
            name,
            id
        }
    }
`;