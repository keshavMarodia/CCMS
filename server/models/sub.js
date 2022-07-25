const mongoose = require("mongoose");

const subCaseSchema = new mongoose.Schema ({
    subcasetype:{
        type:String
    },
    subcaseno:{
        type:String
    },
    subcaseyear:{
        type:String
    },
    filedby:{
        type:String
    },
    subCaseDate : {
        type :Date
    },
    subCasefile : {
        type :String
    },
    statDrop : {
        type :String
    },
    statDate : {
        type :Date
    },
    statGist : {
        type :String
    },
    statFile : {
        type :String
    },
    statCe : {
        type :String
    },
    subFile : {
        type :String
    },
    subPet : {
        type :String
    },
    subRes : {
        type :String
    },
    subPrayer : {
        type :String
    },
    subLand : {
        type :String
    },
    nextHearing : {
        type :Date
    },
  });
  

const SubCase = mongoose.model("SubCase", subCaseSchema);
module.exports={SubCase , subCaseSchema};