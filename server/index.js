const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const mongoose = require("mongoose");
const db = require("../database/index");

app.use(express.static(__dirname + "/../client/dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/getAllLawyers", (req, res) => {
  db.findAllLawyers()
    .then(data => {
      console.log('Success get All Laywers Data!', data)
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('fail to get All lawyers data!', err);
      res.status(400).send(err);
    })
})

app.get("/getMyLawyers", (req, res) => {
  db.findMyLawyer()
    .then(data => {
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('fail to get My lawyer data!');
      res.status(400).send(err);
    })
})

// app.post("/createUser", async (req, res) => {
//   const user = req.body;
//   const newUser = new userModel(user);
//   await newUser.save();
//   res.json(user);
// });

// app.post("/createLawyer", async (req, res) => {
//   const lawyer = req.body;
//   const newLawyer = new lawyerModel(lawyer);
//   await newLawyer.save();
//   res.json(lawyer);
// });


app.listen(3000, () => console.log("App is listening on port 3000!"));
