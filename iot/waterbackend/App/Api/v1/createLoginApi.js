const {CreateLoginWithData} = require('../../Controllers/LoginControllers');

const CreateLogin = (req, res)=>{

    if(req.method === "POST"){

        const emailId = req.body.email ? req.body.email : ''
        const password = req.body.password ? req.body.password : ''
        const confirmPassword = req.body.confirmPassword ? req.body.confirmPassword : ''

        if(!emailId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Email Id required || Sorry",
            })
        }

        if(!password){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Password required || Sorry",
            })
        }

        if(!confirmPassword){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Confirm Password is required || Sorry",
            })
        }

        CreateLoginWithData(res, req.body)

    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        })
    }
}


module.exports = CreateLogin