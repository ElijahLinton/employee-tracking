const mysql = require("mysql2")

const connection = mysql.CreateConnection({
    host: "localhost",
    user:"root",

    password: "Raven4733!",
    database: "employees"
})
connection.connect( ()=> {
    if(!err) {
        console.log('connection stable ')
    } else {
        throw err;
    }
})
module.exports = connection;