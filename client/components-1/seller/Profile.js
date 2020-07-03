import React, { useState, useEffect } from "react";
import "../assets/css/Home.css";
import auth from "../../auth/auth-helper";
import { read } from "./api-seller.js";
import { Redirect, Link } from "react-router-dom";

export default function Home({ match }) {
  const [seller, setSeller] = useState({});
  const [redirectToSignin, setRedirectToSignin] = useState(false);
  const jwt = auth.isAuthenticated();

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    read(
      {
        sellerId: match.params.sellerId,
      },
      { t: jwt.token },
      signal
    ).then((data) => {
      if (data && data.error) {
        setRedirectToSignin(true);
      } else {
        setSeller(data);
      }
    });

    return function cleanup() {
      abortController.abort();
    };
  }, [match.params.sellerId]);

  if (redirectToSignin) {
    return <Redirect to="/signin" />;
  }

  const imgstyle = {
    height: "110px",
    width: "110px",
    borderRadius: "50%",
    marginLeft: "7rem",
    marginTop: "3rem",
  };

  return (
    <div
      classname="container container-home"
      style={{ marginTop: "2rem", paddingLeft: "3rem", paddingRight: "3rem" }}
    >
      <div className="row ">
        <div className="col-md-3 ">
          <div className="profile">
            <img src="" alt="user-profile" style={imgstyle}></img>

            <div className="user-title">
              <div className="store-name">
                <h6>{seller.businessname}</h6>
              </div>
              <div className="store-email">
                <h6>{seller.email}</h6>
              </div>
              <div className="store-address">
                <h6>Registered Office</h6>
                <p>{seller.regofficeaddress}</p>
                <h6>Inventory Warehouse</h6>
                <p>{seller.pickupaddress}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row justify-content-between central-row">
            <div className="col-md-4 nested ">
              <div className="card">
                <h6 className="card-title">Total Products Sold</h6>
                <p className="products">480</p>
              </div>
            </div>
            <div className="col-md-4 nested">
              <div className="card">
                <h6
                  className="card-title"
                  style={{ paddingLeft: "0px", paddingRight: "0px" }}
                >
                  Most Famous Product
                </h6>
                <div className="row justify-content-center">
                  <div className="col-md-4 famousproduct-img">
                    <img src="orange-logo.svg"></img>
                  </div>
                  <div className="col-md-8 famousproduct-name">
                    <h5>Gobillion</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 nested">
              <div className="card">
                <h6 className="card-title">Monthly sales</h6>
              </div>
            </div>
          </div>
          <div className="row central-row">
            <div className="col-md-12 row-nested ">
              <div className="card card-bottom">
                <h6
                  className="card-title heading"
                  style={{ paddingBottom: "1rem" }}
                >
                  Cheque Details
                </h6>
                <div className="row">
                  <div className="col-6 upload-cheque">
                    <h6>
                      Please upload a cancelled cheque for your bank account:
                      "XXXXXXXXXX"
                    </h6>
                    <div className="uploadbutton">
                      <button type="button" class="btn btn-primary">
                        Upload
                      </button>
                    </div>
                  </div>
                  <div className="col-6">
                    <h6 style={{ paddingBottom: "1rem" }}>
                      Upload instructions
                    </h6>
                    <ul className="cheque">
                      <li>
                        Make sure that the image is clearly visible, and on a
                        white background
                      </li>
                      <li>Allowed file formats : png, jpg, jpeg, pdf</li>
                      <li>Image should not be larger than 20 MB</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 home-right ">
          <div className="card card-bottom home-right-card">
            <h6 className="card-title heading">Check List (0% complete)</h6>
            <h6 className="check-head">Account Details</h6>
            <ul className="check-lists">
              <li>Email Verification</li>
              <li>Phone Verification</li>
            </ul>
            <h6 className="check-head">Business Details</h6>
            <ul className="check-lists">
              <li>GSTIN</li>
              <li>Signature Verification</li>
            </ul>
            <h6 className="check-head">Bank Account Details</h6>
            <ul className="check-lists">
              <li>Bank Acc. Verification</li>
              <li>Cancelled Cheque</li>
            </ul>
            <h6 className="check-head">Product Details</h6>
            <ul className="check-lists">
              <li>Listings Created</li>
              <li>Stock Added</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-md-3 nested-bottom-1">
          <div className="card bottom-card ">
            <h6 className="card-title heading">Help</h6>
            <div className="seller-use">
              <h6>How to use Seller Platform?</h6>
            </div>
            <a href="google.com">google.com</a>
          </div>
        </div>
        <div className="col-md-6 nested-bottom-2">
          <div className="card bottom-card">
            <h6 className="card-title heading">My Stores</h6>
            <div className="row">
              <div className="col-6 store-details">
                <h6>Store Name: Souvik Store</h6>
                <h6>Store Number: 123456789</h6>
                <h6>Store Manager: Souvik Pal</h6>
                <h6>Store Manager Number: 987654321</h6>
              </div>
              <div className="col-6 store-details">
                <h6>Store Name: Alpha Centauria</h6>
                <h6>Store Number: 842697531</h6>
                <h6>Store Manager: Milky Way</h6>
                <h6>Store Manager Number: 14393760502</h6>
              </div>
            </div>
            <div className="editbutton">
              <button type="button" class="btn btn-primary">
                Edit
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 nested-bottom-3">
          <div className="card bottom-card">
            <h6 className="card-title heading">Google map</h6>
            <div className="location">
              <img src="maps.jpg" style={{ height: "120px" }}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
