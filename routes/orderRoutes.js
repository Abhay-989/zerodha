import express from "express";
import { createOrder, getUserOrders } from "../controllers/orderController.js";
import { protectRoute } from "../middleware/protectRoute.js"; // now it exists

const router = express.Router();

router.post("/orders", protectRoute, createOrder);
router.get("/orders", protectRoute, getUserOrders);

export default router;
