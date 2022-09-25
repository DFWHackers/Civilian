const mongoose = require("mongoose");

const lawyerSchema = new mongoose.Schema({
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
  }
});

const lawyerModel = mongoose.model("lawyers", lawyerSchema);
module.exports = lawyerModel;
