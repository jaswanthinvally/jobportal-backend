const express = require('express');
const Usercontrollers = require('../controllers/Usercontrollers');
const router = express.Router();

//http://localhost:3000/api/v1/user
router.route('/user').post(Usercontrollers.Createuser);

module.exports = router;
