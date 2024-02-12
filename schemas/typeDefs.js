const typeDefs= `
type User {
    _id: ID
    username: String
    email: String
},
type Product {
    _id: ID
    name: String
    description: String
    price: Float
    imageUrl: String
},
type Auth {
    token: ID!
    user: User
},
type Query {
    users: [User]
    user(_id: ID!): User
    products: [Product]
    product(_id: ID!): Product
},
type Mutation {
    registerUser(username: String!, email: String!, password: String!): Auth
    loginUser(email: String!, password: String!): Auth
    addProduct(name: String!, description: String, price: Float!, imageUrl: String): Product
    updateProduct(_id: ID!, name: String, description: String, price: Float, imageUrl: String): Product
    deleteProduct(_id: ID!): Product
}
`;

module.exports = typeDefs;

