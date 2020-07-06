import mongoose from "mongoose";
import crypto from "crypto";
const SellerSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: "Email already exists",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
    required: "Email is required",
  },
  mobile: {
    type: Number,
    trim: true,
    unique: "Mobile Number already exists",
    required: "Mobile number is required",
  },
  businessname: {
    type: String,
    trim: true,
    required: "Business Name is required",
  },
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  pincode: {
    type: Number,
    trim: true,
    required: "Pincode is required",
  },
  pickupaddress: {
    type: String,
    trim: true,
    required: "Pickup address is required",
  },
  regofficeaddress: {
    type: String,
    trim: true,
  },
  gstin: {
    type: String,
    trim: true,
    required: "GSTIN is required",
  },
  bankaccountname: {
    type: String,
    trim: true,
    required: "Bank Acccount Name is required",
  },
  bankaccountnumber: {
    type: Number,
    trim: true,
    required: "Bank account number is required",
  },
  ifsc: {
    type: String,
    trim: true,
    required: "IFSC is required",
  },
  pan: {
    type: Number,
    trim: true,
    required: "PAN is required",
  },
});

SellerSchema.virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

SellerSchema.path("hashed_password").validate(function (v) {
  if (this._password && this._password.length < 6) {
    this.invalidate("password", "Password must be at least 6 characters.");
  }
  if (this.isNew && !this._password) {
    this.invalidate("password", "Password is required");
  }
}, null);

SellerSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

export default mongoose.model("Seller", SellerSchema);
