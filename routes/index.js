const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/user', userController.index)
// router.post('/user', userController.create)
// router.get('/user/new', userController.new)
// router.get('/user/:id', userController.show)
// router.get('/user/:id/edit', userController.edit)
// router.patch('/user/:id', userController.update)
// router.delete('/user/:id', userController.delete)

module.exports = router