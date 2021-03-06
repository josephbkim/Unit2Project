const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        const toolId = req.params.id
        Tool.findById(toolId).populate('notes').then((toolNotes) => {
            const showNotes = toolNotes.notes
            res.render('notes/index', { showNotes, toolId: toolId })
        })
    },


    new: (req, res) => {
        const toolNote = req.params.id
        res.render('notes/new', { toolNote })
    },

    create: (req, res) => {
        const toolId = req.params.id
        Tool.findById(toolId)
            .then((tool) => {
                Note.create({
                    createdAt: req.body.createdAt,
                    noteContent: req.body.noteContent
                }).then(newNote => {
                    tool.notes.push(newNote)
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
        const noteId = req.params.notesId
        Note.findByIdAndRemove(noteId).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = noteController