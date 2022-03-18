const { gql } = require("apollo-server");

const typeDefs = gql`
  type Links {
    id: String!
    url: String!
  }

  type Query {
    list: [Links!]!
  }

  type Mutation {
    createLink(id: String!, url: String!): Links
  }
`;
module.exports = typeDefs;
