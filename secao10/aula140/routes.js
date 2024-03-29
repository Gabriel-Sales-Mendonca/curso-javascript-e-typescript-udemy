const express = require('express')
const route = express.Router()
const homeController = require('./src/controller/homeControllers')

route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

module.exports = route