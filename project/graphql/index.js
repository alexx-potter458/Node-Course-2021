const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require('graphql');

const query = require('./queryType');
const mutation = require('./mutationType')

const schema = new GraphQLSchema({
    query: query,
    mutation: mutation,
});

module.exports = schema;