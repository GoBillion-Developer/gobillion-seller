import React, { Component } from "react";
import "../../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class SelectCategory extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item" id="ha1">
          Beauty
        </li>
        <li className="list-group-item" id="ha2">
          Medicines
        </li>
      </ul>
    );
  }
}
