var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/saw/:word", function(req, res){
    var word = req.params.word;
    res.render("saw", {word: word});
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "post 1", author: "Fisher"},  
        {title: "post 2", author: "Diane"},  
        {title: "post 3", author: "Hercules"}  
    ];
    
    res.render("posts", {posts: posts});
});


app.get("*", function(req, res){
    res.send("Sorry");
});

app.listen(3000, function(){
    console.log("Server Started");
});