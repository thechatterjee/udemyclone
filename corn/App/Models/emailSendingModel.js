const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Config/Database');

const EmailSendindModel = DBconfig.define('email_send',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    to_email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_subject: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_body:{
        type: DataTypes.TEXT,
        defaultValue:null
    },
    email_error_response:{
        type: DataTypes.TEXT,
        defaultValue:null
    },
    is_email_send:{
        type: DataTypes.TINYINT,
        defaultValue: 0
    }
},{
    freezeTableName : true
});

EmailSendindModel.sync()

module.exports = EmailSendindModel