User = require("../models/User")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.render('users/index', { users: users })
        })
    },

    new: (req, res) => {
        res.render("users/new")
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            department: req.body.department
        }).then(newUser => {
            res.redirect('/users')
        })
    },

    show: (req, res) => {
        const newUserId = req.params.id
        User.findById(newUserId).then((newUser) => {
            console.log(newUser)
            res.render('users/index', { newUser })
        })

    },

    edit: (req, res) => {
        const newUserId = req.params.id
        res.render('users.edit', { newUserId })
    },

    update: (req, res) => {
        const newUserId = req.params.id
        console.log(req.body)
        User.findByIdAndUpdate(newUserId, req.body, {
            new: true
        }).then((newUser) => {
            res.redirect(`${newUserId}`)
        })

    },

    delete: (req, res) => {
        const newUserId = req.params.id
        User.findByIdAndRemove(newUserId).then(() => {
            res.redirect('/user')
        })
    }


}

module.exports = userController