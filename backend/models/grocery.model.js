const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GrocerySchema = new Schema(
  {
   
    Name: String,
    Quantity: Number,
    Unit: String,
    From: String,
    Datetime: String,
  },
  { timestamps: true }
);

const Grocery = mongoose.model("Grocery", GrocerySchema);
module.exports = Grocery;
