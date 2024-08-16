const express = require('express');
const Usercontrollers = require('../controllers/Usercontrollers');
const router = express.Router();

router.route('/user').post(Usercontrollers.Usercontrollers);

module.exports = router;
