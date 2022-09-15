const TankRegisterModel = require('../Models/TankRegisterModel')
const TankTypeModel = require('../Models/TankTypeModel')
const WaterLevel = require('../Models/WaterLevelModel')
// const { QueryTypes } = require('sequelize');
// const DBconfig = require('../../Database/Database')

//REGISTER OR UPDATE A NEW TANK DETAILS
const TankRegister = (res, jsonData)=>{

    //INSERT OR UPDATE 
    TankRegisterModel.upsert({
        user_id: jsonData.userId,
        location_name: jsonData.locationName,
        loc_lat: jsonData.locLat,
        loc_long: jsonData.locLong,
        device_id: jsonData.deviceId,
        tank_name: jsonData.tankName,
        tank_type: jsonData.tankType,
        total_volume: jsonData.totalVolume,
        min_level: jsonData.minLevel,
        max_level: jsonData.maxLevel,
        is_active_flag: jsonData.isActiveFlag,
    },{
        user_id: jsonData.userId,
        device_id: jsonData.deviceId,
        tank_type : jsonData.tankType
    })
    .then(resp=>{

        if(resp){
            return res.json({
                "responseCode" : 200,
                "responseMessage" : "Your data saved successfully"
            })
        }else{
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Failed! sorry your data is not saved please try again"
            })
        }
        
    })
    .catch(err=>{
        return res.json({
            "responseCode" : 505,
            "responseMessage" : "Somthing Wrong"
        })
    })
    
}

//INSERT TANK TYPE
const TankType = (res, jsonData)=>{

    TankTypeModel.upsert({
        tanktypeName: jsonData.tankTypeName,
        tankType: jsonData.tankType
    },{
        tanktypeName: jsonData.tankTypeName,
        tankType : jsonData.tankType
    })
    .then(resp=>{
        if(resp){
            return res.json({
                "responseCode" : 200,
                "responseMessage" : "Your data saved successfully"
            })
        }else{
            return res.json({
                "responseCode" : 204,
                "responseMessage" : "Failed! sorry your data is not saved please try again"
            })
        }
    })
    .catch(err=>{
        return res.json({
            "responseCode" : 505,
            "responseMessage" : "Somthing Wrong"
        })
    })
    
}


const FetchUserTank = (req, res)=>{

    const userId = req.body.userId

    TankRegisterModel.findAll({
        where : {
            user_id : userId
        }
    })
    .then(resp=>{
        return res.json({
            "responseCode" : 200,
            "responseMessage" : "Tank success",
            "responseData" : resp
        })
    })
    .catch(err=>{
        return res.json({
            "responseCode" : 404,
            "responseMessage" : "Error"
        })
    })
   
}

const ViewUserTankDetails = (req, res)=>{
    const userId = req.body.userId
    const responseArray = []

    TankRegisterModel.findAll({
        where : {
            user_id : userId
        }
    })
    .then(resp=>{

        if(resp){

            const respLength = resp ? resp.length : 0;
            if(respLength > 0){

                for(let i = 0; i<respLength ; i++){

                    const device_id = resp[i].device_id
                    const tank_type = resp[i].tank_type

                    WaterLevel.findAll({
                        where:{
                            deviceId : device_id,
                            tankType : tank_type
                        },
                        limit: 1,
                        order: [ [ 'createdAt', 'DESC' ]]
                    })
                    .then((response) =>{
                        console.log(response);
                        responseArray.push(response)
                        // return
                    })

                    return responseArray
                }
                //console.log(responseArray);
                if(responseArray.length > 0){
                    return res.json({
                        "responseCode" : 200,
                        "responseMessage" : "Tank success",
                        "responseData" : responseArray
                    })
                }
            }else{
                return res.json({
                    "responseCode" : 200,
                    "responseMessage" : "Tank success || But No Data Found",
                    "responseData" : []
                })
            }
            
        }else{
            return res.json({
                "responseCode" : 200,
                "responseMessage" : "Tank success || But No Data Found",
                "responseData" : []
            })
        }
        
    })

    // console.log(data);
}

module.exports= {
    TankRegister,
    TankType,
    FetchUserTank,
    ViewUserTankDetails
}
