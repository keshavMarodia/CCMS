const mongoose = require("mongoose");

const otherCaseSchema = new mongoose.Schema ({
    caseType : { 
        type : String
    },
    caseNo :{
        type : String
    },
    caseYear :{
        type : String
    }
  });
  

const OtherCase = mongoose.model("OtherCase", otherCaseSchema);
module.exports={OtherCase , otherCaseSchema};