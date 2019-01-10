// const User = require('../models/User')
const Tool = require("../models/Tool")

const toolController = {
    index: (req, res) => {
        Tool.find({}).then(invTools => {
            console.log(invTools)
            res.render('toolss/index', { invTools })
        })
    }
}

const toolController = {
    new: res.render
}

module.exports = toolController
