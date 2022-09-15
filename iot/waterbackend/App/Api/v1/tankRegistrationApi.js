const {TankRegister} = require('../../Controllers/TankControllers');

const TankRegistration = (req, res)=>{

    if(req.method === "POST"){

        const userId = req.body.userId ? req.body.userId : ''
        const locationName = req.body.locationName ? req.body.locationName : ''
        const deviceId = req.body.deviceId ? req.body.deviceId : ''
        const tankName = req.body.tankName ? req.body.tankName : ''
        const tankType = req.body.tankType ? req.body.tankType : ''
        const totalVolume = req.body.totalVolume ? req.body.totalVolume : ''
        const minLevel = req.body.minLevel ? req.body.minLevel : ''
        const maxLevel = req.body.maxLevel ? req.body.maxLevel : ''

        if(!userId){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "User Id Required"
            })
        }

        if(!locationName){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Location Name Id Required"
            })
        }

        if(!deviceId){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Device Id Required"
            })
        }

        if(!tankName){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Tank Name Required"
            })
        }

        if(!tankType){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Tank Type Required"
            })
        }

        if(!totalVolume){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Total Volume Required"
            })
        }

        if(!minLevel){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Min Level Required"
            })
        }

        if(!maxLevel){
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Max Level Required"
            })
        }

        TankRegister(res, req.body) //Calling Controller
        
    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        }) 
    }
}

module.exports = TankRegistration;