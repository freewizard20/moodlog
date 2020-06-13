const mongoose = require("mongoose");
const User = require("./models/User");

const name = "Jinhyuk Jeon";
const email = "okjinhyuk@naver.com";
const password = "s90909";

function post() {
  const user = new User({
    name,
    email,
    password,
  });
  user
    .save()
    .then(() => console.log("data saved.."))
    .catch(() => console.log("error"));
  // this appears first as Promise is async.
  //  console.log("end of post");
}

function getOne(name) {
  //   const users = await User.find();
  //   console.log(users[1]);
  User.find({ name: name }).then((data) => {
    console.log(data);
  });
}

// empty list or filled
function deleteOne() {
  User.remove({ name: "Jinhyuk Jeon" }).then((data) => {
    console.log(data);
  });
}

function change(index, name) {
  User.updateOne({ index: index }, { $set: { name: name } }).then((data) => {
    console.log(data);
  });
}

mongoose.connect(
  "mongodb://localhost/login",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB");
  }
);

post();
// getOne("Sam Hamington");
// deleteOne();
