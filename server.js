
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const { EmployerLogin } = require('./controllers/EmployerControllers.js');
const ConnectDatabase = require('./Database/Db.js');

const app = express();
const port = process.env.PORT
ConnectDatabase();

app.use(express.json());


app.use('/api',EmployerLogin)
app.listen(port, () => {
    console.log(`The server is listening on port: ${port}`);
});
