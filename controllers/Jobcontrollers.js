const Jobmodel = require("../models/Jobmodels")


exports.Createjob = (req,res) => {
    const {title, description, company, location, salary, postedBy,datePosted} = req.body
    Jobmodel.create({
        title,
        description,
        company,
        location,
        salary,
        postedBy,
        datePosted

    })
    .then((result) => res.json({status : "job created sucessfully", result}))
    .catch((error) => res.json({status : "user creation failed",error}))
}