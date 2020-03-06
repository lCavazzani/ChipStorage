const mongoose = require('mongoose');
const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLID,
  GraphQLInt,
  GraphQLString
} = graphql;
const Chip = mongoose.model('chip');

const ChipType = new GraphQLObjectType({
  name:  'ChipType',
  fields: () => ({
    id: { type: GraphQLID },
    chipNumber: {type: GraphQLInt},
    phoneNumber: { type: GraphQLInt },
    provider: { type: GraphQLString },
    technician: { type: GraphQLString },
    date: { type: GraphQLString },
    client: {
      type: require('./client_type'),
      resolve(parentValue) {
        return Chip.findById(parentValue).populate('client')
          .then(chip => {
            console.log(chip)
            return chip.client
          });
      }
    }
  })
});

module.exports = ChipType;
