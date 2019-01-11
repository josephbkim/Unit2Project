const Tool = require('../models/Tool')
const Note = require('../models/Note')

const noteController = {
    index: (req, res) => {
        Note.find().then((toolNote) => {
            console.log(toolNote)
            res.render('notes/index', { toolNote })
        })
    },

    new: (req, res) => {
        const toolNote = req.params.id
        res.render('notes/new')
    },

    create: (req, res) => {
        const toolNote = req.params.id
        Note.findById(toolNote).then((note) => {
            Note.create({
                createdAt: req.body.createdAt,
                noteContent: req.body.noteContent
            }).then(newNote => {
                tool.noteContent.push(newNote)
                console.log(newNote)
                Note.save()
                res.redirect('/')
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