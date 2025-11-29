// controllers/orderController.js
import Order from "../models/OrdersModel.js";

export const createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const order = await Order.create({
      user: req.user._id, // logged in user
      name,
      qty,
      price,
      mode,
    });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
