require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(express.json());

app.route("/api/user").post(function (req, res) {
  console.log(req.body);
  res.send("success");
});

app.listen(PORT, function () {
  console.log("Server started on port " + PORT);
});
