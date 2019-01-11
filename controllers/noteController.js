const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        Note.find().then((toolNote) => {
            console.log(toolNote)
            res.render('notes/index', { toolNote })
        })
    },

    create: (req, res) => {
        const toolNote = req.params.id
        Note.findById(toolNote).then((note) => {
            Note.create({
                createdAt: req.body.createdAt,
                noteContent: req.body.noteContent
            }).then(newNote => {
                note.push(newNote)
                note.save()
                res.redirect('/')
            })
        })
    },

    new: (req, res) => {
        const toolNote = req.params.id
        res.render('notes/new')
    },

    delete: (req, res) => {
        const toolNote = req.params.id
        Note.findByIdAndRemove(toolNote).then(() => {
            res.redirect('/notes')
        })
    }
}

module.exports = noteController