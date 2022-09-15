const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Config/Database');

const SubscriberEmailModel = DBconfig.define('subscriber_emails',{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    template_name:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    subject:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    body:{
        type : DataTypes.TEXT,
        allowNull: true
    },
    is_active:{
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue : 0
    },
    created_by_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    updated_by_id:{
        type: DataTypes.INTEGER,
        allowNull : false
    },
    created_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      },
    updated_at: {
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    },
    published_at:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
},{
    timestamps:false,
    freezeTableName : true
});

SubscriberEmailModel.sync()

module.exports = SubscriberEmailModel