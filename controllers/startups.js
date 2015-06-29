// --------------- STARTUPS CONTROLLER --------------- //

var express = require("express"),
	router 	= express.Router(),
	Startup = require("../models/startup.js");

// ---------- RESTful ROUTES ---------- //

// ----- INDEX ----- //

router.get("/", function (req, res) {
	Startup.find({}, function (err, startupsArray) {
		if (err) {
			console.log(err);
		} else {
			console.log("startupsArray: " + startupsArray);
			res.render("startups/index", {startups: startupsArray});
		};
	});
});

// ----- NEW ----- //

router.get("/new", function (req, res) {
	res.render("startups/new");
});

// ----- CREATE ----- //

router.post("/", function (req, res) {
	var newStartup = new Startup(req.body.startup);
	newStartup.save(function (err, startup) {
		if (err) {
			console.log(err);
		} else {
			console.log(startup);
			res.redirect(301, "/startups");
		};
	});
});

// ----- SHOW ----- //

router.get("/:id", function (req, res) {
	var mongoId = req.params.id;
	Startup.findOne({_id: mongoId}, function (err, foundStartup) {
		if (err) {
			console.log(err);
		} else {
			res.render("startups/show", {startup: foundStartup});
		};
	});
});

// ----- DELETE ----- //

router.delete("/:id", function (req, res) {
	var mongoId = req.params.id;
	Startup.remove({_id: mongoId}, function (err, foundStartup) {
		res.redirect(301, "/startups");
	});
});

// ----- EDIT ----- //

router.get("/:id/edit", function (req, res) {
	var mongoId = req.params.id;
	Startup.findOne({_id: mongoId}, function (err, foundStartup) {
		if (err) {
			console.log (err); 
		} else {
			res.render("startups/edit", {startup: foundStartup});
		};
	});
});

// ----- UPDATE ----- //

router.patch("/:id", function (req, res) {
	var mongoId = req.params.id;
	var updatedStartup = req.body.startup;
	Startup.update({_id: mongoId}, updatedStartup, function (err, updatedStartup) {
		if (err) {
			console.log (err); 
		} else {
			res.redirect(301, "/startups");
		};
	});
});

// ----- REQUIRE ----- //

module.exports = router;
