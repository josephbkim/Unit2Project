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
    employTag: [employ1],
    note: [newNote1]
})

const newTool2 = new Tool({
    toolName: "Hammer Drill",
    toolCo: "Bosch",
    toolModel: "TModel#  HD18-2",
    checkOut: "date.now",
    employTag: [employ2],
    note: [newNote2]
})

const employ1 = new User({
    name: "Bob the Builder",
    department: "Residential",
})

const employ2 = new User({
    name: "Paul Bunyun",
    department: "Lumber",
})

User.remove({})
    .then(() => Note.remove({}))
    .then(() => User.remove({}))
    .then(() => User.insertMany([employ1, employ2]))
    .then(() => Note.insertMany([newNote1, newNote2]))
    .then(() => newTool1.save())
    .then(() => newTool2.save())
    .then(() => {
        console.log("Seeds file finished loading")
    })



