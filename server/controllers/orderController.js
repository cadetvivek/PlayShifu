const Order = require('../models/Order');
const Product = require('../models/Product');

const createOrder = async (req, res) => {
  const { products } = req.body; // Array of { productId, quantity }
  try {
    const productDetails = await Product.find({ _id: { $in: products.map(p => p.productId) } });
    const total = productDetails.reduce((sum, p) => sum + p.price * products.find(item => item.productId === p._id.toString()).quantity, 0);

    const order = new Order({ user: req.user.id, products, total });
    await order.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createOrder };