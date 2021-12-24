const { 
    GraphQLObjectType, 
    GraphQLString,
    GraphQLID,
    GraphQLList,
  } = require('graphql');
  
  
  module.exports = new GraphQLObjectType({
    name: 'Post',
    fields: () => { 
      const userType = require('./userType');
      const commentType = require('./commentType');
  
      return ({
        id: {
          type: GraphQLID,
        },
        title: {
          type: GraphQLString,
        },
        body: {
          type: GraphQLString,
        },
        comments: {
          type: new GraphQLList(commentType),
          resolve: async (source) => {
            return await source.getComments();
          }
        },
        author: {
          type: userType,
          resolve: async (source) => {
            return await source.getUser();
          }
        }
      })}
  });