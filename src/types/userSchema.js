const { gql } = require("apollo-server");

module.exports = gql`
  type Users {
    _id: ID!
    firstname: String!
    lastname: String!
    city: String!
    state: String!
    country: String!
  }

  input UserInput {
    _id: ID
    firstname: String!
    lastname: String!
    city: String!
    state: String!
    country: String!
  }

  type Query {
    users: [Users!]
    getUserById(id: ID!): Users
  }

  type Mutation {
    updateUser(user: UserInput): Users
    createUser(user: UserInput): Users
    deleteUser(id: ID!): Users
  }
`;
