const mongoose = require("mongoose");

const landStatusSchema = new mongoose.Schema ({
    valuedAtDate:{
      type: Date
    },
    status:{
        type: String
    },
    value:{
        type: String
    }
});
  

const LandStatus = mongoose.model("LandStatus", landStatusSchema);
module.exports={ landStatusSchema ,LandStatus };
  