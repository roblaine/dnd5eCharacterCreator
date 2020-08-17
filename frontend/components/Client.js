import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const cache = new InMemoryCache();
const link = createHttpLink({
  uri: process.env.APOLLO_URI,
});
console.log(process.env.APOLLO_URI);

const client = new ApolloClient({
  link,
  cache,
});

export default client;
