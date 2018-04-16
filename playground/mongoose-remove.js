const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

const {user} = require("./../server/models/user");

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove

Todo.findByIdAndRemove("5ad4b86e16b7f55f571da92d").then((result)=>{
  console.log(result);
})
