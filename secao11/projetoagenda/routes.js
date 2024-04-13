const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeControllers')
const loginController = require('./src/controller/loginControllers')

//rotas de home
route.get('/', homeController.index)

//rotas de login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)

module.exports = route