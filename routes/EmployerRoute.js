const express = require('express')
const { EmployerLogin } = require('../controllers/EmployerControllers')
const app = express()
const router = express.Router



router.route('/employer').get(EmployerLogin)

module.exports = router