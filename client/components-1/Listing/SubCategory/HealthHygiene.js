import React, { Component } from "react";
import "../../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class HerbalAyurvedic extends Component {
  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item" id="hh1">
          Sanitisers
        </li>
        <li className="list-group-item" id="hh2">
          Gloves
        </li>
        <li className="list-group-item" id="hh3">
          Masks
        </li>
        <li className="list-group-item" id="hh4">
          Feminine Hygiene
        </li>
        <li className="list-group-item" id="hh5">
          Sexual Wellness
        </li>
        <li className="list-group-item" id="hh6">
          Health Equipments
        </li>
        <li className="list-group-item" id="hh7">
          Supplements
        </li>
      </ul>
    );
  }
}
