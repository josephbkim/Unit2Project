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

router.get('/tools', userController.index)

module.exports = router

