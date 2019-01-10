const User = require('../models/User')
const Tool = require("../models/Tool")

const toolController = {
    index: (req, res) => {
        const newToolId = req.params.id
        console.log(newToolId)
        Tool.findById(newToolId).populate('tools').then((newTool) => {
            const bananaTools = newTool.tools
            res.render('toolss/index', { bananaTools, newToolId })
        })
    },

    new: (req, res) => {
        res.render("toolss/new")
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            toolName: req.body.toolName,
            toolCo: req.body.toolCo,
            toolModel: req.body.toolModel,
            checkOut: req.body.checkOut,
            note: req.body.note
        }).then(newTool => {
            res.redirect('/')
        })
    }
}

module.exports = toolController
