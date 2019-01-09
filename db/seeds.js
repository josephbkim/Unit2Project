const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')


const newNote1 = new Note({
    createdAt: "Now",
    noteContent: "Broken"
})

const newNote2 = new Note({
    CreatedAt: "Now",
    noteContent: "Cool"

})

const newTool1 = new Tool({
    toolName: "Cutoff Saw",
    toolCo: "Stihl",
    toolModel: "TS420",
    checkOut: "date.now",
    note: [newNote1, newNote2]
})

const newTool2 = new Tool({
    toolName: "Hammer Drill",
    toolCo: "Bosch",
    toolModel: "TModel#  HD18-2",
    checkOut: "date.now",
    note: [newNote1, newNote2]
})

const newUser1 = new User({
    name: "Bob the Builder",
    department: "Residential",
    tools: [newTool1, newTool2]
})

const newUser2 = new User({
    name: "Paul Bunyun",
    department: "Lumber",
    tools: [newTool1, newTool2]
})

User.remove({})
    .then(() => Note.remove({}))
    .then(() => Tool.remove({}))
    .then(() => Tool.insertMany([newTool1, newTool2]))
    .then(() => Note.insertMany([newNote1, newNote2]))
    .then(() => newUser1.save())
    .then(() => newUser2.save())
    .then(() => {
        console.log("Seeds file finished loading")
    })



