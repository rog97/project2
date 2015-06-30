// --------------- APPLICATION NODE --------------- //

// ---------- GLOBAL VARS ---------- //

var express 		= require("express"),
	app 			= express(),
	bodyParser 		= require("body-parser"),
	ejs 			= require("ejs"),
	methodOverride 	= require("method-override"),
	expressLayouts 	= require("express-ejs-layouts"),
	session 		= require("express-session"),
	mongoose 		= require("mongoose"),
	morgan 			= require("morgan");

// setting the process port if its defined on Heruko, otherwise default to 3000 (local)
var PORT = process.env.PORT || 3000;

// ----- SET ----- //

app.set("view engine", "ejs");
app.set("views", "./views");

// ----- USE ----- //

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("./public"));
app.use(methodOverride("_method"));
app.use(morgan("short"));
app.use(expressLayouts);
app.use(session({
	secret: "youcanttouchthis",
	resave: true,
	saveUninitialized: false
}));

// ---------- CONTROLLERS ---------- //

var startupController = require("./controllers/startups.js");
app.use("/startups", startupController);

var userController = require("./controllers/users.js");
app.use("/users", userController);

// ----- ROOT ROUTE ----- //

app.get("/", function (req, res) {
	res.render("welcome.ejs");
});

// ----- CATCHALL ROUTE ----- //

app.use(function (req, res) {
	res.send("This page doesn't exist - FUCK OFF");
});

// ---------- ACTIVATE DATABASE & SERVER ---------- //

mongoose.connect("mongodb://localhost:27017/wiki")
var db = mongoose.connection;
db.on("error", function () {
	console.log("OUCH - you fucked up the database!");
});

db.once("open", function () {
	console.log("Yo' bitch! Database here!");
	app.listen(PORT, function () {
		console.log("Server is here, fuck face!");
	});
});

