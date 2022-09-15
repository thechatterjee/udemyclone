const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    "iotwater",
    "root",
    "Sumit@1992",
    {
        host : "localhost",
        dialect : "mysql",
        timezone : '+05:30',
        logging: false // USING FOR OFF ALL SQL QUERY STATUS 
    }
);

module.exports = sequelize;