const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userController')
const toolController = require('../controllers/toolController')

router.get('/', toolController.index)
router.post('/', toolController.create)
router.get('/new', toolController.new)
router.get('/:id/show', toolController.show)
router.get('/:id/edit', toolController.edit)
router.patch('/:id', toolController.update)
router.delete('/:id', toolController.delete)



module.exports = router

