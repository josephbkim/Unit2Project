const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        const allNotes = req.params.id
        Tool.findById(allNotes).populate('notes').then((toolNotes) => {
            const showNotes = toolNotes.notes
            res.render('notes/index', { showNotes, toolNotes })
        })
    },


    new: (req, res) => {
        const toolNote = req.params.id
        res.render('notes/new')
    },

    create: (req, res) => {
        const newNoteId = req.params.id
        Tool.findById(newNoteId).then((note) => {
            Note.create({
                createdAt: req.body.createdAt,
                noteContent: req.body.department
            }).then(newNote => {
                note.notes.push(newNote)
                note.save()
                res.redirect('/')
            })
        })

    },
    create: (req, res) => {
        const newToolId = req.params.id
        Tool.findById(newToolId).then((tool) => {
            User.create({
                name: req.body.name,
                department: req.body.department
            }).then(newUser => {
                tool.employTag.push(newUser)
                tool.save()
                res.redirect('/')
            })
        })
    },

    show: (req, res) => {
        Note.find().then((newNote) => {
            res.render('notes/show', { newNote })
        })

    },

    delete: (req, res) => {
        const toolNote = req.params.id
        Tool.findByIdAndRemove(toolNote).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = noteController