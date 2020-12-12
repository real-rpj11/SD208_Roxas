if(process.env.NODE_ENV !== "produnction"){
    require('dotenv').config()
}

const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const passport =require('passport')
const PORT = process.env.PORT || 4000
const flash = require('express-flash')
const session = require('express-session')

const initializePassport = require('./passportConfig')
initializePassport(
    passport, 
    email => users.find(user => user.email === email),
    id =>  users.find(user => user.id === id)
    )

// temporary storage
const users = []

// middleware
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"))
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized : false
}))
app.use(passport.initialize())
app.use(passport.session())

app.get('/',(req, res) =>{
    res.render('main', {username: req.user.username, email: req.user.email})
})

app.get('/index', (req, res) =>{
    res.render('index')
})


app.post('/register', async (req, res) =>{
    try {
        const hashedpassword = await bcrypt.hash(req.body.password,10)
        users.push({
            id: Date.now().toString(),
            username: req.body.username,
            email: req.body.email,
            password: hashedpassword
        })
        res.redirect('/index')
    } catch (error) {
        console.log(error)
    }
    console.log(users);
})

app.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/index',
    failureFlash: true
}))


app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`)
} )