import express from "express";
import productCtrl from "../controllers/product.controller";
import authCtrl from "../controllers/auth.controller";
import sellerCtrl from "../controllers/seller.controller";

const router = express.Router();

router
  .route("/api/products/by/:sellerId")
  .post(authCtrl.requireSignin, productCtrl.create)
  .get(productCtrl.listByUser);

router.param("sellerId", sellerCtrl.sellerByID);

export default router;
