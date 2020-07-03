import Product from "../models/product.models";
import ProductCatalog from "../models/productCatalog.models";
import extend from "lodash/extend";
import errorHandler from "./../helpers/dbErrorHandler";
import formidable from "formidable";
import fs from "fs";
//import defaultImage from "./../../client/assets/images/default.png";ProductDescription

const create = async (req, res, next) => {
  let approved = req.body.approval;
  const product = new Product({
    name: req.body.name,
    category: req.body.category,
    subCategory: req.body.subCategory,
    vertical: req.body.vertical,
    brand: req.body.brand,
    avatar: req.body.avatar || null,
    price: req.body.price,
    teamBuyPrice: req.body.teamBuyPrice,
    fullfilment: req.body.fullfilment,
    approval: req.body.approval,
  });
  const productdesc = new ProductCatalog({
    sellersku: req.body.sellersku || null,
    procurementType: req.body.procurementType || null,
    procurementSLA: req.body.procurementSLA || null,
    fullfilment: req.body.fullfilment || null,
    stock: req.body.stock || null,
    weight: req.body.weight || null,
    type: req.body.type || null,
    unitsperItem: req.body.unitsperItem || null,
    class: req.body.class || null,
    height: req.body.height || null,
    width: req.body.width || null,
    packagingType: req.body.packagingType || null,
    origin: req.body.origin || null,
    volume: req.body.volume || null,
    ingredients: req.body.ingredients || null,
    color: req.body.color || null,
    materialType: req.body.materialType || null,
    skinType: req.body.skinType || null,
    fabricType: req.body.fabricType || null,
    variety: req.body.variety || null,
    shelfLife: req.body.shelfLife || null,
    purpose: req.body.purpose || null,
    hairType: req.body.hairType || null,
    treatmentType: req.body.treatmentType || null,
    styleName: req.body.styleName || null,
    texture: req.body.texture || null,
    grainSize: req.body.grainSize || null,
    dietaryPreference: req.body.dietaryPreference || null,
    caloricValue: req.body.caloricValue || null,
    manufacturer: req.body.manufacturer || null,
    description: req.body.description || null,
  });
  product.seller = req.profile;
  if (approved) {
    try {
      let result = await productdesc.save();
      product.productCatalog = result._id;
      let result2 = await product.save();
      res.json(result2);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  } else {
    return res.status("400").json({
      error: "Brand not approved",
    });
  }

  /* let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        message: "Image could not be uploaded",
      });
    }
    let product = new Product(fields);
    let ProductDescription = new ProductDescription(fields);
    product.seller = req.seller;
    if (files.image) {
      product.image.data = fs.readFileSync(files.image.path);
      product.image.contentType = files.image.type;
    }
    try {
      let result = await product.save();
      res.json(result);
    } catch (err) {
      return res.status(400).json({
        error: errorHandler.getErrorMessage(err),
      });
    }
  });*/
};
const listByUser = async (req, res) => {
  try {
    let products = await Product.find({ seller: req.profile._id }).populate(
      "seller",
      "_id businessname"
    );

    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

const list = async (req, res) => {
  const query = {};
  if (req.query.search)
    query.name = { $regex: req.query.search, $options: "i" };
  if (req.query.category && req.query.category != "All")
    query.category = req.query.category;
  try {
    let products = await Product.find(query)
      .populate("shop", "_id name")
      .select("-image")
      .exec();
    res.json(products);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err),
    });
  }
};

export default {
  create,
  listByUser,
  list,
};
