const users = require('../model/userSchema')
const bcrypt = require('bcrypt')
const user = []


module.exports = {
    // async signup(req, res){
    //     try {
    //         const user = {
    //             username : req.body.username,
    //             email: req.body.email,
    //             password: req.body.password
    //         }
    //         if(!user){
    //             return res.status(404).json({
    //                 message: "Error in signing up"
    //             })
    //         }
    //         const newuser = new MODEL(user)
    //         const saveUser = await newuser.save()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // },
    async login(req, res){
        try {
            
        } catch (error) {
            
        }
    },
    // async signup(req, res){
    //     try {
    //         const hashedPassword = bcrypt.hash(res.body.password,10)
    //         user.push({
    //             id: Date.now().toString(),
    //             username: req.body.username,
    //             email: req.body.email,
    //             password: hashedPassword
    //         })
    //         res.redirect('/')
    //     } catch (error) {
    //         console.log(error)
    //     }
    //     console.log(users)
    // }
    
}