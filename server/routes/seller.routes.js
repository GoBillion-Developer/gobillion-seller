import express from "express";
import sellerCtrl from "../controllers/seller.controller";
import authCtrl from "../controllers/auth.controller";

const router = express.Router();

/*The API endpoint to create a nseller is declared in the following route,When the Express app gets a POST request at '/api/sellers', it calls the create
function defined in the controller. */

router.route("/api/sellers").get(sellerCtrl.list).post(sellerCtrl.create);
//router.route("/api/sellers").post(sellerCtrl.create);
router
  .route("/api/sellers/:sellerId")
  .get(authCtrl.requireSignin, sellerCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, sellerCtrl.update);
//.delete(authCtrl.requireSignin, authCtrl.hasAuthorization, sellerCtrl.remove);

router.param("sellerId", sellerCtrl.sellerByID);

export default router;
