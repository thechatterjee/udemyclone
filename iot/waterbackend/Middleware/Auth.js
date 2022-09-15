const jwt = require('jsonwebtoken');
const UserLoginModel = require('../App/Models/UserLoginModel')

//AUTHANTICATION MIDDLEWARE ======================================
module.exports = (req, res, next)=>{

    if(req.get('Authorization')){
        const token = req.get('Authorization').split(' ')[1]  
        let decodeToken
        try{
            jwt.verify(token, 'sum123', (err, result)=>{

                if(err){
                    if(err.name === 'TokenExpiredError'){
                        return res.json({
                            'responseCode' : 401,
                            'errorMessage' : 'Token Expired'
                        })
                        
                    }else if(err.name === 'JsonWebTokenError'){
                        return res.json({
                            'responseCode' : 401,
                            'errorMessage' : 'jwt malformed'
                        })
                    }else if(err.name === 'NotBeforeError'){
                        return res.json({
                            'responseCode' : 401,
                            'errorMessage' : 'jwt not active'
                        })
                    }
                }

                decodeToken = result
                //console.log("result", result);
            })
        
        }catch(err){
            err.statusCode =500
            throw err
        }

        if(!decodeToken){
            console.log(decodeToken);
            return res.json({
                'responseCode' : 401,
                "responseMessage" : "Unauthorized user"
            })
        }

        //console.log(decodeToken);
        userId = decodeToken.data.userId ? decodeToken.data.userId : ''
        if(!userId){
            return res.json({
                'responseCode' : 401,
                "responseMessage" : "User not registered"
            })
        }

        UserLoginModel.findOne({
            attributes : ['isActive'],
            where:{
                id : userId
            }
        })
        .then(resp=>{
            if(!resp.isActive){
                return res.json({
                    "responeCode" : 401,
                    "responseMessage" : "User is Blocked By Admin",
                })
            }
        })
        .catch(err =>{
            return res.json({
                "responeCode" : 401,
                "responseMessage" : "Not a valid user",
            })
        })
        //console.log("middleware called",token);
        next()
    }else{
        return res.json({
            "responeCode" : 401,
            "responseMessage" : "Unauthorized user",
        })
    }
    
}