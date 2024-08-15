const mongoose = require("mongoose")


const Employerschema = new mongoose.Schema({
    company_name : String,
    bio : String,
    password : String, 
})