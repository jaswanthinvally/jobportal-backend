const express = require('express');
const Usercontrollers = require('../controllers/Usercontrollers');
const router = express.Router();

router.route('/user').post(Usercontrollers.Createuser);

module.exports = router;
