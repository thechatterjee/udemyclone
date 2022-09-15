const {Sequelize, DataTypes} = require('sequelize');

const DBconfig = require('../../Database/Database');

const TankTypeModel = DBconfig.define('tanktype',{
    id:{
        type : DataTypes.INTEGER,
        autoIncrement : true,
        primaryKey : true
    },
    tanktypeName:{
        type :DataTypes.STRING,
        allowNull : false
    },
    tankType:{
        type: DataTypes.TINYINT,
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

    freezeTableName: true,
    indexes: [
        {
            unique: true,
            fields: ['tanktypeName','tankType']
        }
    ]
})

TankTypeModel.sync();

module.exports = TankTypeModel