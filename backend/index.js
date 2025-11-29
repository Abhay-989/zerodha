import dotenv from "dotenv";
dotenv.config();
import connectDB from "./config/db.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import orderRoutes from "./routes/orderRoutes.js";
import {HoldingsModel} from "./models/HoldingsModel.js";
import OrdersModel from "./models/OrdersModel.js";
import {PositionsModel} from "./models/PositionsModel.js";
import cookieParser from "cookie-parser";
const path = require("path");


connectDB();
const PORT = process.env.PORT || 3002;


const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);
app.use(cookieParser());
// 


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find();
  res.json(allOrders);
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save(); 

    res.status(201).send("Order saved!");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error saving order");
  }
});

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req,res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});