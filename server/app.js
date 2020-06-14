const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcryptjs");

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
  // console.log(req.body);
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, function (err, hash) {
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      User.find({ email: req.body.email }).then((data) => {
        if (data.length === 0) {
          user
            .save()
            .then(() => {
              console.log("new ID saved");
              //res.redirect("http://localhost:8080/login");
              res.send("written to db");
            })
            .catch(() => {
              console.log("db save error");
              res.send("database write error");
            });
        } else {
          console.log("duplicate address");
          res.send({ email: "duplicate" });
        }
      });
    });
  });
});

app.post("/login", (req, res) => {
  User.find({ email: req.body.email }).then((data) => {
    if (data.length === 0) {
      console.log("no id found");
      res.send({ isLoggedIn: false, email: "noidfound" });
    } else {
      console.log("id found");
      bcrypt.compare(req.body.password, data[0].password, function (
        err,
        result
      ) {
        if (result) {
          res.send({ isLoggedIn: true, email: req.body.email });
        } else {
          res.send({ isLoggedIn: false, email: "passwordincorrect" });
        }
      });
    }
  });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("server listening at 8080");
});
