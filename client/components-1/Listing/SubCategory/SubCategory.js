import React, { Component } from "react";
import "../../assets/css/Listing.css";
import SelectCategory from "./SelectCategory";
import PersonalCare from "./PersonalCare";
import PackedFood from "./PackedFood";
import HomeCleaner from "./HomeCleaner";
import HealthHygiene from "./HealthHygiene";
import HerbalAyurvedic from "./HerbalAyurvedic";

export default class SubCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: "1",
    };
  }
  handleClick = (e) => {
    const { id } = e.target;

    switch (id) {
      case "c1":
        this.setState({ step: "2" });
        break;
      case "c2":
        this.setState({ step: "3" });
        break;
      case "c3":
        this.setState({ step: "4" });
        break;
      case "c4":
        this.setState({ step: "5" });
        break;
      case "c5":
        this.setState({ step: "6" });
        break;
    }
  };
  render() {
    const { step } = this.state;
    switch (step) {
      case "1":
        return <SelectCategory />;
        break;
      case "2":
        return <PersonalCare />;
        break;
      case "3":
        return <PackedFood />;
        break;
      case "4":
        return <HomeCleaner />;
        break;
      case "5":
        return <HealthHygiene />;
        break;
      case "6":
        return <HerbalAyurvedic />;
        break;
    }
  }
}
