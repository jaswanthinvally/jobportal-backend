const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const ConnectDatabase = require('./Database/Db');
const Userrouter = require('./routes/Userroutes');
const Jobroute = require('./routes/Jobroutes')

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1", Userrouter);
app.use("/api/v1",Jobroute)



app.listen(port, () => console.log("Server is running on port:", port));


ConnectDatabase();
