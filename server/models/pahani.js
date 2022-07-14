const mongoose = require("mongoose");

const pahaniSchema = new mongoose.Schema ({
    sethwar :{
        type : String
    },
    pahaniYear: { 
        type : String
    },
    surveyNo1 :{
        type : String
    },
    surveyNo2 :{
        type : String
    },
    surveyNo3 :{
        type : String
    },
    village :{
        type : String
    },
    extentA :{
        type : String
    },
    extentGuntas :{
        type : String
    },
    pattedarName :{
        type : String
    },
    enjoyerName :{
        type : String
    }


  });
  

const Pahani = mongoose.model("Pahani", pahaniSchema);
module.exports={ Pahani , pahaniSchema};