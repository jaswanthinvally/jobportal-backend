const express = require('express')
const jobcontrollers = require('../controllers/Jobcontrollers')
const app = express()
const router = express.Router()


router.route("/create-job").post(jobcontrollers.Createjob)

module.exports = router