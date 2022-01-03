var mongoose = require("mongoose");

var schema = new mongoose.Schema({
  shar: String,
  writer: String,
});
var Shari = mongoose.model("Shari", schema);
module.exports = Shari;
