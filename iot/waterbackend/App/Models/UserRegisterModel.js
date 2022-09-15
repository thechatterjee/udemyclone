const {Sequelize, DataTypes} = require('sequelize')

const DBconfig = require('../../Database/Database');

const UserRegistrationModel = DBconfig.define('userDetails',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    userName:{
        type : DataTypes.STRING,
        allowNull: true
    },
    userTitle:{
        type : DataTypes.STRING,
        allowNull: true
    },
    userAddress:{
        type : DataTypes.TEXT,
        allowNull: true
    },
    city:{
        type : DataTypes.STRING,
        allowNull: true
    },
    state:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    pincode:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    contactNumber:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    userType:{
        type:DataTypes.INTEGER,
        allowNull:false,
        defaultValue : 2
    },
    isActive:{
        type: DataTypes.TINYINT,
        allowNull : false,
        defaultValue : 0
    },
    alertRequired:{
        type: DataTypes.TINYINT,
        allowNull: false,
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
            fields: ['email']
        }
    ]
})

UserRegistrationModel.sync()

module.exports = UserRegistrationModel