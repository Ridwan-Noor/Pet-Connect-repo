const express = require ("express")
const mongoose = require('mongoose')
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://admin_pet_connect:admin_pet_connect@database-api.sassvmz.mongodb.net/?retryWrites=true&w=majority");

app.listen(5000, ()=> {
    console.log("server is running") 
}) 