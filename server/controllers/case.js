const {Case} = require("../models/case");

async function getCase(req,res){
    const searchRequest = req.query;
    console.log(searchRequest);
    const result = await Case.find(searchRequest);
    return result;
}

async function updateCase(req,res){
    const caseBody = req.body;
    if(caseBody.isNewCase){
        const newCase = new Case(caseBody);
        const createdCase = newCase.save();
        console.log("created Case");
        console.log(createdCase);
        return createdCase;
    }
    else{
        let isChanged = false;
        const updatedCase = await Case.findOneAndUpdate({ 
            "court": caseBody.court,
            "caseType" : caseBody.caseType,
            "caseNo" : caseBody.caseNo,
            "caseYear" :caseBody.caseYear
        }, {$set: caseBody}, {new: true});
        if(caseBody?.tslrOptions?.length > 0){
            updatedCase.tslrOptions = caseBody.tslrOptions;
            isChanged=true;
        }
        console.log("pahani data");
        console.log(caseBody.pahani);
        if(caseBody?.pahani?.length > 0){
            updatedCase.pahani = caseBody.pahani;
            isChanged=true;
        }
        updatedCase.save();
        console.log("update Case");
        console.log(updatedCase);

        return updatedCase;
    }
}
module.exports = {getCase , updateCase};