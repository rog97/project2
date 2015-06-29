// --------------- STARTUP MODEL --------------- //

var mongoose = require("mongoose"),
	Schema	 = mongoose.Schema;

var startupSchema = Schema ({
	name: {type: String, required: true},
	vertical: String,
	location: String,
	stage: String,
	capitalRaised: String,
	hiring: String,
	pageOwner: String,
	date: {type: Date, default: Date.now},
	content: String
});

var Startup = mongoose.model("Startup", startupSchema);
// "Startup" becomes "startups" collection in mongo

module.exports = Startup;