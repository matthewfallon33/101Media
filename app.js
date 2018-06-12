var express = require("express");
var path = require("path");
var graph = require("fbgraph");
var app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  // try get extended token use temp for meantime
  let posts = [];
  graph.setAccessToken(process.env.APP_TOKEN);
  graph.get("/me/posts", {limit: 5, access_token: process.env.APP_TOKEN}, function(err, response) {
    if(response.data){
      for (var i = 0; i < response.data.length; i++) {
            if(response.data[i].message !== undefined || response.data[i].message !== undefined){
            posts.push(response.data[i]);
        }
      }
      res.render("index", {posts: posts});
    }else{
      res.render("index", {err:"No Posts here :("});
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("App running on port 3000");
});
