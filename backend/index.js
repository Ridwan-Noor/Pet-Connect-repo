const express = require ("express")
const mongoose = require('mongoose')
const cors = require("cors")

//const users_model = require("./models/users_model.js")

// middlewares
const app = express()
app.use(express.json())
app.use(cors())


//routes
const users_route = require('./routes/users_route.js')
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