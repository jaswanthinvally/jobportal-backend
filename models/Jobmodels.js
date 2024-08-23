const mongoose = require('mongoose')

const Jobschema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    salary: { type: Number },
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Employer
    datePosted: { type: Date, default: Date.now },
})


const Jobmodel = mongoose.model("job",Jobschema)

module.exports = Jobmodel