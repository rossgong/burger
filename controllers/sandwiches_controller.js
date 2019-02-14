var express = require('express');
var sandwich = require('../models/sandwich');

var router = express.Router();

router.get("/api/allBurger", (req, res) => {
	sandwich.getSandwiches((data) => {
		res.json(data);
	})
});

router.put("/api/devour/:id", (req, res) => {
	console.log(req.params.id);
	sandwich.updateSandwich(req.params.id, true);
	res.status(200);
	res.end();
});

router.post("/api/sandwich", (req, res) => {
	sandwich.addSandwich(req.body.sandwich_name);
	res.status(200);
	res.end();
});

router.get("/", (req, res) => {
	sandwich.getSandwiches((data) => {
		console.log(data);
		res.render("index", { sandwiches: data });
	})
});

module.exports = router;