// const Note = require('../models/Note')
// const Tool = require('../models/Tool')
const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Bob the Builder",
            department: "Residential",
            tools: []
        })
    })
// Tool.deleteMany({})
//     .then(() => {
//         return Tool.create({
//             toolName: "Cutoff Saw",
//             toolCo: "Stihl",
//             toolModel: String,
//             checkOut: String,
//             checkIn: String,
//         })
//     })
