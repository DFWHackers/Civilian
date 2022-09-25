const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  email: {
    type: String
  },
  emergencyContactFN: {
    type: String
  },
  emergencyContactLN: {
    type: String
  },
  emergencyContactNumber: {
    type: String
  }
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
