import Order from "../models/OrdersModel.js";

export const createOrder = async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const userId = req.user._id; // from auth middleware

    if (!name || !qty || !price || !mode) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const newOrder = await Order.create({
      name,
      qty,
      price,
      mode,
      userId,
    });

    res.status(201).json({ success: true, order: newOrder });

  } catch (err) {
    res.status(500).json({ success: false, message: "Order creation failed" });
  }
};

export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;
    const orders = await Order.find({ userId }).sort({ createdAt: -1 });

    res.status(200).json(orders);

  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to fetch orders" });
  }
};
