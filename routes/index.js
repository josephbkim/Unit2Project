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
router.get('/:id/show', userController.show)
router.get('/:id/users/:id/edit', userController.edit)
router.patch('/:id/users/:id', userController.update)
router.delete('/:id/users/:id', userController.delete)

router.get('/:id/notes', noteController.index)
router.get('/:id/notes', noteController.create)
router.get('/:id/notes/new', noteController.new)
router.delete('/notes/:id', noteController.delete)

module.exports = router

