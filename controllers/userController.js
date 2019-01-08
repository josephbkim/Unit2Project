User = require("../models/Users")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.render('app/index', { users })
        })
    }
}