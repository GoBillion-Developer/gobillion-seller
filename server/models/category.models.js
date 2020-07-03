const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    subCategory: [
      {
        name: {
          type: String,
        },
      },
    ],
    productCount: {
      type: Number,
      default: 0,
    },
    avatar: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
