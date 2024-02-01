import { gerarSenha } from './modules/GerarSenha'

import './assets/css/style.css'

const senha = document.querySelector('.senha-gerada')
senha.innerHTML = 'Seleciona as opções' //mensagem padrão quando carrega a página

const botao = document.querySelector('.botao')
const qtdCaracteres = document.querySelector('#caracteres')

//pegando os checkbox
const num = document.querySelector('#num')
const maiuscula = document.querySelector('#maiuscula')
const minuscula = document.querySelector('#minuscula')
const simbolo = document.querySelector('#simbolo')

let caracteresDaSenha = ''

botao.addEventListener('click', () => {

    caracteresDaSenha = ''

    if(verificaQuantidadeCaracteres()) return

    escolherCaracteres()
    
    if(verificaCheckboxVazio()) return
    
    const senhaGerada = gerarSenha(qtdCaracteres.value, caracteresDaSenha)
    senha.innerHTML = senhaGerada
})

function verificaQuantidadeCaracteres() {
    if(qtdCaracteres.value <= 0 || qtdCaracteres.value > 50) {
        alert('A senha deve ter entre 1 a 50 carcteres.')
        return true
    }
}

function verificaCheckboxVazio() {
    if(!num.checked && !maiuscula.checked && !minuscula.checked && !simbolo.checked) {
        senha.innerHTML = 'Nada selecionado'
        return true
    }
}

function escolherCaracteres() {
    if(num.checked) caracteresDaSenha += '0123456789'
    if(maiuscula.checked) caracteresDaSenha += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if(minuscula.checked) caracteresDaSenha += 'abcdefghijklmnopqrstuvwxyz'
    if(simbolo.checked) caracteresDaSenha += '+-[]*~_@#:?$%'
}