import React, { useState, useEffect } from "react";
import "./../assets/css/Listing.css";
import { listBySeller } from "../../product/api-product.js";
import { Link } from "react-router-dom";

export default function Listing({ match }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    listBySeller(
      {
        sellerId: match.params.sellerId,
      },
      signal
    ).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setProducts(data);
      }
    });
    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return (
    <div className="section">
      <div
        className="container-fluid"
        style={{ paddingTop: "3rem", paddingLeft: "3rem" }}
      >
        <div className="row">
          <div className="col-md-7">
            <h3>My Listing</h3>
          </div>

          <div className="col-md-auto">
            <input
              type="text"
              class="form-control"
              placeholder="Search"
              name="search"
            />
          </div>
          <div className="col-md-auto" style={{ textAlign: "end" }}>
            <Link to="newlisting">
              <button type="button" class="btn btn-primary">
                Add New Listing
              </button>
            </Link>
          </div>
          <div className="col-md-auto">
            <Link to="addtoexistinglistings">
              <button type="button" class="btn btn-primary">
                Add to Existing Listing
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ paddingTop: "2rem", paddingLeft: "3rem" }}
      >
        <div className="row">
          <div className="col-md-2 listing-sub">
            <h6>0</h6>
            <h6>Active Listing</h6>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          paddingTop: "2rem",
          paddingLeft: "3rem",
          paddingRight: "3rem",
        }}
      >
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">SubCategry</th>
              <th scope="col">Vertical</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Team Price</th>
              <th scope="col">Fullfilment</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => {
              return (
                <tr key={i}>
                  <th scope="row">{product.category}</th>
                  <td>{product.subCategory}</td>
                  <td>{product.vertical}</td>
                  <td>{product.brand}</td>
                  <td>{product.price}</td>
                  <td>{product.teamBuyPrice}</td>
                  <td>{product.fullfilment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
