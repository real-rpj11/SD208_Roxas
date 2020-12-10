const express = require('express')
const ROUTER = express.Router()
const CONTROLLER = require('../controller/userController')

ROUTER.post('/register',CONTROLLER.signup)


module.exports = ROUTER
