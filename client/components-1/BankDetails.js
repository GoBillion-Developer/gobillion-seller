import React, { Component } from "react";
import "./assets/css/BankDetails.css";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class BankDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.clickSubmit();
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
              <h1>Give your Bank Details</h1>
            </div>
            {/* <div className="form-check ">
              <label className="form-check-label padding-gst">
                <input className="form-check-input" name="gst-1" type="radio" />
                I have a Bank Account in my registered business name
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label padding-gst padding-gst-3">
                <input className="form-check-input" name="gst-2" type="radio" />
                I have applied/will apply for Bank Account in my registered
                business
              </label>
            </div> */}
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="account name">Account Holder's Name</label>
              <div className="input-group">
                <input
                  name="bankaccountname"
                  type="text"
                  className="form-control input-lg"
                  placeholder="Enter account holder's name"
                  value={values.bankaccountname}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="accountnumber">Bank account number</label>
              <div className="input-group">
                <input
                  name="bankaccountnumber"
                  type="tel"
                  className="form-control input-lg"
                  placeholder="Enter bank account number"
                  value={values.bankaccountnumber}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="accountnumber">IFSC</label>
              <div className="input-group">
                <input
                  name="ifsc"
                  type="text"
                  className="form-control input-lg"
                  placeholder="Enter IFSC"
                  value={values.ifsc}
                  onChange={this.props.handleChange}
                />
              </div>
            </div>
            <div className="form-group col-lg-12 col-md-12 headlabel py-2">
              <label htmlFor="account name">PAN Card Number</label>
              <div className="input-group">
                <input
                  name="pan"
                  type="text"
                  className="form-control input-lg"
                  placeholder="Enter PAN card number"
                  value={values.pan}
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
                    !values.bankaccountname ||
                    !values.bankaccountnumber ||
                    !values.pan
                  }
                >
                  Continue
                </button>
              </div>
            </div>
            {values.error && <p>{values.error}</p>}
          </form>
        </div>
        <Dialog open={values.open} disableBackdropClick={true}>
          <DialogTitle>New Account</DialogTitle>
          <DialogContent>
            <DialogContentText>
              New account successfully created.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link to="/signin">
              <Button color="primary" autoFocus="autoFocus" variant="contained">
                Sign In
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
