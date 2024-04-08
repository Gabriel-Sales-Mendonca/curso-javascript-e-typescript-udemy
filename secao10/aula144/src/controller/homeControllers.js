exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: '<h2>Novo titulo</h2>'
    })
}

exports.trataPost = (req, res) => {
    console.log(req.body)
    res.send('Formulário enviado')
}