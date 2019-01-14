const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const toolController = require('../controllers/toolController')
const noteController = require('../controllers/noteController')

router.get('/', toolController.index)
router.post('/', toolController.create)
router.get('/new', toolController.new)
router.get('/:id/show', toolController.show)
router.get('/:id/edit', toolController.edit)
router.patch('/:id', toolController.update)
router.delete('/:id', toolController.delete)


router.get('/:id/users', userController.index)
router.post('/:id/users', userController.create)
router.get('/:id/users/new', userController.new)
router.get('/:id/users/:userId/show', userController.show)
router.get('/:id/users/:userId/edit', userController.edit)
router.patch('/:id/users/:userId', userController.update)
router.delete('/:id/users/:userId', userController.delete)

router.get('/:id/notes', noteController.index)
router.post('/:id/notes', noteController.create)
router.get('/:id/notes/new', noteController.new)
router.delete('/:id/notes/:notesId', noteController.delete)

module.exports = router

