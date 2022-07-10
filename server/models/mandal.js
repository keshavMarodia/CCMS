const mongoose = require("mongoose");

const mandalSchema = new mongoose.Schema ({
    mandalName :{
        type : String
    },
    village : { 
        type : String
    },
    road :{
        type : String
    },
    locality :{
        type : String
    }
  });
  

const Mandal = mongoose.model("Mandal", mandalSchema);
module.exports={ Mandal , mandalSchema};