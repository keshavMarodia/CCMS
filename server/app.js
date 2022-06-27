require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");
const routes = require("./routes/demo");

const app = express();
const PORT = process.env.PORT || 8000;

app.use("/", routes);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/ccmsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);
app
  .route("/api/user")
  .get(function (req, res) {
    User.find(function (err, foundUsers) {
      if (!err) {
        res.send(foundUsers);
      } else {
        res.send(err);
      }
    });
  })
  .post(function (req, res) {
    console.log(req.body);
    res.send("success");
  });

// app.get("/home", (req, res) => {
//   res.send({ message: "hello this is home with get " });
// });

// app.post("/home", (req, res) => {
//   res.send({ message: "hello this is home page but with post method " });
// });

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});
