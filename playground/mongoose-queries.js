const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose");
const {Todo} = require("./../server/models/todo");

const {user} = require("./../server/models/user");

// var id = "5ac36618cb4c20055040909e";
//
// if(!ObjectID.isValid(id)) {
//   console.log("Id not valid");
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log("Todos:",todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log("Todo:",todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("Todo not found");
//   }
//   console.log("TodoOne:",todo);
// }).catch((e)=> console.log(e));

var id = "5abe5053357d841cb0a7f08c";

user.findById(id).then((user)=>{
  if(!user){
    console.log("User not found");
  }else{
    console.log(JSON.stringify(user,undefined,2));
  }

},(e)=>{
  console.log(e);
});
