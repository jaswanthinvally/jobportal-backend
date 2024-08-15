const mongoose  = require('mongoose')


const User_login_data = new mongoose.Schema({
    name : String,
    emailid : String,
    password: String,
    profile : {
        bio : String,
        Image : String,
        role: String
    }
})

const Usermodel = mongoose.model("userdata",User_login_data)

exports.model = Usermodel
