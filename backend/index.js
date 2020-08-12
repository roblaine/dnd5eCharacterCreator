import { GraphQLServer } from 'graphql-yoga';

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `hello ${name || 'world'}`,
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server is running on http://127.0.0.1:4000'));
