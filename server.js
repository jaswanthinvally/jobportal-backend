const express = require('express')
const { EmployerLogin } = require('./controllers/EmployerControllers.js')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const router = express.Router() 





const port = process.env.PORT

app.listen(port, () => {
    console.log("the server is listening to the port: ",port)
})

router.route("/employer",EmployerLogin)




