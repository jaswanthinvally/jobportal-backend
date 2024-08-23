const Usermodel = require("../models/Usermodels")


exports.Createuser = (req,res) => {
    const {name, email, password, role, profile} = req.body
    Usermodel.create({
        name,email,password,role,profile
    })
    .then((result) => res.json({
        status : "user creation sucessful",
        result
    }) )
    .catch((err) => res.json({
        status : "user creation failed",
        err
    }))
}
