const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Database/Database');

const TankRegister = DBconfig.define('tankDetails',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    user_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    location_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    loc_lat:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    loc_long:{
        type: DataTypes.DECIMAL,
        allowNull: true
    },
    device_id:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tank_name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tank_type:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    total_volume:{
        type: DataTypes.STRING,
        allowNull : false
    },
    min_level:{
        type : DataTypes.INTEGER,
        allowNull: false
    },
    max_level : {
        type : DataTypes.INTEGER,
        allowNull: false
    },
    is_active_flag:{
        type : DataTypes.TINYINT,
        defaultValue : 0
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
    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['user_id','device_id','tank_type']
        }
    ]
})

//TankRegister.sync()

module.exports = TankRegister