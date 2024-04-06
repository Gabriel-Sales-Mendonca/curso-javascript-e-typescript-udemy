require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.connectionString)
    .then(() => {
        app.emit('pronto')
    })
    .catch((e) => console.log(e))

const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('connect-flash')

const routes = require('./routes')
const path = require('path')

app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret: 'lorem ipsom',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})
app.use(sessionOptions)
app.use(flash())

app.use(routes)

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Acessando meu servidor na porta 3000')
    })
})
