
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const ConnectDatabase = require('./Database/Db.js');
const app = express();
const port = process.env.PORT
ConnectDatabase();

const Userroutes = require('./routes/Userroutes.js')

app.use(express.json());


app.use('/api',Userroutes)





app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});
