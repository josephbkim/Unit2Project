const express = require('express')
const router = express.Router()
// const userController = require('../controllers/userController')
const toolController = require('../controllers/userController')

router.get('/', userController.index)
router.post('/', userController.create)
router.get('/new', userController.new)
router.get('/:id', userController.show)
router.get('/:id/edit', userController.edit)
router.patch('/:id', userController.update)
router.delete('/:id', userController.delete)

// router.get('/coTools', toolController.index)
// router.post('/coTools', toolController.create)
// router.get('/coTools/new', toolController.new)
// // router.get('coTools/:id', toolController)

module.exports = router

