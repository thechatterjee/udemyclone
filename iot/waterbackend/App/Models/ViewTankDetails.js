const {Sequelize, DataTypes} = require('sequelize')

const DBconfig = require('../../Database/Database')

const ViewTankWaterLevel = DBconfig.define('view_water',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:false
    },
    waterFlow:{
        type: DataTypes.STRING
    },
    waterOverFlow:{
        type : DataTypes.TINYINT
    },
    user_id:{
        type: DataTypes.INTEGER
    },
    deviceId:{
        type : DataTypes.STRING
    },
    createdAt:{
        type: 'TIMESTAMP',
    },
    waterLevel:{
        type : DataTypes.INTEGER
    },
    location_name:{
        type : DataTypes.STRING
    },
    tank_name:{
        type : DataTypes.STRING
    },
    tank_type:{
        type : DataTypes.INTEGER
    },
    min_level:{
        type: DataTypes.INTEGER
    },
    max_level:{
        type: DataTypes.INTEGER
    },
    loc_lat:{
        type: DataTypes.STRING
    },
    loc_long:{
        type: DataTypes.STRING
    },
    total_volume:{
        type: DataTypes.STRING
    },
    deviceImei:{
        type: DataTypes.STRING
    },
    serial:{
        type: DataTypes.STRING
    },
    isLive:{
        type: DataTypes.TINYINT
    }
},{
    freezeTableName: true
})

module.exports = ViewTankWaterLevel