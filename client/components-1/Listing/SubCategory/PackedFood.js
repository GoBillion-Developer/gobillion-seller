import React, { Component } from "react";
import "../../assets/css/Listing.css";
import { Link } from "react-router-dom";

export default class PackedFood extends Component {
  render() {
    return (
      <ul className="list-group-scrollable">
        <li className="list-group-item" id="pf1">
          Rice
        </li>
        <li className="list-group-item" id="pf2">
          Dal & Pulses
        </li>
        <li className="list-group-item" id="pf3">
          Atta Flours & Sooji
        </li>
        <li className="list-group-item" id="pf4">
          Tea & Coffee
        </li>
        <li className="list-group-item" id="pf5">
          Breakfast Items
        </li>
        <li className="list-group-item" id="pf6">
          Ghee & Oil
        </li>
        <li className="list-group-item" id="pf7">
          Noodles pasta vermicelli
        </li>
        <li className="list-group-item" id="pf8">
          Biscuits & Cookies
        </li>
        <li className="list-group-item" id="pf9">
          Pickles & Chutney
        </li>
        <li className="list-group-item" id="pf10">
          Dry Fruits
        </li>
        <li className="list-group-item" id="pf11">
          Sugar,Salt & Jaggery
        </li>
        <li className="list-group-item" id="pf12">
          Health Drinks
        </li>
        <li className="list-group-item" id="pf13">
          Sauces,Dips, Spreads
        </li>
        <li className="list-group-item" id="pf14">
          Spices
        </li>
        <li className="list-group-item" id="pf15">
          Ready to Cook
        </li>
        <li className="list-group-item" id="pf16">
          Chocolates & Candles
        </li>
        <li className="list-group-item" id="pf17">
          Cakes
        </li>
        <li className="list-group-item" id="pf18">
          Water
        </li>
        <li className="list-group-item" id="pf19">
          Frozen Veggies & Snacks
        </li>
        <li className="list-group-item" id="pf20">
          Indian Mithai
        </li>
        <li className="list-group-item" id="pf21">
          Namkeens & Snacks
        </li>
      </ul>
    );
  }
}
