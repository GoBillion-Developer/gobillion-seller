import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import ListingProvider from "./components-1/Listing/ListingContext";

hydrate(
  <ListingProvider>
    <App />
  </ListingProvider>,
  document.getElementById("root")
);
