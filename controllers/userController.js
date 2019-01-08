User = require("../models/User")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.render({ users })
        })
    },

    new: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            department: req.body.department
        }).then(newUser => {
            res.redirect('/')
        })
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            name: String,
            department: String
        }).then(newUser => {
            res.redirect('/')
        })
    },

    show: (req, res) => {
        const newUserId = req.params.id
        User.findById(newUserId).then((newUser))
        res.render('/show', { newUser })
    }

}

module.exports = userController