const Tool = require("../models/Tool")
const User = require("../models/User")


const userController = {
    index: (req, res) => {
        const toolId = req.params.id
        const userId = req.params.userId
        Tool.findById(toolId).populate('employTag').then((toolUser) => {
            const showToolUsers = toolUser.employTag
            res.render('users/index', { showToolUsers, toolUser })
        })
    },

    new: (req, res) => {
        const toolId = req.params.id
        res.render('users/new', { toolId })
    },

    create: (req, res) => {
        const newToolId = req.params.id
        Tool.findById(newToolId)
            .then((tool) => {
                User.create({
                    name: req.body.name,
                    department: req.body.department
                }).then(newUser => {
                    tool.employTag.push(newUser)
                    tool.save()
                    res.redirect('/')
                })
            })
    },

    show: (req, res) => {
        User.find().then((newUser) => {
            res.render('users/show', { newUser })
        })

    },

    edit: (req, res) => {
        const toolId = req.params.id
        const newUserId = req.params.userId
        res.render('users/edit', { toolId, newUserId })
    },

    update: (req, res) => {
        const toolId = req.params.id
        const newUserId = req.params.userId
        User.findByIdAndUpdate(newUserId, req.body, {
            new: true
        }).then((newUser) => {
            res.redirect(`/${newUserId}`)
        })

    },

    delete: (req, res) => {
        const toolId = req.params.id
        const newUserId = req.params.userId
        User.findByIdAndDelete(newUserId)
            .then((tool) => {
                res.redirect('/')
            })
    }

}


module.exports = userController