const mongoose = require("mongoose");

const postDetailsSchema = new mongoose.Schema ({
    postDate :{
        type : Date
    },
    postReason : { 
        type : String
    }
  });
  

const PostDetails = mongoose.model("PostDetails", postDetailsSchema);
module.exports={ PostDetails , postDetailsSchema};