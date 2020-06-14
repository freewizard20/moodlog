const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("hello");
  res.redirect("https://mood-fw.netlify.app/stat");
});

app.listen(3000, () => {
  console.log("3000");
});
