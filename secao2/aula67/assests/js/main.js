const tarefas = document.querySelector('.tarefas')
const botaoAdicionaTarefa = document.querySelector('.adicionar-tarefa')
const listaTarefas = document.querySelector('.listaTarefas')



botaoAdicionaTarefa.addEventListener('click', adicionarTarefa)

function valorVazio() {
    if (tarefas.value.trim() !== '') {
        return true
    }
}


function adicionarTarefa() {
    const elementoTarefa= criarElementoTarefa()
    const verificarInputVazio = valorVazio()

    if (verificarInputVazio) {
        elementoTarefa.innerHTML = tarefas.value + ' '
        listaTarefas.appendChild(elementoTarefa)
    }

    const elementoBotao = criarBotaoApagar()
    adicionarBotao(elementoBotao, elementoTarefa)
}


function criarElementoTarefa() {
    const elementoTarefa = document.createElement('li')
    elementoTarefa.setAttribute('class', 'tarefa')
    return elementoTarefa
}


function criarBotaoApagar() {
    const botao = document.createElement('button')
    return botao
}


function adicionarBotao(elemento1, elemento2) {
    elemento1.innerText = 'Apagar'
    elemento2.appendChild(elemento1)
}