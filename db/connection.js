const mysql = require("mysql2")
const dotEnv = require('env')
dotEnv;
const connection = mysql.createConnection({
    host: process.env.HOST,
    user: 'root',
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})
connection.connect(function (err) {
    if(!err) {
        console.log('connection stable ')
    } else {
        throw err;
    }
})
module.exports = connection;