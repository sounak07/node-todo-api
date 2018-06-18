// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
  if(err){
    return console.log("Unable to connect to database");
  }
  console.log("Connected To Mongodb");

  const db = client.db("TodoApp");

  // db.collection("Users").deleteMany({name:"Sounak"}).then((todo) => {
  //   console.log("Todos deleted:");
  //   console.log(todo);
  // });

  // db.collection("Todos").deleteOne({text:"Eat Lunch"}).then((todo) => {
  //   console.log("Todos deleted:");
  //   console.log(todo);
  // });

  db.collection("Users").findOneAndDelete({_id:new ObjectID("5ab66ee22fd9506cb2452e3c")}).then((todo) => {
    console.log(todo);
  });


  // client.close();
});
