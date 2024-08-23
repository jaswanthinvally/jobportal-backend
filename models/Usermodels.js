const mongoose = require('mongoose');

const User_login_data = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Admin', 'Employer', 'Student'], required: true },
    profile: { type: mongoose.Schema.Types.Mixed }, 
});

const Usermodel = mongoose.model("user", User_login_data);

module.exports = Usermodel;
