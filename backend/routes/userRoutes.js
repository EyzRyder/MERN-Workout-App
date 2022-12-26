const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/login', userController.postLoginUser)

router.post('/signup', userController.postSingUpUser)

module.exports = router;