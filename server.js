var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  let obj = {
    name: "Rahul",
    email: "rahul@rahul.com",
    favoriteFood: "Pizza"
  }
  // Your code here
  res.render('index', {myObject: obj});
});

app.get('/list', function(req,res){
  let users = [
    {name:"kevin",age: 15},
    {name:"jess",age: 32},
    {name:"shae",age: 22}
  ];
  // Your code here
  res.render('list', {myObject: users});
});

app.get('/login', function(req,res){
  fs.readFile("./storage.json", 'utf8', function(err, data){
    let usersArr = JSON.parse(data);
    res.render('login', {myObject: usersArr});
    // res.render('pageName', {nameYouGive: dataComesFromVar})
  })

});

app.post('/login', function(req, res){
  fs.readFile("./storage.json", "utf8", function(err, data){
    if(err) throw err;
    let usersArr = JSON.parse(data);

    console.log(req.body);
    usersArr.push(req.body);

    fs.writeFile("./storage.json", JSON.stringify(usersArr), function(err){
      if(err) throw err;

      res.redirect('/login');

    })

  })
});
app.listen(port, function () {
  console.log("running on localhost:" + port);
});
