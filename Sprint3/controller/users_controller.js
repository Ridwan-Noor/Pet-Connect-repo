
const users_model = require("../model/models/users_model.js") 

// login
const find_user = (req, res) => {
    const { email, password } = req.body;  // storing json body elements to variables which is sent by client 
    console.log(req.body)
    users_model.findOne({ email: email })  // find user based on email
        .then((user) => {  // 'user' is the response about finding email, can name anything 
            if (user) {
                if (user.password === password) { 
                    //console.log(user["firstName"]+user["lastName"])
                    res.json(user["firstName"]+" "+user["lastName"]) 
                } else {
                    res.json("The password is incorrect")
                }
            } else {
                res.json("User not found")
            }
        })
}


//signup
const signup = (req, res) => {
    const email = req.body.email;

    users_model.find({ email: email })
        .then((users) => {
            //console.log(users)
            if (users.length == 0) {
                users_model.create(req.body) // uploading body given by client to DB
                    .then((login_info_users) => res.json(login_info_users))  // responding back the uploaded body to client
                    .catch(err => res.json(err))
            } else {
                console.log("Email already exists")
                res.json("Email already exists")
            }
        })
}






module.exports = {
    find_user,
    signup
}