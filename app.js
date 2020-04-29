var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

var neo4j = require("neo4j-driver");
var app = express();

// View Engine
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

var driver = neo4j.driver('bolt://localhost', )

app.listen(3000);
console.log("Server Started on Port 3000....");

app.get("/", (req, res)=>{
    res.send("Helllllo")
})
module.exports = app;