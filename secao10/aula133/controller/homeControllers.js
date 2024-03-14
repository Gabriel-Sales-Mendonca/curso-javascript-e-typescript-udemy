exports.paginaInicial = (req, res) => {
    res.send(`<form action ="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button><br>
        Senha: <input type="password" name="senha">
        </form>`)
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('Formulário enviado')
}