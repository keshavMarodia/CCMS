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
// this route is used for getting the initial list for the dropdown menu an d the post request is forthe sign up users
app
  .route("/api/list")
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
    User.updateOne(
      { username: req.body.username },
      { password: req.body.password },
      function (err) {
        if (err) {
          res.json({ status: "UpdateFailure" });
        } else {
          res.json({ status: "UpdateSuccess" });
        }
      }
    );
  });
// this route is defined for the login button for finding the already existing users and comparing password
app.route("/api/user").post(function (req, res) {
  User.findOne({ username: req.body.username }, function (err, foundUser) {
    if (!err) {
      if (foundUser.password == "") {
        res.json({ status: "emptyPassword" });
      } else {
        User.findOne(
          { password: req.body.password },
          function (err, foundName) {
            if (!err) {
              if (!foundName) {
                res.json({ status: "incorrect" });
              } else {
                res.json({ status: "match" });
              }
            } else {
              res.json({ status: "secondaryError" });
            }
          }
        );
      }
      // if (!foundUser) {
      //   const newUser = new User({
      //     fName: _.trim(_.capitalize(req.body.fName)),
      //     lName: _.trim(_.capitalize(req.body.lName)),
      //     username: req.body.username,
      //   });
      //   newUser.save();
      //   res.json({ status: "success" });
      // } else {
      //   User.findOne(
      //     {
      //       fName: _.trim(_.capitalize(req.body.fName)),
      //       lName: _.trim(_.capitalize(req.body.lName)),
      //     },
      //     function (err, foundName) {
      //       if (!err) {
      //         if (!foundName) {
      //           res.json({ status: "failure" });
      //         } else {
      //           res.json({ status: "success" });
      //         }
      //       }
      //     }
      //   );
      // }
    } else {
      res.json({ status: "primaryError" });
    }
  });
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
