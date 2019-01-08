const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = [{
    noteTool: [{
        Type: Schema.Types.ObjectId,
        ref: 'Tool'
    }],
    noteContent: String
}]

module.exports = mongoose.model("Note", Note)

