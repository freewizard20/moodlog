const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

mongoose.connect(
  "mongodb://localhost/login",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded());

// SERVE ROOT
app.use(express.static("build"));

// app.get("/", (req, res) => {
//   User.find().then((data) => {
//     console.log(data);
//     res.send(data);
//   });
// });

app.post("/register", (req, res) => {
  console.log(req.body);
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  user
    .save()
    .then(() => {
      console.log("new ID saved");
      res.send("written to database");
    })
    .catch(() => {
      console.log("error");
      res.send("database write error");
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server listening at 8080");
});
