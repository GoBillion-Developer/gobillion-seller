import React, { Component } from "react";
import "./../assets/css/Listing.css";
import { Link } from "react-router-dom";
import SubCategory from "./SubCategory/SubCategory.js";
import Vertical from "./Vertical/Vertical.js";
import ListingContext from "./ListingContext";

export default class AddListing extends Component {
  constructor(props) {
    super(props);
    this.subcategory = React.createRef();
  }

  handleChange = (e) => {
    this.subcategory.current.handleClick(e);
  };

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
                <li>Select vertical</li>
                <li className="inactive-sidebar">Select brand</li>
                <li className="inactive-sidebar">Add product info</li>
              </ul>
            </div>

            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Search"
                    name="search"
                  />
                </div>
              </div>
              <div className="row panelist">
                <div className="col-md-3">
                  <div className="panel panel-primary" id="result_panel">
                    <div className="panel-body">
                      <ul className="list-group">
                        <li
                          className="list-group-item"
                          id="c1"
                          onClick={this.handleChange}
                        >
                          Personal Care
                        </li>
                        <li
                          className="list-group-item"
                          id="c2"
                          onClick={this.handleChange}
                        >
                          Packed Food and Beverages
                        </li>
                        <li
                          className="list-group-item"
                          id="c3"
                          onClick={this.handleChange}
                        >
                          Home cleaners
                        </li>
                        <li
                          className="list-group-item"
                          id="c4"
                          onClick={this.handleChange}
                        >
                          Health and Hygiene
                        </li>
                        <li
                          className="list-group-item"
                          id="c5"
                          onClick={this.handleChange}
                        >
                          Herbal and Ayurvedic
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="panel panel-primary" id="result_panel">
                    <div className="panel-body">
                      <SubCategory ref={this.subcategory} />
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="panel panel-primary" id="result_panel">
                    <div className="panel-body">
                      <Vertical />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 empty">
                  <div className="row">
                    <div className="col-md-6">Vertical Description</div>
                    <div className="col-md-6">
                      <Link to="brandcheck">Brand Check</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
