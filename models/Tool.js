const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tool = new Schema({
    toolName: String,
    toolCo: String,
    toolModel: String,
    checkOut: String,
    employTag: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    notes: [{
        type: Schema.Types.ObjectId,
        ref: 'Note'
    }]

});

module.exports = mongoose.model("Tool", Tool)