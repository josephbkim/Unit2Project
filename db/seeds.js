const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')


const newNote1 = new Note({
    createdAt: "Now",
    noteContent: "Broken"
})

const newNote2 = new Note({
    CreatedAt: "Yesterday",
    noteContent: "Cool"

})

const employ1 = new User({
    name: "Bob the Builder",
    department: "Residential",
})

const employ2 = new User({
    name: "Paul Bunyun",
    department: "Lumber",
})

const newTool1 = new Tool({
    toolName: "Cutoff Saw",
    toolCo: "Stihl",
    toolModel: "TS420",
    checkOut: Date.now,
    notes: [newNote1],
    employTag: [employ1]
})

const newTool2 = new Tool({
    toolName: "Hammer Drill",
    toolCo: "Bosch",
    toolModel: "TModel#  HD18-2",
    checkOut: Date.now,
    notes: [newNote2],
    employTag: [employ2]

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



