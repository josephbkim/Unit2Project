const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        const allNotes = req.params.id
        Note.findById(allNotes).then((notes) => {
            res.render('notes/index', { notes })
        })
    },

    new: (req, res) => {
        const toolNote = req.params.id
        res.render('notes/new')
    },

    create: (req, res) => {
        Note.create({
            createdAt: req.body.createdAt,
            noteContent: req.body.noteContent
        }).then(newNotes => {
            Tool.findById(req.params.id).then(toolId => {
                toolId.Note.push(newNotes)
            })
        })
    },

    show: (req, res) => {
        Note.find().then((newNote) => {
            console.log(newNote)
            res.render('notes/show', { newNote })
        })

    },

    delete: (req, res) => {
        const toolNote = req.params.id
        Note.findByIdAndRemove(toolNote).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = noteController