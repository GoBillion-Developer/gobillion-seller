import React from "react";
import { Switch, Route } from "react-router-dom";
import MainForm from "./components-1/MainForm";
import MainPage from "./components-1/MainPage";
import Signin from "./auth/Signin";
import Home from "./components-1/seller/Profile";
import Success from "./components-1/Success";
import Listing from "./components-1/Listing/Listing";
import AddListing from "./components-1/Listing/AddListing";
import BrandCheck from "./components-1/Listing/BrandCheck";
import CreateNewListing from "./components-1/Listing/CreateNewListing";
import AddExistingListing from "./components-1/Listing/AddExistingListing";
import Inventory from "./components-1/Inventory/Inventory";
import Orders from "./components-1/Orders/Orders";
import Payments from "./components-1/Payments/Payments";
import Help from "./components-1/Help/Help";
import NavbarSeller from "./components-1/NavbarSeller/NavbarSeller";
import PrivateRoute from "./auth/PrivateRoute";

const MainRouter = () => {
  return (
    <React.Fragment>
      <NavbarSeller />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/signup" component={MainForm} />
        <Route
          exact
          path="/user/:userId/seller/newlisting"
          component={AddListing}
        />
        <Route
          exact
          path="/user/:userId/seller/brandcheck"
          component={BrandCheck}
        />
        <Route
          exact
          path="/user/:userId/seller/createnewlisting"
          component={CreateNewListing}
        />

        <Route
          exact
          path="/user/:userId/seller/addtoexistinglistings"
          component={AddExistingListing}
        />
        <PrivateRoute
          exact
          path="/user/:userId/seller/listings"
          component={Listing}
        />
        <Route path="/user/:userId" component={Home} />
        <Route exact path="/success" component={Success} />
        <Route exact path="/signin" component={Signin} />

        <Route exact path="/inventory" component={Inventory} />
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/payments" component={Payments} />
        <Route exact path="/help" component={Help} />
      </Switch>
    </React.Fragment>
  );
};

export default MainRouter;
