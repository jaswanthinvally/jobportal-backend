const mongoose = require('mongoose')
const mongodb_url = process.env.MONGO_DB_URL 

const ConnectDatabase = () => {
    mongoose.connect(mongodb_url,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log("database connected sucessfully"))
    .catch((err) => console.log("the error is ",err))

}

module.exports = ConnectDatabase