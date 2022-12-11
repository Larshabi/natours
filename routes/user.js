const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');


router.get('/', UserController.getAllUsers)
router.post('/', UserController.createUser)
router.get('/:id', UserController.getUser)
router.patch('/:id', UserController.updateUser)
router.delete('/:id', UserController.deleteUser)


module.exports = router;