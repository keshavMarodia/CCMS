const mongoose = require("mongoose");
const { Tslr ,tslrSchema } = require("./tslr");
const { Wstmt ,wstmtSchema } = require("./wstmt");
const { FileNo ,fileNoSchema } = require("./fileNo");
const { LandStatus ,landStatusSchema } = require("./landStatus");
const { OtherDept ,otherDeptSchema } = require("./otherDept");
const { Mandal , mandalSchema }  = require("./mandal");
const { Pahani , pahaniSchema} = require("./pahani");
const { PostDetails , postDetailsSchema} = require("./postDetails");
const { OtherCase , otherCaseSchema} = require("./otherCase");
const { MainCase , mainCaseSchema} = require("./mainCase");

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
    icourt : {
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
    },
    mandal : {
      type : mandalSchema
    },
    pahani : {
      type : [pahaniSchema]
    },
    landStatus : {
      type : [landStatusSchema]
    },
    otherDept : {
      type : [otherDeptSchema]
    },
    fileNo : {
      type : fileNoSchema
    },
    postDetails : {
      type : [postDetailsSchema]
    },
    otherCase : {
      type : [otherCaseSchema]
    },
    govtPleader : { 
      type: String
    },
    mainCaseStatus : {
      type : mainCaseSchema
    }
});
  

const Case = mongoose.model("Case", caseSchema);
module.exports={Case};
  