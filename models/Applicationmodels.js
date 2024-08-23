const mongoose = require('mongoose')

const Applicationschema = new mongoose.Schema(
    {
        job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
        student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        resume: { type: String, required: true },
        status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
        appliedAt: { type: Date, default: Date.now },
    }

)

const Applicationmodel = mongoose.model("application",Applicationschema)

module.exports = Applicationmodel