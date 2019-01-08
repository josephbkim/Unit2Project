const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    department: String,
    Tools: [{
        types: Schema.Types.ObjectId,
        ref: 'Tool'
    }]
});

module.exports = mongoose.model("User", User)
