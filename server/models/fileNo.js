const mongoose = require("mongoose");

const fileNoSchema = new mongoose.Schema ({
    MROfileNo:{
       type: [String]
    },
    DROfileNo:{
        type: [String]
    },
    collectorateFileNo:{
        type: [String]
    }
});
  

const FileNo = mongoose.model("FileNo", fileNoSchema);
module.exports={ FileNo ,fileNoSchema };
  