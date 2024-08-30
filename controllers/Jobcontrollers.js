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
exports.Getjobbytitle = async(req,res) => {
    const{title} = req.params
    try {
        const job = await Jobmodel.find({title})
        if(job > 0 ) {
            res.json(jobs)
        }
        else {
            res.json({message : "no jobs found"})

        }

    } catch (error) {
        res.json({
            status : "process failed",
            error : error.message || "unknow error"
        })
        
    }
}