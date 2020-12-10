const express = require('express')
const MODEL  = require('../model/user')


module.exports = {
    async signup(req, res){
        try {
            const newUser = {
                username : req.body.username,
                email : req.body.email,
                password: req.body.password
            }
            if (!newUser){
                return res.status(404).json({
                    error: error
                })
            }
            const user = new MODEL(newUser)
            const newuser = await user.save()

            return res.redirect('/')

        } catch (error) {
            console.log(error)
        }
    },

    async login(req, res){
        try {
            
        } catch (error) {
            
        }
    }
}