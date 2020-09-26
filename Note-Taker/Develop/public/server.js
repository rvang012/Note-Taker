const { json } = require("express");

var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded)({ extended: true});
app.use(express.json());
app.use(express.static("public"));

app.get( "/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
});

app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});