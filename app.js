var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("index");
})

app.listen(3000, () => {
  console.log("App running on port 3000");
})
