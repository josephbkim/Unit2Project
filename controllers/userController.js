User = require("../models/User")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.render('users/index', { users: users })
        })
    },

    new: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            department: req.body.department
        }).then(newUser => {
            res.redirect('/users')
        })
    },

    create: (req, res) => {
        console.log(req.body)
        User.create({
            name: String,
            department: String
        }).then(newUser => {
            res.redirect('/users')
        })
    },

    show: (req, res) => {
        const newUserId = req.params.id
        User.findById(newUserId).then((newUser))
        res.send({ newUser })
    }

}

module.exports = userController