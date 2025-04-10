const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  products: [{ product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' }, quantity: Number }],
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' }, // e.g., "Pending", "Shipped"
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);