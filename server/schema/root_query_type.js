const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const ClientTyoe = require('./client_type');
const ChipType = require('./chip_type');
const Chip = mongoose.model('chip');
const Client = mongoose.model('client');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    clients: {
      type: new GraphQLList(ClientTyoe),
      resolve() {
        return Client.find({});
      }
    },
    client: {
      type: ClientTyoe,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Client.findById(id);
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
