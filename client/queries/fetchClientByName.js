import gql from 'graphql-tag'

export default gql `
query ClientQueryByName($name: String!) {
    clientByName(name: $name){
        name,
        id,
        store,
        chips {
            id,
            chipNumber,
            phoneNumber,
            provider,
            technician,
            date,
        }
    }
}
`;