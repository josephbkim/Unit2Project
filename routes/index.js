const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const toolController = require('../controllers/userController')

router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/new', userController.new)
router.get('/users/:id', userController.show)
router.get('/users/:id/edit', userController.edit)
router.patch('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)

router.get('/coTools', toolController.index)
router.post('/coTools', toolController.create)
router.get('/coTools/new', toolController.new)
// router.get('coTools/:id', toolController)

module.exports = router

