import React, { Component } from "react";
import "./assets/css/BusinessDetails.css";

export default class BusinessDetails extends Component {
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
      <div className="business-details">
        <div className="container create-account-container">
          <form className="reg-form">
            <div className="heading">
              <h1>Give your Business Details</h1>
            </div>
            <div className="form-check ">
              <label className="form-check-label padding-gst">
                <input
                  className="form-check-input"
                  name="gst"
                  type="radio"
                  id="gst-1"
                  checked={values.hasGst}
                  onChange={this.props.handleGSTChange}
                />
                I have a GSTIN
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label padding-gst padding-gst-3">
                <input
                  className="form-check-input"
                  name="gst"
                  type="radio"
                  id="gst-2"
                  checked={values.noGst}
                  onChange={this.props.handleGSTChange}
                />
                I have applied/will apply for a GSTIN
              </label>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="gstnumber">GSTIN Number</label>
              <div className="input-group">
                <input
                  name="gstin"
                  type="tel"
                  className="form-control input-lg"
                  placeholder="GSTIN Number"
                  value={values.gstin}
                  onChange={this.props.handleChange}
                />
                <div className="input-group-append">
                  <span className="input-group-text otpgenerate" type="button">
                    Verify
                  </span>
                </div>
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
                  disabled={!values.gstin && !values.noGst && values.hasGst}
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
