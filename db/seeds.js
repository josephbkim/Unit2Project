const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Bob"
        })
    })
