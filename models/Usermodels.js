const mongoose = require('mongoose');

const User_login_data = new mongoose.Schema({
    name: String,
    emailid: String,
    password: String,
});

const Usermodel = mongoose.model("User", User_login_data);

module.exports = Usermodel;
