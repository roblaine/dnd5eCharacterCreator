// Connects to remote Prisma db and add js querying
const { Prisma } = require('prisma-binding');
const logger = require('./utils/logger');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: process.env.PRISMA_DEBUG,
});

logger.info({
  message: `Creating database connection to ${process.env.PRISMA_ENDPOINT}`,
});

module.exports = db;
