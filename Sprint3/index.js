const express = require ("express")
//const express = require ("./node_modules/express")
const mongoose = require('mongoose')
const cors = require("cors")
const multer = require('multer')
const path = require('path')

//const users_model = require("./model/models/users_model.js")
//const services_model = require("./model/models/services_model.js")
const posts_model = require("./model/models/posts_model.js")

// middlewares
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('model'))


//routes   login, signup
const users_route = require('./model/routes/users_route.js')
app.use('/', users_route) 


const services_route = require('./model/routes/services_route.js')
app.use('/', services_route) 


const vet_route = require('./model/routes/vet_route.js')
app.use('/', vet_route) 


const messages_route = require('./model/routes/messages_route.js')
app.use('/', messages_route) 



// image storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'model/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
const upload = multer({
    storage: storage
})

// upload post
app.post('/upload', upload.single('file'), (req, res) => {  // uploading post image
    console.log(req.file) 
    posts_model.create({image: req.file.filename, caption:req.caption})
    .then(result => res.json(result))
    .catch(err => console.log(err))
} )
app.post('/uploadPost', (req, res) => {   // uploading post data
    const { post_id, caption, radio, userName } = req.body
    console.log(post_id)
    console.log(caption)
    console.log(radio)
    posts_model.findOneAndUpdate( {_id:post_id }, {caption:caption, type:radio, userName:userName} )
    .then(res.json("Uploaded Post"))
    .catch(err => res.json(err))
})

// getting posts
app.get('/getPosts', (req, res) => {
    posts_model.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})
app.get('/getAllPosts', (req, res) => {
    posts_model.find()
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

// update likes
app.post('/updateLikes', (req,res)=> {
    //const post_id = req.params.id;
    const {post_id, newLikes} = req.body
    posts_model.findOneAndUpdate( {_id:post_id}, {likes:newLikes} )
    .then(res.json("Updated Likes"))
    .catch(err => res.json(err))
})


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