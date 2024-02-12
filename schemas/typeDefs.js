// server/graphql/typeDefs.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String!
    email: String!
  }

  type Product {
    _id: ID!
    name: String!
    description: String
    price: Float!
    imageUrl: String
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    products: [Product]
    product(_id: ID!): Product
  }

  type Mutation {
    registerUser(username: String!, email: String!, password: String!): User
    loginUser(email: String!, password: String!): User
    addProduct(name: String!, description: String, price: Float!, imageUrl: String): Product
    updateProduct(_id: ID!, name: String, description: String, price: Float, imageUrl: String): Product
    deleteProduct(_id: ID!): Product
  }
`;

module.exports = typeDefs;
