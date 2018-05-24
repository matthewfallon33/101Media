var express = require("express");
var path = require("path");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
  res.render("index");
})

<<<<<<< HEAD
app.listen(3000, () => {
=======
app.listen(80, () => {
>>>>>>> 9b499b8f3e9b2dbdf608fbb267a5f9ea18e85ae8
  console.log("App running on port 3000");
})
