const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: '.env' });
const createServer = require('./createServer');
const db = require('./db');
const logger = require('./utils/logger');

logger.warn({
  message: 'Starting Server',
});
const server = createServer();

server.express.use(cookieParser());

// decode the JWT to extract the user id
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    // Put the userid on to further requests
    req.userId = userId;
  }
  next();
});

// Middleware to populate the user on each request
server.express.use(async (req, res, next) => {
  if (!req.userId) {
    return next();
  }

  const user = await db.query.user(
    { where: { id: req.userId } },
    `{ id, email, name }`,
  );

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
    console.log(`Server is now running on http://localhost:${deets.port}`);
  },
);
