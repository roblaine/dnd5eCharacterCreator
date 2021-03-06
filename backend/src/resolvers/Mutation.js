const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { templateClass } = require('./Query');

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

    const checkEmail = await ctx.db.query.user({
      where: { email },
    });

    if (checkEmail && checkEmail.email) {
      throw new Error(`The entered email address is already in use.`);
    }

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
    console.log(`Returning user:`);
    console.log(user);
    return user;
  },

  signout(parents, args, ctx, info) {
    ctx.response.clearCookie('token');

    return { message: 'You have been signed out.' };
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
    const feature = await ctx.db.mutation.createFeature(
      {
        data: {
          ...args,
        },
      },
      info,
    );
    return feature;
  },

  async addTemplateClass(parent, args, ctx, info) {
    const userId = ctx.request.userId;
    if (!userId) {
      throw new Error(`You must be logged in to do that.`);
    }

    const user = await ctx.db.query.user({ where: { id: userId } });
    if (!user.permissions.includes('ADMIN')) {
      throw new Error(`You aren't permitted to do that.`);
    }

    const templateClass = await ctx.db.mutation.createTemplateClass(
      {
        data: {
          name: args.name,
          connect: [{ id: args.features }],
        },
      },
      info,
    );
    return templateClass;
  },

  async addCharacterClass(parent, args, ctx, info) {
    const templateClass = await ctx.db.query.templateClass({
      where: { name: args.templateClassName },
    });

    // Create a reference to the template class for this new class
    const characterClass = await ctx.db.mutation.createCharacterClass({
      data: {
        class: {
          connect: { id: templateClass.id },
        },
      },
    });

    return characterClass;
  },

  // args needs to contain {folkId, characterClassId, characterName, ...}
  async addCharacter(parent, args, ctx, info) {
    const userId = args.userId; // = ctx.request.userId;

    if (!userId) {
      return new Error(`You must be logged in to do that.`);
    }

    const characterClass = await ctx.db.query.characterClass({
      where: { id: args.characterClassId },
    });

    // Create a new character with reference to the characterClass
    const character = await ctx.db.mutation.createCharacter({
      data: {
        user: { connect: { id: userId } },
        name: args.characterName,
        classes: { connect: [{ id: characterClass.id }] },
        // folk: { connect: {id: characterFolkId } },
      },
    });
    // Create the link to character in characterClass' belongsTo field
    const updatedCharacterClass = await ctx.db.mutation.updateCharacterClass({
      data: {
        belongsTo: { connect: { id: character.id } },
      },
      where: { id: characterClass.id },
    });
    console.log(updatedCharacterClass);
    console.log(character);
    // if (updatedCharacterClass.belongsTo != character.id) {
    //   throw new Error(
    //     `Something went wrong with the character creation. Please try again later.`,
    //   );
    // }
    // If error: remove the associated characterClass, and characterFolk, throw error
    // console.log(character);
    return character;
  },
};

module.exports = Mutations;
