var jwt = require('jsonwebtoken');

const UserLoginModel = require('../Models/UserLoginModel');
const UserRegistrationModel = require('../Models/UserRegisterModel');

const {PasswordHash, PasswordVerify} = require('../../Helper/PasswordVerify')

//CREATE & ACTIVATE LOGIN ===================================================
const CreateLoginWithData = (res, jsonData)=>{

    const password = jsonData.password
    const confirmPassword = jsonData.confirmPassword

    if(password === confirmPassword){
        UserLoginModel.findOne({
            
            where:{
                email : jsonData.email
            }
        })
        .then(resp=>{

            if(resp){
                PasswordHash(password)
                .then(hashPassword=>{
                    if(hashPassword){

                        UserLoginModel.update({
                            password: password,
                            confirmPassword: hashPassword,
                            isActive : 1
                        },{
                            where:{
                                email: jsonData.email
                            }
                        })
                        .then(response=>{
                            
                            if(response){

                                UserRegistrationModel.update({
                                    isActive : 1
                                },{
                                    where: {
                                        email: jsonData.email
                                    }
                                })
                                .then(dataResponse=>{
                                    if(dataResponse){
                                        return res.json({
                                            "responseCode" : 200,
                                            "responseMessage" : "Login Creation Successfully"
                                        })
                                    }else{
                                        return res.json({
                                            "responseCode" : 204,
                                            "responseMessage" : "Login Creation Successfully || User not activated"
                                        })
                                    }
                                })
                                
                            }else{
                                return res.json({
                                    "responseCode" : 204,
                                    "responseMessage" : "Login creation failed"
                                })
                            }
                        })
                        .catch(err =>{
                            return res.json({
                                "responseCode" : 204,
                                "responseMessage" : "Login creation failed"
                            })
                        })
                        
                    }else{
                        return res.json({
                            "responseCode" : 204,
                            "responseMessage" : "Faild to password hasing",
                        })
                    }
                    
                })
                
            }else{
                return res.json({
                    "responseCode" : 401,
                    "responseMessage" : "This email is not registerd"
                })
            }
            
        })
        .catch(err =>{

            return res.json({
                "responseCode" : 505,
                "responseMessage" : "Somthing Wrong"
            })
        })
    }else{
        return res.json({
            "responseCode" : 401,
            "responseMessage" : "Sorry || Password & Confirm password did not matched"
        })
    }
}

//For Do Login ===========================================
const Login =(req, res, jsonData)=>{
    
    const emailId = jsonData.email
    const password = jsonData.password

    UserLoginModel.findOne({
        attributes:['id','email','confirmPassword','isActive'],
        where:{
            email :emailId
        }
    })
    .then(resp =>{

        if(resp){
            const confirmPassword = resp.confirmPassword ? resp.confirmPassword : ''

            PasswordVerify(password, confirmPassword).then(verifyPassword=>{
                if(verifyPassword){
                    const isActive = resp.isActive ? resp.isActive : 0;
                   
                    var privateKey = "sum123";
                    var token = jwt.sign({data: {userId : resp.id, email : resp.email, isActive: resp.isActive}}, privateKey, { expiresIn: '1h' });

                    console.log(req);
                    if(isActive){
                        return res.json({
                            "responeCode" : 200,
                            "responseMessage" : "Login Success",
                            "responseData":{
                                "isLogin" : true,
                                "token" : token,
                                "userId" : resp.id
                            }
                        })
                    }else{
                        return res.json({
                            "responeCode" : 401,
                            "responseMessage" : "User is Blocked By Admin",
                        })
                    }
                }else{
                    return res.json({
                        "responeCode" : 401,
                        "responseMessage" : "Password Mismatch",
                    })
                }
            })
            
        }else{
            return res.json({
                "responeCode" : 401,
                "responseMessage" : "This email is not registerd",
            })
        }
    })
    .catch(err=>{
        return res.json({
            "responeCode" : 401,
            "responseMessage" : "No Data Found",
        })
    })
}



module.exports = {
    CreateLoginWithData,
    Login
}