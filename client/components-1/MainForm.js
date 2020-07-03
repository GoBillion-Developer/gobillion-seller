import React, { Component } from "react";
import CreateSellerAccount from "./CreateSellerAccount";
import PickupAddress from "./PickupAddress";
import BusinessDetails from "./BusinessDetails";
import BankDetails from "./BankDetails";
import { create } from "./seller/api-seller.js";
const pincodeRegex = RegExp(/^^[0-9]{6}$/);
const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
const passwordRegex = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      businessname: "",
      email: "",
      mobile: "",
      password: "",
      pincode: "",
      pickupaddress: "",
      regofficeaddress: "",
      gstin: "",
      hasGst: false,
      noGst: true,
      bankaccountname: "",
      bankaccountnumber: "",
      ifsc: "",
      pan: "",
      open: false,
      error: "",
      formErrors: {
        email: "",
        mobile: "",
        password: "",
        pincode: "",
      },
    };
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  handleMainChange = (event) => {
    const { name, value } = event.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "Enter valid Email Address";
        break;
      case "mobile":
        formErrors.mobile =
          value.length === 10 ? "" : "Enter valid Mobile Number";
        break;
      case "password":
        formErrors.password = passwordRegex.test(value)
          ? ""
          : "enter alphanumeric password and min 8 charecters";
        break;
      case "pincode":
        formErrors.pincode = pincodeRegex.test(value)
          ? ""
          : "Pincode must be of 6 digits";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value });
    this.setState({ [name]: event.target.value });
  };

  handlepincode = (e) => {
    e.preventDefault();
    if (this.state.pincode.length == 6) {
      const toggler = document.querySelector(".congratulations");
      toggler.style.display = `block`;
      const toggler2 = document.querySelector(".your-address");
      toggler2.style.display = `block`;
      const toggler3 = document.querySelector(".pickup-field");
      toggler3.style.display = `block`;
      const toggler4 = document.querySelector(".pickup-field-1");
      toggler4.style.display = `flex`;
      const toggler5 = document.querySelector(".pickup-field-2");
      toggler5.style.display = `block`;
      const toggler6 = document.querySelector(".your-reg-office-address");
      toggler6.style.display = `block`;
      const toggler7 = document.querySelector(".reg-office-field");
      toggler7.style.display = `block`;
    }
  };

  handlegstCheck = (e) => {
    e.preventDefault();
    const { id, value } = event.target;
    switch (id) {
      case "gst-1":
        this.setState({ hasGst: true, noGst: false });
        break;
      case "gst-2":
        this.setState({ noGst: false });
        break;
      default:
        break;
    }
  };

  clickSubmit = () => {
    const seller = {
      email: this.state.email || undefined,
      mobile: this.state.mobile || undefined,
      businessname: this.state.businessname || undefined,
      password: this.state.password || undefined,
      pincode: this.state.pincode || undefined,
      pickupaddress: this.state.pickupaddress || undefined,
      regofficeaddress: this.state.regofficeaddress || undefined,
      gstin: this.state.gstin || undefined,
      bankaccountname: this.state.bankaccountname || undefined,
      bankaccountnumber: this.state.bankaccountnumber || undefined,
      ifsc: this.state.ifsc || undefined,
      pan: this.state.pan || undefined,
    };
    create(seller).then((data) => {
      if (data.error) {
        this.setState({ error: data.error });
      } else {
        this.setState({ error: "", open: true });
      }
      console.log(this.state);
    });
  };

  render() {
    const { step } = this.state;
    const {
      businessname,
      email,
      mobile,
      password,
      pincode,
      pickupaddress,
      regofficeaddress,
      gstin,
      hasGst,
      noGst,
      bankaccountname,
      bankaccountnumber,
      ifsc,
      pan,
      error,
      notverified,
      formErrors,
      open,
    } = this.state;
    const values = {
      businessname,
      email,
      mobile,
      password,
      pincode,
      pickupaddress,
      regofficeaddress,
      gstin,
      hasGst,
      noGst,
      notverified,
      bankaccountname,
      bankaccountnumber,
      ifsc,
      pan,
      error,
      formErrors,
      open,
    };
    switch (step) {
      case 1:
        return (
          <CreateSellerAccount
            nextStep={this.nextStep}
            handleChange={this.handleMainChange}
            values={values}
          />
        );
      case 2:
        return (
          <PickupAddress
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleMainChange}
            handlepincode={this.handlepincode}
            values={values}
          />
        );
      case 3:
        return (
          <BusinessDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleMainChange}
            handleGSTChange={this.handlegstCheck}
            values={values}
          />
        );
      case 4:
        return (
          <BankDetails
            clickSubmit={this.clickSubmit}
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleMainChange}
            values={values}
          />
        );
    }
  }
}
