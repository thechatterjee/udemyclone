const DeviceRegisterModel = require('../Models/DeviceRegisterModel')

exports.DeviceRegister = (req, res)=>{

    DeviceRegisterModel.create({
        modelId : req.body.modelId,
        deviceId : req.body.deviceId,
        userId : req.body.userId
    })
    .then(resp=>{
        return res.json({
            "responeCode" : 200,
            "responseMessage" : "Hello Device",
            "responseData" : resp
        })
    })
    .catch(err=>{
        if(err.name === 'SequelizeUniqueConstraintError'){
            return res.json({
                'responseCode' : 500,
                'responseMessage' : err.errors[0].message
            })
            //console.log(err.errors[0].message);
        }
        
        return res.json({
            'responseCode' : 500,
            'responseMessage' : "Something Went Wrong"
        })

    })
    
}