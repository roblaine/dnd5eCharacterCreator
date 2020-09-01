require('dotenv').config({ path: '.env' });
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const { createServer, createApolloServer } = require('./createServer');
const db = require('./db');
const logger = require('./utils/logger');

logger.info({
  message: 'Starting server',
});

const server = createServer();
console.log(server);
server.express.use(cookieParser());

// decode the JWT to extract the user id
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Put the userid on to further requests
    req.userId = userId;

    logger.info({
      message: `Current userID set to ${userId}`,
    });
  }
  next();
});

// Middleware to populate the user on each request
server.express.use(async (req, res, next) => {
  if (!req.userId) {
    logger.info(`No userID is set yet.`);
    return next();
  }

  const user = await db.query.user(
    { where: { id: req.userId } },
    `{ id, email, name }`,
  );

  logger.info({
    message: `Current user set to ${user}`,
  });

  req.user = user;
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL,
    },
  },
  deets => {
    logger.info(`Server is now running on http://localhost:${deets.port}`);
  },
);
