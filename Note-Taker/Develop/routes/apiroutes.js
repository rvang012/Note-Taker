var fs = require("fs");
var data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

module.exports = function (app) {
    app.get("/api/notes", function (req, res) {
        res.json(data);
    })
};

app.get("/api/notes", function (req, res) {
    res.json(data[Number(req.params.id)]);
  });

app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    let uniqueId = data.length.toString();
    
    newNote.Id = uniqueId;
    data.push(newNote);

    res.json(data);
});

app.delete("/api/notes/:id", function (req, res){
    let noteId = req.params.id;
    let newId = 0;
    data = data.filter((currentNote) => {
        return currentNote.id != noteId;
    });
    for (currentNote of data) {
        currenteNote.id = newId.toString();
        newId++;
    }
    res.json(data);
});