const path = require('path')
const escreve = require('./modules/escrever')
const ler = require('./modules/ler')


const caminhoArquivo = path.resolve(__dirname, 'teste.json')

const pessoas = [
    {nome: 'zkSync'},
    {nome: 'Starknet'}
]

const json = JSON.stringify(pessoas, '', 2)

escreve(caminhoArquivo, json)

async function lerArquivo(caminho) {
    const dados = await ler(caminho)
    mostraDados(dados)
}

function mostraDados(dados) {
    console.log(dados)
}

lerArquivo(caminhoArquivo)