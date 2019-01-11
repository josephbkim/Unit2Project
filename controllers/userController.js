const Tool = require("../models/Tool")
const User = require("../models/User")


const userController = {
    index: (req, res) => {
        const toolId = req.params.id
        Tool.findById(toolId).populate('employTag').then((toolUser) => {
            const showToolUsers = toolUser.employTag
            res.render('users/index', { showToolUsers, toolUser })
        })
    },

    new: (req, res) => {
        console.log(req.params)
        const toolId = req.params.id
        res.render('users/new', { toolId })
    },

    create: (req, res) => {
        const newToolId = req.params.id
        Tool.findById(newToolId).then((tool) => {
            console.log(tool)
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
            console.log(newUser)
            res.render('users/show', { newUser })
        })

    },

    edit: (req, res) => {
        const newUserId = req.params.id
        res.render('users/edit', { newUserId })
    },

    update: (req, res) => {
        const newUserId = req.params.id
        console.log(req.body)
        Tool.findByIdAndUpdate(newUserId, req.body, {
            new: true
        }).then((newUser) => {
            res.redirect(`/${newUserId}`)
        })

    },

    delete: (req, res) => {
        const newUserId = req.params.id
        Tool.findByIdAndDelete(newUserId).then(() => {
            res.redirect('/')
        })
    }

}


module.exports = userController