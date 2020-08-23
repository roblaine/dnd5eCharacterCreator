const { GraphQLServer } = require('graphql-yoga');
const { ApolloServer } = require('apollo-server');
const Mutation = require('./resolvers/Mutation');
const Query = require('./resolvers/Query');
const db = require('./db');

// Create the GraphQL Yoga server
function createServer() {
  return new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    resolverValidationOptions: {
      requireResolversForResolveType: false,
    },
    context: req => ({ ...req, db }),
  });
}

// TODO import graphql-tag and import the schema.graphql file as AST
// Create an instance of apolloServer
function createApolloServer() {
  return new ApolloServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
      Mutation,
      Query,
    },
    context: ({ req }) => ({ ...req, db }),
  });
}

module.exports = createServer;
