const express = require('express')
const app = express()
// const bodyParser = require('body-parser')
const PORT = 4000


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine", "ejs")
app.use(express.static(__dirname+"/public"))


app.get('/', (req, res) => {
    res.render('index')
})


app.listen(PORT,() =>{
    console.log(`Listening to port ${PORT}`)
} )