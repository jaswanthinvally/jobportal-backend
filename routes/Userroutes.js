const express = require('express');
const { Usercontroller } = require('../controllers/Usercontrollers.js');
const router = express.Router();


router.post('/employe', Usercontroller);

module.exports = router;
