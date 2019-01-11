// const User = require('../models/User')
const Tool = require("../models/Tool")

const toolController = {
    index: (req, res) => {
        Tool.find({}).populate('employTag').populate('notes').then((invTools) => {
            console.log(invTools)
            res.render('toolss/index', { invTools })
            console.log(invTools)
        })
    },

    new: (req, res) => {
        res.render("toolss/new")
    },

    create: (req, res) => {
        console.log(req.body)
        Tool.create({
            toolName: req.body.toolName,
            toolCo: req.body.toolCo,
            toolModel: req.body.toolModel,
            checkOut: req.body.checkOut,
            employTag: req.body.employTag,
            notes: req.body.notes
        }).then(newTools => {
            res.redirect('/')
        })
    },

    show: (req, res) => {
        const newToolId = req.params.id
        Tool.findById(newToolId).then((newTool) => {
            console.log(newTool)
            res.render('toolss/show', { newTool })
        })
    },

    edit: (req, res) => {
        const newToolId = req.params.id
        res.render('toolss/edit', { newToolId })
    },

    update: (req, res) => {
        const newToolId = req.params.id
        console.log(req.body)
        Tool.findByIdAndUpdate(newToolId, req.body, {
            new: true
        }).then((newTool) => {
            res.redirect('/')
        })
    },

    delete: (req, res) => {
        const newToolId = req.params.id
        Tool.findByIdAndRemove(newToolId).then(() => {
            res.redirect('/')
        })
    }

}

module.exports = toolController
