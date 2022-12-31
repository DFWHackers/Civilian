const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/civilian', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  phoneNumber: {type: Number},
  lawyerEmail: {type: String},
});

const lawyerSchema = new mongoose.Schema({
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  phoneNumber: {type: Number},
  firm: {type: String},
  barCardNum:{type: Number},
  LicenseDate: {type: Date},
  practiceLocation: {type: String},
  practieAreas: [{type: String}],
  picture: {type: String},
});

const Users = mongoose.model("users", userSchema);
const Lawyers = mongoose.model("lawyers", lawyerSchema);

let findAllLawyers = async ()=> {
  return await Lawyers.find();
}

let findMyLawyer = async (laywerEmail) => {
  return await Lawyers.find(laywerEmail);;
}

module.exports.findAllLawyers = findAllLawyers;
module.exports.findMyLawyer = findMyLawyer;

