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
  templateClass: forwardTo('db'),
  templateClasses: forwardTo('db'),
  // TODO make these queries require a logged in user and retrieve only their characters
  characterClass: forwardTo('db'),
  characterClasses: forwardTo('db'),

  async characters(parent, args, ctx, info) {
    const userId = ctx.request.userId;
    if (!userId) {
      return new Error(`You must be logged in to do that.`);
    }

    const characters = await ctx.db.query.characters(
      {
        where: { user: { id: userId } },
      },
      info,
    );
    return characters;
  },

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
