const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Note = [{
    noteUser: [{
        Type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    noteTool: [{
        Type: Schema.Types.ObjectId,
        ref: 'Tool'
    }],
    noteContent: String
}]

module.exports = mongoose.model("Note", Note)

