const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    args.name = args.name.trim();

    if (args.passwordConf != args.password) {
      return null;
    }

    const saltLength = 10;
    const password = await bcrypt.hash(args.password, saltLength);
    var permissions = null;

    // If first user, set them as an admin
    const users = await ctx.db.query.users();
    const userCount = users.length;

    userCount === 0
      ? (permissions = { set: ['USER', 'ADMIN'] })
      : (permissions = { set: ['USER'] });

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions,
        },
      },
      info,
    );

    // Create JWT for user
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // Set jwt as response cookie to take with them
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 245 * 365,
    });

    // Return the user with their set cookie
    return user;
  },

  async addFolk(parent, args, ctx, info) {
    console.log(args);

    args.name = args.name.toLowerCase();
    const folk = await ctx.db.mutation.createFolk(
      {
        data: {
          ...args,
        },
      },
      info,
    );

    return folk;
  },

  async addLanguage(parent, args, ctx, info) {
    console.log(args);

    const language = await ctx.db.mutation.createLanguage(
      {
        data: {
          ...args,
        },
      },
      info,
    );

    return language;
  },

  async addFeature(parent, args, ctx, info) {
    console.log(args);
    const feautre = await ctx.db.mutation.createFeature(
      {
        data: {
          ...args,
        },
      },
      info,
    );
    return feature;
  },
};

module.exports = Mutations;
