const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const mongoose = require('mongoose');
const Client = mongoose.model('client');
const ClientType = require('./client_type');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: GraphQLString },
        store: { type: GraphQLString }
      },
      resolve(parentValue, { name, store }) {
        return (new Client({ name, store })).save()
      }
    },
    addChipToClient: {
      type: ClientType,
      args: {
        chipNumber: { type: GraphQLInt },
        clientId: { type: GraphQLID },
        phoneNumber: {type: GraphQLInt},
         provider: {type: GraphQLString},
          technician: {type: GraphQLString}, 
          date: {type: GraphQLString}
      },
      resolve(parentValue, {  clientId, chipNumber, phoneNumber, provider, technician, date }) {
        return Client.addChip( clientId, chipNumber, phoneNumber, provider, technician, date );
      }
    },
    deleteClient: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Client.remove({ _id: id });
      }
    }
  }
});

module.exports = mutation;
