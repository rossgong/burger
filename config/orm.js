var connection = require('./connection');

var sandwichTable = "sandwiches";

module.exports = {
	selectAll: (cb) => {
		connection.query("SELECT * FROM " + sandwichTable, (err, data) => {
			if (err) {
				throw err;
			} else {
				console.log("SUCCESS: select all");
				cb(data);
			}
		});
	},

	insertOne: (row, cb) => {
		if (row.sandwich_name) {
			connection.query("INSERT INTO ?? (??,??) VALUES (?,?)",
				[sandwichTable, "sandwich_name", "devoured", row.sandwich_name, row.devoured],
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
			console.log(row);
			console.log("ERROR: Data should be formatted with sandwich_name and devoured");
		}
	},

	updateOne: (id, data, cb) => {
		if (data.devoured || data.sandwich_name) {
			var queryString = connection.format("UPDATE ?? SET ", sandwichTable);
			if (data.devoured) {
				queryString += connection.format("??=?,", ["devoured", data.devoured]);
			}

			if (data.sandwich_name) {
				queryString += connection.format("??=?,", ["sandwich_name", data.sandwich_name]);
			}

			console.log(queryString);
			queryString = queryString.slice(0, -1);



			connection.query(queryString + " WHERE id=?", [parseInt(id)], (err, data) => {
				if (err) {
					throw err;
				} else {
					console.log("SUCCESS: Successfully updated row#" + id);
					cb();
				}
			});
		} else {
			console.log("ERROR: Must give either devoured or sandwich_name to be updated")
		}
	}
}