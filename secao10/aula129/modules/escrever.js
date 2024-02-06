const fs = require('fs').promises

module.exports = function escreve(caminho, conteudo) {
    fs.writeFile(caminho, conteudo, {flag: 'w'})
}
