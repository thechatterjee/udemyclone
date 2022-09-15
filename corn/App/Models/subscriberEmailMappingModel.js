const {Sequelize, DataTypes}= require('sequelize')

const DBconfig = require('../../Config/Database')


const SubscriberEmailMappingModel = DBconfig.define('subscriber_email_mapping',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    subscriber_email_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    subscriber_emails_template_id:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
},{
    timestamps:false,
    freezeTableName : true
})

SubscriberEmailMappingModel.sync()

module.exports = SubscriberEmailMappingModel

