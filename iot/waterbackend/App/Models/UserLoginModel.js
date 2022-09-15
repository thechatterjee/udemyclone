const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Database/Database');

const UserLoginModel = DBconfig.define('userlogin',{

    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    confirmPassword:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    token:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    isActive:{
        type : DataTypes.TINYINT,
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

UserLoginModel.sync()

module.exports = UserLoginModel