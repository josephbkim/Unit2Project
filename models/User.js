const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    createdAt: { type: String, default: Date.now },
    name: String,
    department: String
});

module.exports = mongoose.model("User", User)
