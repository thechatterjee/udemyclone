const {Sequelize} = require("sequelize");

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.DBUSER,
    process.env.DBPASSWORD,
    {
        host : "localhost",
        dialect : "mysql",
        timezone : '+05:30',
        logging: false // USING FOR OFF ALL SQL QUERY STATUS 
    }
);

module.exports = sequelize;