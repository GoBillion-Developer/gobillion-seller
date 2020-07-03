const mongoose = require("mongoose");

const VerticalSchema = new mongoose.Schema(
  {
    category: {
      type: String,
    },
    subCategory: {
      type: String,
    },
    vertical: {
      type: String,
    },
    brand: {
      type: String,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    productCatalog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductDescription",
    },
    price: {
      type: String,
    },
    teamBuyPrice: {
      type: String,
    },
    fullfilment: {
      type: String,
    },

    /*The seller need approval to add the product hence this field is important */
    approval: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Vertical = mongoose.model("Vertical", VerticalSchema);

module.exports = Vertical;
