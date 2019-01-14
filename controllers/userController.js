const Tool = require("../models/Tool")
const User = require("../models/User")


const userController = {
    index: (req, res) => {
        const toolId = req.params.id

        Tool.findById(toolId).populate('employTag')
            .then((toolUser) => {
                const showToolUsers = toolUser.employTag
                console.log(toolId)
                res.render('users/index', { showToolUsers: showToolUsers, toolId })
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
        const toolId = req.params.id
        const userId = req.params.userId
        User.find().then((userId) => {
            res.render(':users/show', { userId: userId, toolId: tooldId })
        })

    },

    edit: (req, res) => {
        const toolId = req.params.id
        const userId = req.params.userId
        res.render('users/edit', { toolId, userId })
    },

    update: (req, res) => {
        const toolId = req.params.id
        const userId = req.params.userId
        User.findByIdAndUpdate(toolId, userId, req.body, {
            new: true
        }).then((newUser) => {
            res.redirect(`/${newUserId}`)
        })

    },

    delete: (req, res) => {
        const toolId = req.params.id
        const userId = req.params.userId
        User.findByIdAndRemove(userId)
            .then((tool) => {
                res.redirect('/')
            })
    }

}


module.exports = userController