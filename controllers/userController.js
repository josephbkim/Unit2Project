User = require("../models/User")

const userController = {
    index: (req, res) => {
        User.find({}).then(users => {
            console.log(users)
            res.send({ users })
        })
    }

}

module.exports = userController