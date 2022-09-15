const DataReceviControllers = require('../../Controllers/DataReceiveControllers');

const DataReceive = (req, res)=>{

    const DataString = req.query.DataString ? req.query.DataString : ''

    if(!DataString){
        return res.json({
            "responeCode" : 204,
            "responseMessage" : "Sorry! Data not found"
        })
    }
    //console.log(req.query);
    DataReceviControllers(res, DataString);
    
}

module.exports = DataReceive;