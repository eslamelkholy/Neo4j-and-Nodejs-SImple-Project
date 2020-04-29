var express = require("express");
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");

const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://localhost', neo4j.auth.basic('neo4j', 'eslam123'));
const session = driver.session()
var app = express();

// View Engine
app.set("views", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(5000);
console.log("Server Started on Port 5000....");

app.get("/", (req, res)=>{
    session.run('MATCH(n:Movie) RETURN n LIMIT 25')
    .then(function(res){
        res.records.forEach(function(record){
            console.log(record._fields[0].properties);
        });
    }).catch((err) =>{
        console.log(err);
    })
    res.send("Helllllo")
})
module.exports = app;