const UserModel = require('../models/Usermodels.js');

exports.Usercontrollers = (req, res, next) => {
    const { name, emailid, password } = req.body;
    UserModel.create({ name, emailid, password })
        .then(() => res.json({ message: "success" }))
        .catch(err => res.status(500).json({ message: "failure", error: err.message }));
};
