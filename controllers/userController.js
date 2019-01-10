const Tool = require("../models/Tool")
const User = require("../models/User")


const userController = {
    index: (req, res) => {
        const newUserId = req.params.id
        console.log(newUserId)
        User.findById(newUserId).then((toolUser) => {
            res.render('users/index', { toolUser })
        })
    },

    new: (req, res) => {
        const newUserId = req.params.id
        res.render('users/new', { newUserId })
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            department: req.body.department,
            tools: []
        }).then(newUser => {
            res.redirect('/')
        })
    },

    // show: (req, res) => {
    //     const newUserId = req.params.id
    //     User.findById(newUserId).then((newUser) => {
    //         console.log(newUser)
    //         res.render('users/show', { newUser })
    //     })

    // },

    // edit: (req, res) => {
    //     const newUserId = req.params.id
    //     res.render('users/edit', { newUserId })
    // },

    // update: (req, res) => {
    //     const newUserId = req.params.id
    //     console.log(req.body)
    //     User.findByIdAndUpdate(newUserId, req.body, {
    //         new: true
    //     }).then((newUser) => {
    //         res.redirect(`/${newUserId}`)
    //     })

    // },

    // delete: (req, res) => {
    //     const newUserId = req.params.id
    //     User.findByIdAndRemove(newUserId).then(() => {
    //         res.redirect('/')
    //     })
    // }

}


module.exports = userController