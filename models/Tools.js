const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tools = new Schema({
    toolName: String,
    toolCo: String,
    toolModel: String,
    checkOut: String,
    checkIn: String
    notes: [{
        noteUser: [{
            Type: Schema.Types.ObjectId,
            ref: 'User'
        }],
        noteTool: [{
            Type: Schema.Types.ObjectId,
            ref: 'Tool'
        }]
        noteContent: String
    }]
}]
});

module.exports = mongoose.model("Tools", Tool)