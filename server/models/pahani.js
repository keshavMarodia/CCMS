const mongoose = require("mongoose");

const pahaniSchema = new mongoose.Schema ({
    sethwar :{
        type : String
    },
    pahaniYear: { 
        type : String
    },
    surveyNo :{
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