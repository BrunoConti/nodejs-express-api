const express = require('express');

const usersController = require('../../controllers/v1/usersController');

const router = express.Router();

router.post('/login', usersController.login);
router.post('/create', usersController.createUser);
router.post('/update/:userId', usersController.updateUser);
router.delete('/delete', usersController.deleteUser);
router.get('/get-all', usersController.getUsers);

module.exports = router;
