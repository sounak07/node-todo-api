var express = require("express");
var bodyParser = require("body-parser");


var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");
var {ObjectID} = require("mongodb");

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


//post route
app.post("/todos",(req,res) => {
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(e)=>{
    res.status(400).send(e);
  });

});

//GET route
app.get("/todos",(req,res)=>{
  Todo.find().then((todos) => {
    res.send({todos});
  },(e)=>{
    res.status(400).send(e);
  });
});

//GET /todos/125646
app.get("/todos/:id",(req, res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
      return res.status(404).send();
  }

  Todo.findById(id).then((todo)=>{
    if(!todo){
      res.status(404).send();
    }

     res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });

});

//delete route
app.delete("/todos/:id",(req,res)=>{
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((todo)=>{
      if(!todo){
        res.status(404).send();
      } else {
        res.status(200).send({todo});
      }

  }).catch((e)=>{
    res.status(400).send();
  });
});

app.listen(port,()=>{
  console.log(`Server started ${port}`);
});

module.exports = {app};
