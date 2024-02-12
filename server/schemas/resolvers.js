// server/graphql/resolvers.js
const User = require('../models/User');
const Product = require('../models/Product');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    user: async (_, { _id }) => await User.findById(_id),
    products: async () => await Product.find(),
    product: async (_, { _id }) => await Product.findById(_id),
  },
  Mutation: {
    registerUser: async (_, { username, email, password }) => {
      try {
        const user = new User({ username, email, password });
        await user.save();
        return user;
      } catch (error) {
        throw new Error('Error registering user', error);
      }
    },
    loginUser: async (_, { email, password }) => {
      try {
        const user = await User.findOne({ email });
        if (!user) throw new Error('User not found');
        
        const isPasswordValid = await user.comparePassword(password);
        if (!isPasswordValid) throw new Error('Invalid password');

        return user;
      } catch (error) {
        throw new Error('Error logging in', error);
      }
    },
    addProduct: async (_, args) => {
      try {
        const product = new Product(args);
        await product.save();
        return product;
      } catch (error) {
        throw new Error('Error adding product', error);
      }
    },
    updateProduct: async (_, { _id, ...update }) => {
      try {
        const product = await Product.findByIdAndUpdate(_id, update, { new: true });
        return product;
      } catch (error) {
        throw new Error(`Error updating product with ID: ${_id}`, error);
      }
    },
    deleteProduct: async (_, { _id }) => {
      try {
        const product = await Product.findByIdAndDelete(_id);
        return product;
      } catch (error) {
        throw new Error(`Error deleting product with ID: ${_id}`, error);
      }
    },
  },
};

module.exports = resolvers;
