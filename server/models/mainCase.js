const { subCaseSchema} = require("./sub");

const mongoose = require("mongoose");

const mainCaseSchema = new mongoose.Schema ({
    mainStatus :{
        type : String
    },
    pending : { 
        type : String
    },
    intOrderDate :{
        type : Date
    },
    intOrderForce :{
        type : Date
    },
    intType :{
        type : String
    },
    uploadOrder :{
        type : String
    },
    specifyOther :{
        type : String
    },
    caveatPetition :{
        type : String
    },
    appeal :{
        type : String
    },
    remarks :{
        type : String
    },
    againstGovt :{
        type : String
    },
    dismissedYes :{
        type:String
    },
    directionYes :{
        type:String
    },
    subCase : { 
        type : [subCaseSchema]
    }
  });
  

const MainCase = mongoose.model("MainCase", mainCaseSchema);
module.exports={ MainCase , mainCaseSchema};