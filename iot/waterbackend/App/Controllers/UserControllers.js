const UserRegistrationModel = require('../Models/UserRegisterModel');
const UserLoginModel = require('../Models/UserLoginModel');

const UserRegistration = (res, jsonData)=>{

    UserRegistrationModel.upsert({
        userName: jsonData.userName,
        userTitle : jsonData.userTitle,
        userAddress : jsonData.userAddress,
        city: jsonData.city,
        state : jsonData.state,
        pincode : jsonData.pincode,
        contactNumber : jsonData.contactNumber,
        email : jsonData.email
    },{
        email : jsonData.email
    })
    .then(resp=>{
        if(resp){
            const [responseData] = resp

            UserLoginModel.upsert({
                email: responseData.email
            },{
                email: responseData.email
            })
            .then(response =>{
                if(response){
                    const [resData] = response
                    return res.json({
                        "responseCode" : 200,
                        "responseMessage" : "Your data saved successfully",
                        "data" : {
                            "email" :resData.email
                        }
                    })
                }else{
                    return res.json({
                        "responseCode" : 200,
                        "responseMessage" : "Your data saved successfully || Login not created",
                    })
                }
            })
            
        }else{
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Failed! sorry your data is not saved please try again"
            })
        }
    })
    .catch(err =>{
        return res.json({
            "responseCode" : 505,
            "responseMessage" : "Somthing Wrong"
        })
    })
}

module.exports = {
    UserRegistration
}