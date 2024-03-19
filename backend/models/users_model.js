const mongoose = require('mongoose')

const users_schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: { type: String, default: "normal" }
}, {
    collection: 'users' // preventing auto add 's' in mongodb table 
}
)

const users_model = mongoose.model("users", users_schema)
module.exports = users_model