const { makeExecutableSchema } = require('apollo-server');
const { applyMiddleware } = require('graphql-middleware');
const { importSchema } = require('graphql-import');

const typeDefs = importSchema('./src/schema.graphql');
const { resolvers } = require('./resolvers');
// We have no middleware for now
// const middlewares = require('./middlewares');

const schema = makeExecutableSchema({ typeDefs, resolvers });
// if we had middleware, spread it into schema, like applyMiddleware(schema, ...middlewares);
const schemaWithMiddleware = applyMiddleware(schema);

module.exports = schemaWithMiddleware;
