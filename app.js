const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const { get } = require('mongoose')
// const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
// const router = require('./routes/userRoute')
const users = []

// middleware
// app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"))

app.get('/', (req, res) =>{
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
        res.redirect('/')
    } catch (error) {
        console.log(error)
    }
    console.log(users);
})

app.get('/login', async (req, res) =>{
    
})


app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`)
} )