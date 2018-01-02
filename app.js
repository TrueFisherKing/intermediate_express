var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/saw/:word", function(req, res){
    var word = req.params.word;
    res.render("saw.ejs", {word: word});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "Fisher"},  
        {title: "post 2", author: "Diane"},  
        {title: "post 3", author: "Hercules"}  
    ];
    
    res.render("posts.ejs", {posts: posts});
});


app.get("*", function(req, res){
    res.send("Sorry");
});

app.listen(3000, function(){
    console.log("Server Started");
});