const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const toolController = require('../controllers/toolController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)


router.get('/:id/tools', toolController.index)
router.post('/:id/tools', toolController.create)
router.get('/:id/tools/new', toolController.new)
// // router.get('tools/:id', toolController)

module.exports = router

