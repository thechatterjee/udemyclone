const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Config/Database');

const SubscriberModel = DBconfig.define('newsletter_subscribers',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    created_by_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    updated_by_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    }
},{
    timestamps:false,
    freezeTableName : true
});

SubscriberModel.sync()

module.exports = SubscriberModel