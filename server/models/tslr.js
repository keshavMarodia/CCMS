const mongoose = require("mongoose");

const tslrSchema = new mongoose.Schema ({
    ward : { 
        type : String
    },
    block :{
        type : String
    },
    tsno :{
        type : String
    },
    tsExtent :{
        type : String
    },
    oldSurveyNo :{
        type : String
    },
    colNo10 :{
        type : String
    },
    colNo20 :{
        type : String
    },
    colNo30 :{
        type : String
    }
  });
  

const Tslr = mongoose.model("Tslr", tslrSchema);
module.exports={Tslr , tslrSchema};