const { gql } = require("apollo-server");

const typeDefs = gql`
  type Address {
    street: String!
    city: String!
    state: String!
    country: String!
  }

  type Vendor {
    id: ID!
    name: String!
    email: String!
    phone: Int!
    address: Address!
  }

  type Query {
    vendors: [Vendor!]!
  }
`;

module.exports = { typeDefs };
