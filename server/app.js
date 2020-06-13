const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/register", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(8081, () => {
  console.log("server listening at 8080");
});
