const Order = require('../models/Order');

// Create a new order using the request body data.
exports.createOrder = async (req, res, next) => {
  try {
    const { user, products } = req.body;
    if (!user || !products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "User and at least one product are required." });
    }

    const order = new Order({
      user, // In a real app, this would come from the authenticated user.
      products
    });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

// Retrieve all orders for a given user.
exports.getUserOrders = async (req, res, next) => {
  try {
    const { user } = req.query;
    if (!user) {
      return res.status(400).json({ message: "User ID is required." });
    }
    const orders = await Order.find({ user }).populate('products.product');
    res.json(orders);
  } catch (err) {
    next(err);
  }
};
