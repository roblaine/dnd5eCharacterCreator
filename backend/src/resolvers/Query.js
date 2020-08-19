const { forwardTo } = require('prisma-binding');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Query = {
  user: forwardTo('db'),
  users: forwardTo('db'),
  folk: forwardTo('db'),
  folks: forwardTo('db'),
  language: forwardTo('db'),
  languages: forwardTo('db'),
  characters: forwardTo('db'),

  async me(parent, args, ctx, info) {
    // Return a promise containing the user that is currently logged in
    return await ctx.db.query.user(
      {
        where: { id: ctx.request.name },
      },
      info,
    );
  },
};

module.exports = Query;
