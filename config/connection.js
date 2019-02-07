var sql = require('mysql');

var connection = sql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "root",
    database: "sandwiches_db"
});

connection.connect(err => {
    if (err) {
        throw err;
    } else {
        console.log("SQL CONNECTION SUCCESSFUL");
    }
})

module.exports = connection;