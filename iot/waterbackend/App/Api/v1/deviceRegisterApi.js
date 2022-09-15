const {DeviceRegister} = require('../../Controllers/DeviceRegisterController')

module.exports = (req, res)=>{

    if(req.method === "POST"){
        const modelId = req.body.modelId ? req.body.modelId : ''
        const deviceId = req.body.deviceId ? req.body.deviceId : ''
        const userId = req.body.userId ? req.body.userId : ''

        if(!deviceId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Sorry Device Id not  found",
            })
        }

        if(!modelId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Sorry Model not  found",
            })
        }

        if(!userId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Sorry user Id not  found",
            }) 
        }

        DeviceRegister(req, res)
        
    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        }) 
    }
}