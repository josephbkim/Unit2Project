const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = new Schema({
    createdAt: String,
    noteContent: String
});

module.exports = mongoose.model("Note", Note)

