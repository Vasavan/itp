const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DietSchema = new Schema(
  {
   
    Name: String,
    Quantity: String,
    Unit: String,
    To: String,
    Datetime: String,
    Remarks:String,
  },
  { timestamps: true }
);

const Diet = mongoose.model("Diet", DietSchema);
module.exports = Diet;
