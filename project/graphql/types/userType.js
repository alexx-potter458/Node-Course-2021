const {GraphQLObjectType, GraphQLString, GraphQLID} = require('graphql');

const userType = new GraphQLObjectType({
    name: 'Users',
    fields: {
        id: {
            type: GraphQLID,
        },
        email: {
            type: GraphQLString
        },
        firstname: {
            type: GraphQLString
        },
        lastname: {
            type: GraphQLString
        },
    }
});

module.exports = userType