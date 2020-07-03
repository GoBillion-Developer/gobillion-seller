import React, { Component } from "react";
import "../../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class HomeCleaner extends Component {
  render() {
    return (
      /*The key are abbreviated as hc= home cleaner */
      <ul className="list-group-scrollable">
        <li className="list-group-item" id="hc1">
          Home Cleaners
        </li>
        <li className="list-group-item" id="hc2">
          Utensil Cleaners
        </li>
        <li className="list-group-item" id="hc3">
          Toilet Cleaners
        </li>
        <li className="list-group-item" id="hc4">
          Detergents & Bars & Fabric PrePost Wash
        </li>
        <li className="list-group-item" id="hc5">
          Freshners & Repellants
        </li>
        <li className="list-group-item" id="hc6">
          Disposables, garbage bags
        </li>
        <li className="list-group-item" id="hc7">
          Freshners & Repellents
        </li>
        <li className="list-group-item" id="hc8">
          Mops, Brushes & Scrubs
        </li>
        <li className="list-group-item" id="hc9">
          Bins & Bathroom Ware
        </li>
        <li className="list-group-item" id="hc10">
          Tissues & Napkins
        </li>
      </ul>
    );
  }
}
