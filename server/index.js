const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const mongoose = require("mongoose");
const userModel = require("./models/users");
const lawyerModel = require("./models/lawyers");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// mongoose.connect(
//   "mongodb+srv://pullover123:HackDFW@cluster-pullover.da96uks.mongodb.net/pulloverDB?retryWrites=true&w=majority"
// );

mongoose.connect('mongodb://localhost/fetcher', {useNewUrlParser: true, useUnifiedTopology: true});

app.get("/getUsers", (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.get("/getLawyers", (req, res) => {
  lawyerModel.find({}, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.post("/createUser", async (req, res) => {
  const user = req.body;
  const newUser = new userModel(user);
  await newUser.save();
  res.json(user);
});

app.post("/createLawyer", async (req, res) => {
  const lawyer = req.body;
  const newLawyer = new lawyerModel(lawyer);
  await newLawyer.save();
  res.json(lawyer);
});


app.listen(3000, () => console.log("App is listening on port 3000!"));
