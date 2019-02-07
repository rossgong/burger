var orm = require("../config/orm");

module.exports = {
    addBurger: (burgerName) => {
        orm.insertOne({ burger_name: burgerName, devoured: false }, () => {
            console.log("added " + burgerName);
        });
    },

    updateBurger: (id, devoured) => {
        orm.updateOne(id, { devoured: devoured }, () => {
            console.log("updated burger id#" + id);
        });
    }

    getBurgers: (cb) => {
        orm.selectAll((data) => {
            cb(data);
        });
    }
}