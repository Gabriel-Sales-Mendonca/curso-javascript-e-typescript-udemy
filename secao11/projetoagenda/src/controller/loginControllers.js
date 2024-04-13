exports.index = (req, res) => {
    res.render('login')
    //res.send('Estamos resolvendo o erro')
}

exports.register = (req, res) => {
    res.send(req.body)
}