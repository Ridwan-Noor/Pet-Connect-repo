const express = require ("express")
//const express = require ("./node_modules/express")
const mongoose = require('mongoose')
const cors = require("cors")

const users_model = require("./model/models/users_model.js")

// middlewares
const app = express()
app.use(express.json())
app.use(cors())


//routes   login, signup
const users_route = require('./model/routes/users_route.js')
app.use('/', users_route) 


//app.post('/login', (req, res) => {
//    const { email, password } = req.body;  // storing json body elements to variables which is sent by client 
//    console.log(req.body)
//    users_model.findOne({ email: email })  // find user based on email
//        .then((user) => {  // 'user' is the response about finding email, can name anything 
//            if (user) {
//                if (user.password === password) {
//                    res.json("Success")
//                } else {
//                    res.json("The password is incorrect")
//                }
//            } else {
//                res.json("User not found")
//            }
//        })
//})

//app.post('/signup', (req, res) => {
//    const email = req.body.email;

//    users_model.find({ email: email })
//        .then((users) => {
//            //console.log(users)
//            if (users.length == 0) {
//                users_model.create(req.body) // uploading body given by client to DB
//                    .then((login_info_users) => res.json(login_info_users))  // responding back the uploaded body to client
//                    .catch(err => res.json(err))
//            } else {
//                console.log("Email already exists")
//                res.json("Email already exists")
//            }
//        })
//})





mongoose.connect("mongodb+srv://admin_pet_connect:admin_pet_connect@database-api.sassvmz.mongodb.net/Pet_Connect_DB?retryWrites=true&w=majority")
    .then(() => {
        console.log("connected to MongoDB")
    })
    .catch((error) => {
        console.log(error)
    })

app.listen(5000, ()=> {
    console.log("server is running") 
}) 