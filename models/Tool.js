const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Tools = new Schema({
    toolName: String,
    toolCo: String,
    toolModel: String,
    checkOut: String,
    checkIn: String
    notes: [{
        type: Schema.Types.ObjectId
        ref: 'Note'
    }]

});

module.exports = mongoose.model("Tool", Tool)