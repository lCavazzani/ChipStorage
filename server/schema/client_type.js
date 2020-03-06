const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const ChipType = require('./chip_type');
const Client = mongoose.model('client');

const ClientType = new GraphQLObjectType({
  name:  'ClientType',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    store: { type: GraphQLString },
    chips: {
      type: new GraphQLList(ChipType),
      resolve(parentValue) {
        return Client.findChips(parentValue.id);
      }
    }
  })
});

module.exports = ClientType;
