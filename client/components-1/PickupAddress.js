import React, { Component } from "react";
import "./assets/css/PickupAddress.css";

export default class PickupAddress extends Component {
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
      <div className="pickup">
        <div className="container create-account-container">
          <form className="reg-form">
            <div className="heading">
              <h1>Give your pick up address</h1>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="inputNumber">Enter your Pincode</label>
              <div className="input-group">
                <input
                  name="pincode"
                  type="text"
                  className="form-control input-lg"
                  id="address"
                  placeholder="Enter your pick up pincode"
                  onChange={this.props.handleChange}
                  defaultValue={values.pincode}
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text otpgenerate"
                    type="button"
                    onClick={this.props.handlepincode}
                  >
                    Verify
                  </span>
                </div>
              </div>
              {values.formErrors.pincode.length > 0 && (
                <span className="errorMessage">
                  {values.formErrors.pincode}
                </span>
              )}
            </div>
            <div className="congratulations">
              <h3>Congratulations</h3>
            </div>
            <div className="your-address">
              <p>Your pick up address</p>
            </div>
            <div className="form-group col-lg-12 col-md-12 pickup-field">
              <div className="input-group-md">
                <input
                  name="pickupaddress"
                  type="text"
                  className="form-control input-md"
                  id="pickup"
                  placeholder="Enter your pick up address"
                  defaultValue={values.pickupaddress}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-row row-pad-address pickup-field-1 ">
              <div className="form-group col-lg-6 col-md-6 ">
                <div className="input-group-md">
                  <input
                    type="text"
                    className="form-control input-md"
                    id="pincode"
                    value={values.pincode}
                  />
                </div>
              </div>
              <div className="form-group col-lg-5 col-md-5 headlabel-city ">
                <div className="input-group-md">
                  <input
                    type="text"
                    className="form-control input-md"
                    id="city"
                    value="pincode.city"
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 pickup-field-2">
              <div className="input-group-md">
                <input
                  type="text"
                  className="form-control input-md"
                  id="state"
                  value="pincode.state"
                />
              </div>
            </div>
            <div className="your-reg-office-address">
              <p>Your registered office address</p>
            </div>
            <div className="form-group col-lg-12 col-md-12 reg-office-field">
              <div className="input-group-md">
                <input
                  name="regofficeaddress"
                  type="text"
                  className="form-control input-md"
                  id="pickup"
                  placeholder="Enter your registered office address"
                  defaultValue={values.regofficeaddress}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>

            <div className="row pad-submit">
              <div className="col-md-6">
                <button
                  className="btn btn-light reg-submit col-lg-11 my-3 my-sm-0 col-md-6 col-sm-12"
                  type="submit"
                  onClick={this.back}
                >
                  Back
                </button>
              </div>
              <div className="col-md-6">
                <button
                  className="btn btn-light reg-submit col-lg-11 my-3 my-sm-0 col-md-6 col-sm-12"
                  type="submit"
                  onClick={this.saveAndContinue}
                  disabled={
                    !values.email ||
                    !values.pickupaddress ||
                    !values.regofficeaddress ||
                    !values.pincode
                  }
                >
                  Continue
                </button>
              </div>
            </div>
            {values.error && <p>{values.error}</p>}
          </form>
        </div>
      </div>
    );
  }
}
