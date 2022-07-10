const mongoose = require("mongoose");

const wstmtSchema = new mongoose.Schema ({
    wscf:{
        type: String
    },
    noticeDate : { 
        type : Date
    },
    pendingAt : {
        type : String
    },
    reasonforPend : {
        type : String 
    },
    coAffidavit : { 
        type :Date
    },
    deptName : { 
        type : String
    }
  });
  

const Wstmt = mongoose.model("Wstmt", wstmtSchema);
module.exports={ Wstmt , wstmtSchema};