import mongoose from "mongoose";

const { Schema } = mongoose;

const OrdersSchema = new Schema( {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    mode: {
      type: String,
      enum: ["BUY", "SELL"],
      default: "BUY",
    },
  },
  { timestamps: true });

export default OrdersSchema;
