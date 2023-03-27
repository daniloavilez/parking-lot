import mongoose from "mongoose";

const BillingSchema = new mongoose.Schema({
  month: {
    type: Number,
    require: true
  },
  year: {
    type: Number,
    require: true
  },
  total: {
    type: Number
  }
});

export const Billing = mongoose.model("Billing", BillingSchema);
