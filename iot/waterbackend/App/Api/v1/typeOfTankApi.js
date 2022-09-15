const {TankType} = require('../../Controllers/TankControllers');

const TypeOfTank = (req, res)=>{

    if(req.method === 'POST'){

        const tankTypeName = req.body.tankTypeName ? req.body.tankTypeName : ''
        const tankType = req.body.tankType ? req.body.tankType : ''

        if(!tankTypeName){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Tank Type Name is required || Sorry",
            }) 
        }

        if(!tankType){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Tank Type is required || Sorry",
            }) 
        }

        TankType(res, req.body)

    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        }) 
    }
}

module.exports = TypeOfTank