const {FetchUserTank} = require('../../Controllers/TankControllers')

const FetchTank = (req, res)=>{

    if(req.method === "POST"){
        const userId = req.body.userId ? req.body.userId : ''
        if(!userId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Sorry user Id not  found",
            }) 
        }

        FetchUserTank(req, res)

    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        }) 
    }
}

module.exports = FetchTank