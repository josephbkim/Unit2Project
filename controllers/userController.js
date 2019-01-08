User = require("../models/User")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.send({ users })
        })
    },
    new: (req, res) => {
        console.log(req.body)
        User.create({
            name: req.body.name,
            department: req.body.department
        }).then(newUser => {
            res.redirect('/user')
        })
    }

}

module.exports = userController