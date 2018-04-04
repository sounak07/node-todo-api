var mongoose = require("mongoose");

//to use Promise
mongoose.Promise = global.Promise;

//connection establised
mongoose.connect("mongodb://localhost:27017/TodoApp");

module.exports = {mongoose};
