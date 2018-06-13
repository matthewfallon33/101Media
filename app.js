var express = require("express");
var path = require("path");
var graph = require("fbgraph");
var app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  let posts = [];
  graph.setAccessToken(process.env.APP_TOKEN);
  graph.get("/me/posts", {access_token: process.env.APP_TOKEN}, function(err, response) {
    if(response.data){
      for (var i = 0; i < response.data.length; i++) {
            if(response.data[i].message !== undefined){
              if(posts.length > 0){
                break;
              }
            var postDate = new Date(response.data[i].created_time).toDateString();
            response.data[i].created_time = postDate;
            posts.push(response.data[i]);
          }
      }

      res.render("index", {posts: posts});
    }else{
      console.log(err);
      res.render("index", {err:"No Posts here :("});
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("App running on port 3000");
});
