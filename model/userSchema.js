const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username : {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
})





 const user = mongoose.model('users', userSchema)

 module.exports = user