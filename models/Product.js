// server/models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  imageUrl: { type: String }, // You may add an image URL for product images
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
