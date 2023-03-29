const mysql = require('mysql')

let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "teahouse"
})

module.exports = connection;