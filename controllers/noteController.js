const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        Note.find().then((toolNote) => {
            console.log(toolNote)
            res.render('notes/index', { toolNote })
        })
    },

    delete: (req, res) => {
        const toolNote = req.params.id
        Note.findByIdAndRemove(toolNote).then(() => {
            res.redirect('/notes')
        })
    }
}

module.exports = noteController