const { ApolloServer, gql } = require("apollo-server");

// Construct a schema, using GraphQL schema language
const typeDefs = require("./src/Schema");
const resolvers = require("./src/Resolvers");
const models = require("./models");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
