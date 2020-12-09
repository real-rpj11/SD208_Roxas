const { Schema } = require("mongoose")

const mongoose = require|('mongoose')

// mongoose.connect('mongodb://localhost:27017/userdb')

const userSchema = new mongoose.Schema({
    username : {type: String, required : true},
    email : {type: String, required: true},
    password : {type: String, required: true},
})

module.export = userSchema