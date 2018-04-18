var mongoose = require("mongoose");

//to use Promise
mongoose.Promise = global.Promise;

//connection establised
// mongoose.connect("mongodb://localhost:27017/TodoApp");
var url = process.env.databaseURL;
mongoose.connect(url);

module.exports = {mongoose};
