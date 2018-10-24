var mysql = require("mysql")
var connection;


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
    connnection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "MS@Dc02830786",
        database: "eventPlanner_db"
    });
};

connection.connect();
module.exports = connection;