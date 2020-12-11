const express = require('express')
const CONTROLLER = require('../controller/userController')
const ROUTER = express.Router()

ROUTER.get('/register',(req, res) =>{
    try {
        const hashedPassword = await bcrypt.hash(res.body.password,10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        })
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
    console.log(users)
})


