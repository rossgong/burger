var connection = require('./connection');

var burgerTable = "burgers";

module.exports = {
    selectAll: (cb) => {
        connection.query("SELECT * FROM " + burgerTable, (err, data) => {
            if (err) {
                throw err;
            } else {
                console.log("SUCCESS: select all");
                cb(data);
            }
        });
    },

    insertOne: (row, cb) => {
        if (row.buger_name && row.devoured) {
            connection.query("INSERT INTO ?? VALUES (??, ??) VALUES (?,?)",
                [burgerTable, "burger_name", "devoured", row.buger_name, row.devoured],
                (err, data) => {
                    if (err) {
                        throw err;
                    } else {
                        console.log("SUCCESS: insert");
                        if (cb) {
                            cb();
                        }
                    }
                });
        } else {
            console.log("ERROR: Data should be formatted with burger_name and devoured");
        }
    },

    updateOne: (id, data, cb) => {
        if (data.devoured || data.burger_name) {
            var queryString = connection.format("UPDATE ?? SET ", burgerTable);
            if (data.devoured) {
                queryString += connection.format("??=?,", ["devoured", data.devoured]);
            }

            if (data.burger_name) {
                queryString += connection.format("??=?,", ["burger_name", data.burger_name]);
            }

            queryString = queryString.substring(0, -1);

            connection.query(queryString + " WHERE ??=?", ["id", id], (err, data) => {
                if (err) {
                    throw err;
                } else {
                    console.log("SUCCESS: Successfully updated row#" + id);
                    cb();
                }
            });
        } else {
            console.log("ERROR: Must give either devoured or burger_name to be updated")
        }
    }
}