// const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')


const newUser1 = User.create({
    name: "Bob the Builder",
    department: "Residential",
    tools: [newTool1, newTool2]
})


const newTool1 = Tool.create({
    toolName: "Cutoff Saw",
    toolCo: "Stihl",
    toolModel: "TS420",
    checkOut: "date.now",
    checkIn: "date.now"
})

const newTool2 = Tool.create({
    toolName: "Hammer Drill",
    toolCo: "Bosch",
    toolModel: "TModel#  HD18-2",
    checkOut: "date.now",
    checkIn: "date.now"




