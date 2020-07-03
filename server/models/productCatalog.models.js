import mongoose from "mongoose";
const ProductCataogSchema = new mongoose.Schema(
  {
    sellersku: {
      type: String,
    },
    procurementType: {
      type: String,
    },
    procurementSLA: {
      type: String,
    },
    stock: {
      type: String,
    },
    weight: {
      type: String,
    },
    type: {
      type: String,
    },
    unitsperItem: {
      type: Number,
    },
    class: {
      type: String,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    packagingType: {
      type: String,
    },
    origin: {
      type: String,
    },
    volume: {
      type: String,
    },
    color: {
      type: String,
    },
    materialType: {
      type: String,
    },
    skinType: {
      type: String,
    },
    fabricType: {
      type: String,
    },
    variety: {
      type: String,
    },

    shelfLife: {
      type: String,
    },

    ingredient: {
      type: String,
    },

    purpose: {
      type: String,
    },
    hairType: {
      type: String,
    },

    treatmentType: {
      type: String,
    },

    styleName: {
      type: String,
    },
    texture: {
      type: String,
    },
    grainSize: {
      type: String,
    },
    cuisine: {
      type: String,
    },
    dietaryPreference: {
      type: String,
    },
    caloricValue: {
      type: String,
    },
    manufacturer: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("ProductCatalog", ProductCataogSchema);
