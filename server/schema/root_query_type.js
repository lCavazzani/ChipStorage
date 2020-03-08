const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull, GraphQLString } = graphql;
const ClientType = require('./client_type');
const ChipType = require('./chip_type');
const Chip = mongoose.model('chip');
const Client = mongoose.model('client');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    clients: {
      type: new GraphQLList(ClientType),
      resolve() {
        return Client.find({});
      }
    },
    client: {
      type: ClientType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Client.findById(id);
      }
    },
    clientByName: {
      type: new GraphQLList(ClientType),
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(parentValue, { name }) {
        return Client.find({name});
      }
    },
    chip: {
      type: ChipType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Chip.findById(id);
      }
    }
  })
});

module.exports = RootQuery;
