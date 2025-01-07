const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// define the routes for the manipulating the records
router.post('/', userController.createUser);
router.get('/:userId', userController.getUserById);
router.get('/', userController.getAllUsers);
router.delete('/:userId', userController.deleteUser);

module.exports = router;