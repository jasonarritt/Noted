
// Required modules
const express = require('express');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

const app = express();

const PORT = process.env.PORT || 3001;

const notes = require('./db/db.json');

// Parses incoming string or array data
app.use(express.urlencoded({ extended: true }));
// Parses incoming JSON data
app.use(express.json());
// Uses public/ folder for Express
app.use(express.static("public"));


// GET /api/notes should read the db.json file and return all saved notes as JSON.
app.get('/api/notes', (req, res) => {
    res.json(notes);
});


// POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).



// ---BONUS---: DELETE /api/notes/:id should receive a query parameter containing the id of a note to delete. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.



// GET /notes should return the notes.html file.


// GET * should return the index.html file.




// Shhh, listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});