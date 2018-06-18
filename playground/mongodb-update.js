// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp",(err, client) => {
  if(err){
    return console.log("Unable to connect to database");
  }
  console.log("Connected To Mongodb");

  const db = client.db("TodoApp");

  db.collection("Todos").findOneAndUpdate({
    _id:new ObjectID("5ab5374435856774f495ec16")
  }, {
    $set: {
      completed: true
    }
  },{
    returnOriginal:false
  }).then((todo) => {
    console.log(todo);
  });

  db.collection("Users").findOneAndUpdate({
    _id:new ObjectID("5ab656843627870a7448c9b5")
  },
  {
      $set:{
        name: "Anuradha Lakhotia"
      },
       $inc: {
      age:-1
    }
  }, {
    returnOriginal:false
  }).then((todo)=>{
  console.log(todo);
});

  // client.close();
});
