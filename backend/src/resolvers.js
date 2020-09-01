const { extractFragmentReplacements } = require('prisma-binding');

const resolvers = {
  Query: require('./resolvers/Query'),
  Mutation: require('./resolvers/Mutation'),
  // We don't have any authedPayloads for now
  // AuthPayload: require('./resolvers/AuthPayload')
};

module.exports = {
  resolvers,
  fragmentReplacements: extractFragmentReplacements(resolvers),
};
