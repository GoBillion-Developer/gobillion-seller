import React, { Component } from "react";
import "../../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class PersonalCare extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item" id="pc1">
          Body Care
        </li>
        <li className="list-group-item" id="pc2">
          Hair Care
        </li>
        <li className="list-group-item" id="pc3">
          Face Care
        </li>
        <li className="list-group-item" id="pc4">
          Oral care
        </li>
      </ul>
    );
  }
}
