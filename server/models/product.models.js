const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    category: {
      type: String,
      required: "Category is Required",
    },
    subCategory: {
      type: String,
      required: "SubCategory is Required",
    },
    vertical: {
      type: String,
      required: "Vertical is Required",
    },
    hsn: {
      type: String,
    },
    brand: {
      type: String,
      required: "Brand is Required",
    },
    avatar: {
      type: String,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seller",
    },
    productCatalog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductCatalog",
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
    saleCount: {
      type: Number,
      default: 0,
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

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
