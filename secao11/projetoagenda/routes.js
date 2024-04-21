const express = require('express')
const route = express.Router()

const homeController = require('./src/controller/homeControllers')
const loginController = require('./src/controller/loginControllers')
const contatoController = require('./src/controller/contatoController')

//rotas de home
route.get('/', homeController.index)

//rotas de login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)
route.post('/login/login', loginController.login)
route.get('/login/logout', loginController.logout)

//rotas de contato
route.get('/contato/index', contatoController.index)

module.exports = route