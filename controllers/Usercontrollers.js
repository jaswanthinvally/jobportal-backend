const Usermodel = require("../models/Usermodels")


exports.Createuser = (req,res) => {
    const {name, email, password, role, profile} = req.body
    Usermodel.create({
        name,email,password,role,profile
    })
    .then((result) => res.send("user created sucessfully",result) )
    .catch((err) => console.log("user creation failed",err))
}
