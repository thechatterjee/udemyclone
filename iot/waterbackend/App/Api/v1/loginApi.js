const {Login} = require('../../Controllers/LoginControllers')

const DoLogin = (req, res)=>{
    if(req.method === "POST"){

        const emailId = req.body.email ? req.body.email : ''
        const password = req.body.password ? req.body.password : ''

        if(!emailId){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Email Id required",
            }) 
        }

        if(!password){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Password is required",
            }) 
        }
        
        Login(req, res, req.body)

    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        })
    }
}

module.exports = DoLogin