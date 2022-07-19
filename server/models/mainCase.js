const mongoose = require("mongoose");

const mainCaseSchema = new mongoose.Schema ({
    mainStatus :{
        type : String
    },
    pending : { 
        type : String
    },
    intOrderDate :{
        type : Date
    },
    intOrderForce :{
        type : Date
    },
    intType :{
        type : String
    },
    uploadOrder :{
        type : String
    },
    specifyOther :{
        type : String
    },
    caveatPetition :{
        type : String
    },
    appeal :{
        type : String
    },
    remarks :{
        type : String
    },
    dismissedYes :{
        type:String
    },
    directionYes :{
        type:String
    },
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
  

const MainCase = mongoose.model("MainCase", mainCaseSchema);
module.exports={ MainCase , mainCaseSchema};