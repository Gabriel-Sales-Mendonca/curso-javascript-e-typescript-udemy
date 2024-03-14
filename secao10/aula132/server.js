const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`<form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button><br>
        Senha: <input type="password" name="senha">
        </form>`)
})

app.get('/teste/:idUsuario?', (req, res) => {
    console.log(req.params)
    res.send('oi')
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`Recebi seu formuláio!: ${req.body.nome}`)
})

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Acessando meu servidor na porta 3000')
})