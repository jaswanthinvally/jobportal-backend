const mongoose = require('mongoose')
const Usermodel = require('../models/Usermodels')



const Usercontroller = (req,res,next) => {

    const{name, emailid, password} = req.body 

    if(!name || !emailid || !password) {
        res.json({
            message : "please enter the required data",
            status : "failed"
        })
    }

    else {
        Usermodel.create({
            name,
            emailid,
            password
        }).then((req,res) => {
            res.json({
                message : "user created sucessfully",
                status : "sucess"
            })
            .catch((req,res) => {
                res.json({
                    message : "user not created",
                    status : "failed"
                })
            })
        })
        
    }

}
module.exports = Usercontroller