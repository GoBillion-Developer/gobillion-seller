const mongoose = require("mongoose");

const HSNSchema = new mongoose.Schema({
  HSNCode: {
    type: String,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  taxRate: {
    type: Number,
  },
  shipping: {
    type: Number,
  },
});

const HSN = mongoose.model("hsn", HSNSchema);

module.exports = HSN;
