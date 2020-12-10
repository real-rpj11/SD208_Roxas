const mongoose = require('mongoose')
const bcrypt = require('bycrypt ')

const userSchema  = new mongoose.Schema({
    username: {type: String, required: true},
    email: {type: String, required: true},
    password : {type: String, required: true}
})

userSchema.pre('save', function (next){
    var user = this;
    bcrypt.hash(user.password,8, function(err, hash){
        if(err){
            return next(err)
        }
        user.password = hash
        next()
    })
})

const userModel = mongoose.model("users",userSchema)

module.exports = userModel