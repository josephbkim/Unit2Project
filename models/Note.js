const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = new Schema({
    createdAt: [{
        type: Date,
        default: Date.now

    }],
    noteContent: String
});

module.exports = mongoose.model("Note", Note)

