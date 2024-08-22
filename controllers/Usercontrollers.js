const UserModel = require('../models/Usermodels.js');

exports.Createuser = (req, res, next) => {
    const { name, emailid, password } = req.body;
    UserModel.create({ name, emailid, password })
        .then(() => res.json({message : "user created sucesfully", status: "success" }))
        .catch(err => res.status(500).json({ message: "failure", error: err.message }));
};
