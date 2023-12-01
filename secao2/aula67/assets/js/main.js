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
    limparInput()
    salvarTarefa(elementoTarefa)
}


function criarElementoTarefa() {
    const elementoTarefa = document.createElement('li')
    elementoTarefa.style.margin = '1rem 0'
    elementoTarefa.setAttribute('class', 'tarefa')
    return elementoTarefa
}


function criarBotaoApagar() {
    const botao = document.createElement('button')
    botao.setAttribute('class', 'apagar')
    return botao
}


function adicionarBotao(elemento1, elemento2) {
    elemento1.innerText = 'Apagar'
    elemento2.appendChild(elemento1)
}


document.addEventListener('click', function(e) {
    const elemento = e.target
    
    if (elemento.classList.contains('apagar')) {
        //remover o pai desse elemento, que no caso é a li que contém a tarefa
        elemento.parentElement.remove()
    }
})


tarefas.addEventListener('keypress', function(evento) {
    if (evento.keyCode === 13) {
        adicionarTarefa()
    }
})


function limparInput() {
    tarefas.value = ''
}


function salvarTarefa(elemento) {
    let tarefas = listaTarefas.querySelectorAll('li')
    let listaDeTarefas = []
    
    for (let tarefa = 0; tarefa < tarefas.length; tarefa++) {
        let tarefaTexto = tarefas[tarefa].innerText.replace(' Apagar', '')
        listaDeTarefas.push(tarefaTexto)
    }
}