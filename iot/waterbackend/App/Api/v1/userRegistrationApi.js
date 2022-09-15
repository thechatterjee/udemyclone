const {UserRegistration} = require('../../Controllers/UserControllers');

const UserRegister = (req, res)=>{

    if(req.method === "POST"){
        
        const userName = req.body.userName ? req.body.userName : ''
        const userTitle = req.body.userTitle ? req.body.userTitle : ''
        const userAddress = req.body.userAddress ? req.body.userAddress : ''
        const city = req.body.city ? req.body.city : ''
        const state = req.body.state ? req.body.state : ''
        const pincode = req.body.pincode ? req.body.pincode : ''
        const contactNumber = req.body.contactNumber ? req.body.contactNumber : ''
        const email = req.body.email ? req.body.email : ''

        if(!userName){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "User Name is required || Sorry",
            }) 
        }

        if(!userTitle){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "User Title is required || Sorry",
            }) 
        }

        if(!userAddress){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Address required || Sorry",
            }) 
        }

        if(!city){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "City is required || Sorry",
            }) 
        }

        if(!state){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "State is required || Sorry",
            }) 
        }

        if(!pincode){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Pincode is required || Sorry",
            }) 
        }

        if(!contactNumber){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Mobile No is required || Sorry",
            }) 
        }

        if(!email){
            return res.json({
                "responeCode" : 204,
                "responseMessage" : "Tank Type is required || Sorry",
            }) 
        }

        UserRegistration(res, req.body)
        
    }else{
        return res.json({
            "responeCode" : 405,
            "responseMessage" : "Invalid Requested method || Sorry",
        }) 
    }
}

module.exports = UserRegister;