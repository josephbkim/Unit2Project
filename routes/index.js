const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const toolController = require('../controllers/toolController')

router.get('/', toolController.index)
router.post('/', toolController.create)
router.get('/new', toolController.new)
router.get('/:id/show', toolController.show)
router.get('/:id/edit', toolController.edit)
router.patch('/:id', toolController.update)
router.delete('/:id', toolController.delete)


router.get('/:id/users', userController)
router.post('/:id/users', userController.create)
router.get('/:id/users/new', toolController.show)
router.get('/:id/users/:id/show', userController)
router.get('/:id/users/:id/edit', userController)
router.patch('/:id/users/:id', userController.update)
router.delete('/:id/users/:id', userController)



module.exports = router

