const mongoose = require("mongoose");
const { Tslr ,tslrSchema } = require("./tslr");
const { Wstmt ,wstmtSchema } = require("./wstmt");

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
    court : { 
        type: String,
        required : true
    },
    filedBy : { 
      type: String
    },
    landCase : {
      type: Boolean
    },
    impCase : {
      type: Boolean
    },
    court : {
      type: String
    },
    judgeDesig : {
      type : String
    },
    courtHall : {
      type : String
    },
    wstmtOptions : {
      type : [wstmtSchema]
    },
    relief : { 
      type : String
    },
    petitioners : { 
      type : [String]
    },
    respondents : { 
      type : [String]
    },
    property : { 
      type : String
    },
    tslrOptions : {
      type : [tslrSchema]
    },
    extent : { 
      type: String
    }
});
  

const Case = mongoose.model("Case", caseSchema);
module.exports={Case};
  