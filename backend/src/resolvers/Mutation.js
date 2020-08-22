const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Mutations = {
  async signup(parent, args, ctx, info) {
    email = args.email.toLowerCase();
    name = args.name.trim();

    // Pass a salt length of 10
    const password = await bcrypt.hash(args.password, 10);
    var permissions = null;

    // If first user, set them as an admin
    const users = await ctx.db.query.users();

    users.length === 0
      ? (permissions = { set: ['USER', 'ADMIN'] })
      : (permissions = { set: ['USER'] });

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          name: args.name,
          email: args.email,
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

  async login(parent, { email, password }, ctx, info) {
    email = email.toLowerCase();

    const user = await ctx.db.query.user({
      where: { email },
    });

    if (!user) {
      throw new Error(`Invalid username or password`);
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error(`Invalid username or password`);
    }

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
