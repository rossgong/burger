var orm = require("../config/orm");

module.exports = {
    addSandwich: (sandwichName) => {
        orm.insertOne({ sandwich_name: sandwichName, devoured: false }, () => {
            console.log("added " + sandwichName);
        });
    },

    updateSandwich: (id, devoured) => {
        orm.updateOne(id, { devoured: devoured }, () => {
            console.log("updated sandwich id#" + id);
        });
    },

    getSandwichs: (cb) => {
        orm.selectAll((data) => {
            cb(data);
        });
    }
}