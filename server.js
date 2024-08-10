const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const router = express.Router() 


const port = process.env.PORT

app.listen(port, () => {
    console.log("the server is listening to the port: ",port)
})




