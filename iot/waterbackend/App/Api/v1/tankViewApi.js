const {ViewUserTankDetails} = require('../../Controllers/TankControllers')

const TankView = (req, res)=>{

    if(req.method == "POST"){

        const userId = req.body.userId ? req.body.userId : '';
        if(!userId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "User id not found || Sorry",
            })
        }
        
        ViewUserTankDetails(req, res)
    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        })
    }
}

module.exports = TankView