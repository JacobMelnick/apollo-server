const Model = require("../models/links");
const resolvers = {
  Query: {
    list: () => Model.findAll()
  },

  Mutation: {
    createLink: (root, { url }) => {
      const urls = { url };
      return Model.create(urls);
    }
  }
};

module.exports = resolvers;
