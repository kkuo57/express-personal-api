var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  name: String,
  country: String
});

var Suggestion = mongoose.model('Suggestion', SuggestionSchema);

module.exports = Suggestion;