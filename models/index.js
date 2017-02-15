var mongoose = require("mongoose");
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/personal-api");
mongoose.connect("mongodb://localhost/personal-api");

module.exports.Destination = require("./destinations.js");
module.exports.Suggestion = require("./suggestions.js");