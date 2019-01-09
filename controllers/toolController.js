Tool = require("../models/Tool")

const toolController = {
    index: (req, res) => {
        Tool.find({}).then(tools => {
            console.log(tools)
            res.render('/coTools/index', { tools })
        })
    },

    new: (req, res) => {
        res.render("tools/new")
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            toolName: req.body.toolName,
            toolCo: req.body.toolCo,
            toolModel: req.body.toolModel,
            checkOut: req.body.checkOut,
            checkIn: req.body.checkIn
        })
    }
}

module.exports = toolController