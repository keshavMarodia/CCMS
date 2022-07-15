require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const routes = require("./routes/demo");
const { getCase, updateCase } = require("./controllers/case");

// Connection URL
const url = "mongodb://localhost:27017";
// Database Name
const dbName = "ccmsDB";

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
mongoose.connect(url + "/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const User = new mongoose.model("User", userSchema);
// this route is used for getting the initial list for the dropdown menu an d the post request is forthe sign up users
app.route("/api/list").post(function (req, res) {
  // bcrypt is used to hash the password to be saved in database
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    User.findOne({ username: req.body.username }, function (err, foundUser) {
      if (!foundUser) {
        var new_user = new User({
          username: req.body.username,
          password: hash,
        });
        new_user.save(function (err, result) {
          if (err) {
            res.json({ status: "UpdateFailure" });
          } else {
            console.log(result);
            res.json({ status: "UpdateSuccess" });
          }
        });
      } else {
        User.updateOne(
          { username: req.body.username },
          { password: hash },
          function (err) {
            if (err) {
              res.json({ status: "UpdateFailure" });
            } else {
              res.json({ status: "UpdateSuccess" });
            }
          }
        );
      }
    });
  });
});
// this route is defined for the login button for finding the already existing users and comparing password
app.route("/api/user").post(function (req, res) {
  User.findOne({ username: req.body.username }, function (err, foundUser) {
    if (!err) {
      if (!foundUser || foundUser.password == "") {
        res.json({ status: "emptyPassword" });
      } else {
        if (foundUser) {
          // decryption of the password to compare with the typed password
          bcrypt.compare(
            req.body.password,
            foundUser.password,
            function (err, result) {
              if (result === true) res.json({ status: "match" });
              else {
                res.json({ status: "incorrect" });
              }
            }
          );
        }
      }
    } else {
      res.json({ status: "primaryError" });
    }
  });
});
app.route("/api/try").get(async function (req, res) {
  await client.connect();
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  const collection = db.collection("commments");
  console.log(req.body);
  const findResult = await collection.find({}).toArray();
  console.log("Found documents =>", findResult);
  res.json(findResult);
});

app
  .route("/case")
  .get(async function (req, res) {
    const caseobj = await getCase(req, res);
    console.log(caseobj);
    res.json(caseobj);
  })
  .post(async function (req, res) {
    const updatedCase = await updateCase(req, res);
    res.json(updatedCase);
  });

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});
