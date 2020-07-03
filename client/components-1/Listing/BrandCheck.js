import React, { Component } from "react";
import "./../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class BrandCheck extends Component {
  render() {
    return (
      <div className="section">
        <div
          className="container-fluid"
          style={{ paddingTop: "3rem", paddingLeft: "3rem" }}
        >
          <div className="row">
            <div className="col-md-7">
              <h3>Add New Listing</h3>
            </div>
          </div>
          <hr></hr>
        </div>
        <div
          className="container-fluid"
          style={{ paddingTop: "1rem", paddingLeft: "3rem", height: "100%   " }}
        >
          <div className="row ">
            <div className="col-md-2 listing-col">
              <ul>
                <li className="inactive-sidebar">Select vertical</li>
                <li>Select brand</li>
                <li className="inactive-sidebar">Add product info</li>
              </ul>
            </div>
            <div className="col-md-5">
              <div className="title-card">
                Check for the Brand you want to sell
              </div>
              <div className="brand-check">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Check Brand"
                  name="brand"
                />
              </div>
              <hr></hr>
            </div>
            <div className="col-md-5">
              <div className="title-card">
                <Link to="createnewlisting">Create Product Listing</Link>
              </div>

              <hr></hr>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
