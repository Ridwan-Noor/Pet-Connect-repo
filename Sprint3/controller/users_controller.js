
const users_model = require("../model/models/users_model.js") 


const find_user = (req, res) => {
    const { email, password } = req.body;  // storing json body elements to variables which is sent by client 
    console.log(req.body)
    users_model.findOne({ email: email })  // find user based on email
        .then((user) => {  // 'user' is the response about finding email, can name anything 
            if (user) {
                if (user.password === password) { 
                    res.json("Success") 
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("User not found")
            }
        })
}


module.exports = {
    find_user
}