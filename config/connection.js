var Sequelize = require("sequelize")
var connection;


if(process.env.JAWSDB_URL){
    connection = new Sequelize (process.env.JAWSDB_URL);
}else{
    connnection = new Sequelize ("eventPlanner_db", "root", "MS@Dc02830786",{
        host: "localhost",
        dialect: "mysql",
        port: "3306"
    })
};


module.exports = connection;