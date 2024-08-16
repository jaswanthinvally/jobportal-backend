const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const mongodb_url = process.env.MONGO_DB_URL;

const ConnectDatabase = () => {
    mongoose.connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Database connected successfully"))
    .catch((err) => console.log("Error: ", err));
};

module.exports = ConnectDatabase;
