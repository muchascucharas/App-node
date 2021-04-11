const express = requiere('express');
const router = express.Router();
const controller = require('./authController');

router.post('/loginn', controller.login);

module.exports = router;