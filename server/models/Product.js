const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true }, // e.g., "birthday-gift-toys"
  image: { type: String }, // URL to product image
  stock: { type: Number, default: 0 },
});

module.exports = mongoose.model('Product', productSchema);