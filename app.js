var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:word", function(req, res){
    var word = req.params.word;
    res.render("love.ejs", {thingWord: word});
});

app.listen(3000, function(){
    console.log("Server Started");
});