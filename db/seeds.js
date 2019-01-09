// const Note = require('../models/Note')
const Tool = require('../models/Tool')
const User = require('../models/User')

User.deleteMany({})
    .then(() => {
        return User.create({
            name: "Bob the Builder",
            department: "Residential",
            tools: []
        }).then((coolTool) => {
            const newTool = Tool.create({
                toolName: "Cutoff Saw",
                toolCo: "Stihl",
                toolModel: "TS420",
                checkOut: "date.now",
                checkIn: "date.now"
            }).then((tool) => {
                coolTool.tools.push(tool)
            })

            const newTool2 = Tool.create({
                toolName: "Hammer Drill",
                toolCo: "Bosch",
                toolModel: "TModel#  HD18-2",
                checkOut: "date.now",
                checkIn: "date.now"
            }).then((tool) => {
                coolTool.tools.push(tool)
            })

            Promise.all([newTool])
                .then(() => {
                    coolTool.save()
                })
        })
    })


    // .then(() => {
    //     const newTool1 = Tool.create({
    //         toolName: "Cutoff Saw",
    //         toolCo: "Stihl",
    //         toolModel: "TS420",
    //         checkOut: "date.now",
    //         checkIn: "date.now"
    //     }).then(() => {

    //     })
    // })

