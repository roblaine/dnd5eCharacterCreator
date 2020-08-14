const { forwardTo } = require('prisma-binding');

const Query = {
  // async users(parent, args, ctx, info) {
  //   console.log('getting users');
  //   return ctx.db.query.users({}, info);
  // },
  user: forwardTo('db'),
  users: forwardTo('db'),
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
console.log(Query);

module.exports = Query;
