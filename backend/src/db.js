// Connects to remote Prisma db and add js querying
const { PrismaClient } = require('@prisma/client');

const db = new PrismaClient({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: process.env.PRISMA_ENDPOINT,
  secret: process.env.PRISMA_SECRET,
  debug: process.env.PRISMA_DEBUG,
});

module.exports = db;
