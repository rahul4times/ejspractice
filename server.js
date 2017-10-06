var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let obj = {
    name: "yourname",
    email: "email",
    favoriteFood: "food"
  }
  // Your code here

});

app.get('/list', function(req,res){
  let users = [
    {
      name:"kevin",
      age: 15
    },
    {
      name:"jess",
      age: 32
    },
    {
      name:"shae",
      age: 22
    }
  ];
  // Your code here

});

app.get('/login', function(req,res){

});

app.post('/login', function(req, res){
  
});
app.listen(port, function () {
  console.log("running on localhost:"+port);
});
