import React, { Component } from "react";
import "./assets/css/CreateSellerAccount.css";

export default class CreateSellerAccount extends Component {
  /*
  handleOTP = (e) => {
    e.preventDefault();
    const toggler = document.querySelector(".otpfield");
    toggler.style.display = `block`;
  };
  */
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values } = this.props;
    return (
      <div className="Supplier">
        <div className="container create-account-container">
          <form className="reg-form">
            <div className="heading">
              <h1>Create your Seller Account</h1>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="inputEmail">Email*</label>
              <div className="input-group-md">
                <input
                  name="email"
                  type="email"
                  className="form-control input"
                  id="email"
                  value={values.email}
                  placeholder="Enter Email Address"
                  onChange={this.props.handleChange}
                />
              </div>
              {values.formErrors.email.length > 0 && (
                <span className="errorMessage">{values.formErrors.email}</span>
              )}
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel">
              <label htmlFor="inputNumber">Phone Number*</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span
                    className="input-group-text app-prepend"
                    id="basic-addon1"
                  >
                    +91
                  </span>
                </div>
                <input
                  name="mobile"
                  type="tel"
                  className="form-control input-lg"
                  id="mobnumber"
                  placeholder="Enter Mobile Number"
                  value={values.mobile}
                  onChange={this.props.handleChange}
                />
              </div>
              {values.formErrors.mobile.length > 0 && (
                <div className="errorMessage">{values.formErrors.mobile}</div>
              )}
            </div>

            <div className="form-group col-lg-12 col-md-12 headlabel">
              <label htmlFor="inputBusinessName">Business Name*</label>
              <div className="input-group-md">
                <input
                  name="businessname"
                  type="text"
                  className="form-control input-md"
                  id="personname"
                  value={values.businessname}
                  placeholder="Enter your Full Name"
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel">
              <label htmlFor="inputpassword">Password*</label>
              <div className="input-group-md">
                <input
                  name="password"
                  type="password"
                  className="form-control input-lg"
                  id="password"
                  value={values.password}
                  placeholder="Set Password"
                  onChange={this.props.handleChange}
                />
                {values.formErrors.password.length > 0 && (
                  <span className="errorMessage">
                    {values.formErrors.password}
                  </span>
                )}
              </div>
              <p className="lead-reg">Minimum 8 charecters</p>

              <p className="lead-reg">
                By filling this form,I agree to <a href="#">Terms of Use</a>
              </p>
            </div>

            <div className="row pad-submit">
              <button
                className="btn btn-light reg-submit col-lg-11 my-3 my-sm-0 col-md-6 col-sm-12"
                type="submit"
                disabled={
                  !values.email ||
                  !values.mobile ||
                  !values.password ||
                  !values.businessname
                }
                onClick={this.saveAndContinue}
              >
                Continue
              </button>
            </div>
            <div className="footer-account">
              <p className="lead-reg">
                Already a Seller?<a href="/signin">Login here</a>
              </p>
            </div>
            {values.error && <p>{values.error}</p>}
          </form>
        </div>
      </div>
    );
  }
}
