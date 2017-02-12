var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var DestinationSchema = new Schema({
  name: String
});

var Destination = mongoose.model('Destination', DestinationSchema);

module.exports = Destination;