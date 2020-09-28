var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));

let notes = [];

app.get( "/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/notes.html"));
});

app.get('/api/notes', function(req, res) {
    res.json(notes);
});

app.post('/api/notes', function (req, res) {
   let newNotes = req.body;
   notes.push(newNotes);
    res.json(notes);
 });

 require("./routes/htmlroute")(app);
 require("./routes/apiroute")(app); 

app.listen(PORT, function () {
    console.log("App listening on PORT" + PORT);
});