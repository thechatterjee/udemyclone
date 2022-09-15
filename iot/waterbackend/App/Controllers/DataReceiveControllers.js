var fs = require('fs')
var path = require('path')
const filePath = path.join(__dirname, '../../log/log.txt');

var logger = fs.createWriteStream(filePath, {
  flags: 'a' // 'a' means appending (old data will be preserved)
})

const WaterLevelModel = require('../Models/WaterLevelModel');

const DataReceiveController = (res, dataString)=>{

    //Example datareceive api url for datasend from device
    //http://localhost:3020/api/v1/datasend?DataString=M1,V1,IMEI0012,DVID01,20220821095601,TANKTYPE,WATERLEVEL,WATERFLOW,OVERFLOW,latitude,longitude,pkt_serial,ISLIVE

    const DataString = dataString.split(',')
    
    if(DataString.length < 13 || DataString.length > 13){
        return res.json({
            "responeCode" : 204,
            "responseMessage" : "Manualy Data Entered Sorry!"
        })
        
    }else{

        /*============================== Data Receive from Device separation here ==========================*/
        const Model = DataString[0] ? DataString[0].toString() : ''; // GET MODEL
        const FirmVersion = DataString[1] ? DataString[1].toString() : '' ; //GET FIRMWARE VERSION
        const DeviceIMEI = DataString[2] ? DataString[2].toString() : ''; // Device IMEI NO
        const DeviceId = DataString[3] ? DataString[3].toString() : ''; //DEVICE ID
        const DateAndTime = DataString[4] ? DataString[4].toString() : '' ; //Device Date & Time
        const TankType = DataString[5] ? DataString[5] : '' ; //Tank Type (Reserver || Overhead)
        const WaterLevel = DataString[6] ? DataString[6] : 0; //Water level percentage || water level (0-100)
        const WaterFlow = DataString[7] ? DataString[7] : 0 ; //Water flow (0 => off && 1 => flow)
        const WaterOverFlow = DataString[8] ? DataString[8] : 0; //Water over flow (0=> no || 1 => flow)
        const Latitude = DataString[9] ? DataString[9].toString() : '' //device Latitude 
        const Longitude = DataString[10] ? DataString[10].toString() : ''; //device Longitude
        const PktSerial = DataString[11] ? DataString[11].toString() : '' ; //Packet Serial
        const IsLive = DataString[12] ? DataString[12] : 0 ; //Check is live or not (0=> offline || 1=> online)

        /**=========================================== DATA STORE INTO DATABASE ======================================================== */
        //WaterLevelModel.findAll();

        WaterLevelModel.create({
            model : Model,
            firmwareVersion : FirmVersion,
            deviceImei : DeviceIMEI,
            deviceId : DeviceId,
            dateTime : DateAndTime,
            tankType : TankType,
            waterLevel : WaterLevel,
            waterFlow : WaterFlow,
            waterOverFlow : WaterOverFlow,
            lat : Latitude,
            long: Longitude,
            serial : PktSerial,
            isLive :IsLive
        })
        .then(resp =>{
            if(resp){

                //======================= SUCCESS LOG STORE INTO LOG FILE ==========================
                logger.write("\r\n"+JSON.stringify(resp)) //store log

                return res.json({
                    "responeCode" : 200,
                    "responseMessage" : "Successfully Data insert",
                    "data" : resp
                })
            }else{
                return res.json({
                    "responeCode" : 401,
                    "responseMessage" : "Failed Data Insert"
                })
            }
        })
    }    
}

module.exports = DataReceiveController