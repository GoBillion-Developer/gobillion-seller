import Seller from "../models/seller.model";
import jwt from "jsonwebtoken";
import expressJwt from "express-jwt";
import config from "./../../config/config";

/*The auth controller functions in server/controllers/auth.controller.js will not only handle requests to the sign-in 
and sign-out routes, but also provide JWT and express-jwt functionality to enable authentication and authorization
for protected seller API endpoints */

/* SIGNIN */

const signin = async (req, res) => {
  try {
    let seller = await Seller.findOne({
      email: req.body.email,
    });
    if (!seller)
      return res.status("401").json({
        error: "Seller not found",
      });

    /*Then, the password authentication method defined in the SellerrSchema is used to verify the password received in the req.body*/

    if (!seller.authenticate(req.body.password)) {
      return res.status("401").send({
        error: "Email and password don't match.",
      });
    }

    /*If the password is verified, then the jwt module generates a JWT signed token using secretkey and _id value */
    const token = jwt.sign(
      {
        _id: seller._id,
      },
      config.jwtSecret
    );

    /*Then, the signed JWT is returned to the authenticated client along with seller details. 
    Optionally, we can also set the token  to a cookie in the response object so it is
    available to the client side if cookies is the chosen form of JWT storage. On the client side,
    this token must be attached as an Authorization header when requesting protected routes from the server */

    res.cookie("t", token, {
      expire: new Date() + 9999,
    });

    return res.json({
      token,
      seller: {
        _id: seller._id,
        name: seller.name,
        email: seller.email,
      },
    });
  } catch (err) {
    return res.status("401").json({
      error: "Could not sign in",
    });
  }
};

/*SIGNOUT */

const signout = (req, res) => {
  res.clearCookie("t");
  return res.status("200").json({
    message: "signed out",
  });
};

/*REQUIRE SIGNIN */

/*To check if the requesting seller is signed in and has a valid JWT when a protected 
route is accessed, we will use the express-jwt module. */

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  sellerProperty: "auth",
});

/*HAS AUTHORISATION */

/*The req.auth object is populated by express-jwt in requireSignin after
authentication verification, and the req.profile is populated by the sellerByID
function in the seller.controller.js. We will add the hasAuthorization function to
routes that require both authentication and authorization. */

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;
  if (!authorized) {
    return res.status("403").json({
      error: "Seller is not authorized",
    });
  }
  next();
};

export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
};
