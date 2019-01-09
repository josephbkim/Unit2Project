Tool = require("../models/Tool")

const toolController = {
    index: (req, res) => {
        Tool.find({}).then(tools => {
            console.log(tools)
            res.render('tools/index', { tools })
        })
    }
}

module.exports = toolController