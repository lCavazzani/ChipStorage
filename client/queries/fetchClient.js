import gql from 'graphql-tag'

export default gql `
query ClientQuery($id: ID!) {
    client(id: $id){
        name,
        id
    }
}
`;