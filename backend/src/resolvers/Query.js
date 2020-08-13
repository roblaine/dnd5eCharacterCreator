const Queries = {
  async me(parent, args, ctx, info) {
    // check if the userId is set
    if (!ctx.request.userId) {
      return null;
    }
    // Return a promise containing the user that is currently logged in
    return await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );
  },
};
console.log(Queries);

module.exports = Queries;
