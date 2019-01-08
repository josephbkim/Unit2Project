const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')


router.get('/users', userController.index)
router.post('/users', userController.create)
router.get('/users/new', userController.new)
router.get('users/:id', userController.show)
// router.get('/:id/edit', userController.edit)
// router.patch('/:id', userController.update)
// router.delete('/:id', userController.delete)

module.exports = router

