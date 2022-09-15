const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Database/Database');

const WaterLevel = DBconfig.define("waterlevel",{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    model:{
        type :DataTypes.STRING,
        allowNull : false
    },
    firmwareVersion:{
        type :DataTypes.STRING,
        allowNull : false
    },
    deviceImei:{
        type :DataTypes.STRING,
        allowNull : false
    },
    deviceId:{
        type :DataTypes.STRING,
        allowNull : false
    },
    dateTime:{
        type :DataTypes.STRING,
        allowNull : false
    },
    tankType:{
        type: DataTypes.TINYINT,
        defaultValue: 1
    },
    waterLevel:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    waterFlow:{
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    waterOverFlow:{
        type: DataTypes.TINYINT,
        defaultValue : 0
    },
    lat:{
        type :DataTypes.STRING,
        allowNull : false
    },
    long:{
        type :DataTypes.STRING,
        allowNull : false
    },
    serial:{
        type :DataTypes.STRING,
        allowNull : false
    },
    isLive:{
        type: DataTypes.TINYINT,
        defaultValue: 0
    },
    createdAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    updatedAt: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
},{
    //timestamps: true,
    freezeTableName: true
})

//WaterLevel.sync({force: true})

module.exports = WaterLevel