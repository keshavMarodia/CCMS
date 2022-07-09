const {Case} = require("../models/case");

async function getCase(req,res){
    const searchRequest = req.query;
    console.log(searchRequest);
    const result = await Case.find(searchRequest);
    return result;
}

module.exports = {getCase};