import mongoose from "mongoose";
import HoldingsSchema from "../schemas/HoldingsSchema.js";

export const HoldingsModel = mongoose.model("holdings", HoldingsSchema);
