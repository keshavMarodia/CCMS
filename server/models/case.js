const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema ({
    caseType:{
      type: String,
      required : true
    },
    caseNo: {
      type : Number,
      required : true
    },
    caseYear:{
        type: Number,
        required : true
    },
    courtType : { 
        type: String,
        required : true
    }
  });
  

const Case = mongoose.model("Case", caseSchema);
module.exports={Case};
  