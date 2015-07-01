// --------------- USERS CONTROLLER --------------- //

var express = require("express"),
	router 	= express.Router(),
	User 	= require("../models/user.js"),
	bcrypt	= require("bcrypt");

// ---------- RESTful ROUTES ---------- //

// ----- NEW ----- //

router.get("/new", function (req, res) {
	res.render("users/new");
});

// ----- CREATE ----- //

router.post("/", function (req, res) {
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(req.body.user.password, salt, function (err, hash) {
			req.body.user.password = hash;
			console.log(hash);
			var newUser = new User(req.body.user);
			//saving user into database
			newUser.save(function (err, user) {
				res.redirect(301, "../");
			});
		});
	});
});

// ----- LOGIN ----- //

router.get("/login", function (req, res) {
	res.render("users/login");
});

router.post("/login", function (req, res) {
	var loginAttempt = req.body.user;
	User.findOne({username: loginAttempt.username}, function (err, user) {
		if (user) {
			bcrypt.compare(loginAttempt.password, user.password, function (err, checked) {
				if (checked) {
					req.session.currentUser = user.username;
					console.log(user);
					res.redirect(301, "../startups");
				} else {
					res.redirect(301, "/users/login");
				};
			});
		} else {
			res.redirect(301, "/users/login");
		};
	});
});

module.exports = router;