// --------------- USERS CONTROLLER --------------- //

var express = require("express"),
	router 	= express.Router(),
	User 	= require("../models/user.js");

// ---------- RESTful ROUTES ---------- //

// ----- NEW ----- //

router.get("/new", function (req, res) {
	res.render("users/new");
});

// ----- CREATE ----- //

router.post("/", function (req, res) {
	var newUser = new User(req.body.user);
	newUser.save(function (err, user) {
		res.redirect(301, "../");
	});
});

// ----- LOGIN ----- //

router.get("/login", function (req, res) {
	res.render("users/login");
});

router.post("/login", function (req, res) {
	var loginAttempt = req.body.user;
	User.findOne({username: loginAttempt.username}, function (err, user) {
		if (user && user.password === loginAttempt.password) {
			req.session.currentUser = user.username;
			res.redirect(301, "../startups");
		} else {
			res.redirect(301, "/users/login");
		};
	});
});

module.exports = router;