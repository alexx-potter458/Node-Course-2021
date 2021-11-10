const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {},
})

module.exports = mutationType;