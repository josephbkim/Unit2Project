const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')


const newNote1 = new Note({
    createdAt: Date.now(),
    noteContent: "Broken"
})

const newNote2 = new Note({
    createdAt: Date.now(),
    noteContent: "Cool"

})

const employ1 = new User({
    createdAt: Date.now(),
    name: "Bob the Builder",
    department: "Residential"
})

const employ2 = new User({
    createdAt: Date.now(),
    name: "Paul Bunyun",
    department: "Lumber"
})

const newTool1 = new Tool({
    toolName: "Cutoff Saw",
    toolCo: "Stihl",
    toolModel: "TS420",
    employTag: [employ1],
    notes: [newNote1]

})

const newTool2 = new Tool({
    toolName: "Hammer Drill",
    toolCo: "Bosch",
    toolModel: "TModel#  HD18-2",
    employTag: [employ2],
    notes: [newNote2]
})


Tool.remove({})
    .then(() => Note.remove({}))
    .then(() => User.remove({}))
    .then(() => User.insertMany([employ1, employ2]))
    .then(() => Note.insertMany([newNote1, newNote2]))
    .then(() => newTool1.save())
    .then(() => newTool2.save())
    .then(() => {
        console.log("Seeds file finished loading")
    })



