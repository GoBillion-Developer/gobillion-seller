import React, { Component } from "react";
import "./../assets/css/Listing.css";
import { Link } from "react-router-dom";
import imgupload from "./../assets/images/image-upload.png";

export default class AddExistingListing extends Component {
  render() {
    return (
      <div className="section">
        <div
          className="container-fluid"
          style={{ paddingTop: "3rem", paddingLeft: "3rem" }}
        >
          <div className="row">
            <div className="col-md-7">
              <h3>Add product info</h3>
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
                <li>
                  <label for="cars">Select vertical:</label>

                  <select name="cars" id="cars">
                    <option value="volvo">Sports and Fitness</option>
                    <option value="saab">Gaming</option>
                    <option value="mercedes">Jewellary</option>
                    <option value="audi">Smart Devices</option>
                  </select>
                </li>
                <li>
                  <label for="cars">Select Brand:</label>

                  <select name="cars" id="cars">
                    <option value="volvo">Sports and Fitness</option>
                    <option value="saab">Gaming</option>
                    <option value="mercedes">Jewellary</option>
                    <option value="audi">Smart Devices</option>
                  </select>
                </li>
              </ul>
            </div>
            <div className="col-md-4 product-image">
              <div
                className="addimage"
                style={{ backgroundColor: "white", height: "400px" }}
              >
                <div className="addimage-title">Add Product Image</div>
                <div className="upload-img">
                  <a href="#">
                    <img src={imgupload}></img>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row product-info">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: "white", paddingTop: "0.75rem" }}
                >
                  <div className="product-infohead">
                    Price, Stock and Shipping Information (0/23)
                  </div>
                  <div className="editbutton">
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-target="#mymodal1"
                      data-toggle="modal"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="row" style={{ padding: "2rem" }}>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Seller SKU ID:</h6>
                      <h6>MRP: </h6>
                    </div>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Listing Status:</h6>
                      <h6>Your Selling Price:</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-info">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: "white", paddingTop: "0.75rem" }}
                >
                  <div className="product-infohead">
                    Product Description (0/11)
                  </div>
                  <div className="editbutton">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-target="#mymodal2"
                      data-toggle="modal"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="row" style={{ padding: "2rem" }}>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Model Number:</h6>
                      <h6>Color: </h6>
                    </div>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Type:</h6>
                      <h6>Material:</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row product-info">
                <div
                  className="col-md-12"
                  style={{ backgroundColor: "white", paddingTop: "0.75rem" }}
                >
                  <div className="product-infohead">
                    Additional Description (Optional) (0/23)
                  </div>
                  <div className="editbutton">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-target="#mymodal3"
                      data-toggle="modal"
                    >
                      Edit
                    </button>
                  </div>
                  <div className="row" style={{ padding: "2rem" }}>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Model Name:</h6>
                      <h6>Brand Color: </h6>
                    </div>
                    <div className="col-6 price-stock">
                      <h6 style={{ paddingBottom: "1rem" }}>Pack Of:</h6>
                      <h6>Design:</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="mymodal1">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title">Seller Information</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        LISTING INFORMATION
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Seller SKU ID*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        STATUS DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Listing Status*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        PRICE DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        MRP*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      INR
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Your selling price*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      INR
                    </label>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        INVENTORY DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Fullfilment By*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Procurement type
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Procurement SLA*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      Days
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Stock*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Stock available to buyers
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        DELIVERY CHARGE TO CUSTOMER
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Local delivery charge
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      INR
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Zonal delivery charge
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      INR
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        National delivery charge
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      INR
                    </label>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        PACKAGING DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Package Weight*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      KG
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Package Length*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      CM
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Package Breadth*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      CM
                    </label>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Package Height*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                    <label for="inputEmail3" class="col-form-label">
                      CM
                    </label>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        TAX DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        HSN*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                      <small id="emailHelp" class="form-text text-muted">
                        <a href="#">Find relevant HSN codes</a>
                      </small>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Luxury Cess
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Tax Code
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        MANUFACTURING DETAILS
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Manufacturer Details
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Importer Details
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Packer Details
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Country of Origin
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="mymodal2">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title">Product Description</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Model Number*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Type*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Color*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Material*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Description*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Sales Package*
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal" id="mymodal3">
          <div className="modal-dialog modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 class="modal-title">Additional Information</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        GENERAL
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Model Name
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input type="sku" class="form-control" id="sellersku" />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Pack of
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Brand Color
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Search Keywords
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Key Features
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Video URL
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        EAN/UPC
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        BODY AND DESIGN FEATURES
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Design
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>

                  <hr></hr>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        WARRANTY
                      </label>
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Warranty Summary
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Warranty Service Type
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Covered in Warranty
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-md-5 form-right-align">
                      <label for="inputEmail3" class="col-form-label">
                        Not Covered in Warranty
                      </label>
                    </div>
                    <div className="col-md-5 form-left-align">
                      <input
                        type="text"
                        class="form-control"
                        id="listingstatus"
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
