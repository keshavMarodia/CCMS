const mongoose = require("mongoose");

const otherDeptSchema = new mongoose.Schema ({
    deptInterest:{
      type: String
    },
    dept:{
        type: String
    },
    category:{
        type: String
    }
});
  

const OtherDept = mongoose.model("OtherDept", otherDeptSchema);
module.exports={ OtherDept ,otherDeptSchema };
  