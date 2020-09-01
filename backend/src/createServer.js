const { GraphQLServer } = require('graphql-yoga');
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

const { ApolloServer } = require('apollo-server');

const prisma = require('./prisma');
const schema = require('./schema');

function createApolloServer() {
  return new ApolloServer({
    schema,
    context: ({ req, ...prisma }) => ({
      request: req,
      prisma,
    }),
    playground: process.env.NODE_ENV === 'development',
    debug: process.env.NODE_ENV === 'development',
  });
}

module.exports = { createServer, createApolloServer };
