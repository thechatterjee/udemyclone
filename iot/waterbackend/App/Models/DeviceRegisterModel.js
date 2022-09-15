const {Sequelize, DataTypes} = require('sequelize')

const DBconfig = require('../../Database/Database')

const DeviceRegisterModel = DBconfig.define('deviceRegister',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    modelId:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    deviceId:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false
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
    freezeTableName : true,
    indexes: [
        {
            unique: true,
            fields: ['deviceId']
        }
    ]
})

DeviceRegisterModel.sync()

module.exports = DeviceRegisterModel