fetch('pessoas.json')
    .then(pessoas => pessoas.json())
    .then(json => carregaElementosNaPagina(json))

function carregaElementosNaPagina(json) {
    const resultado = document.querySelector('.resultado') // elemento onde será adicionada a tabela
    const tabela = document.createElement('table')
    tabela.classList = 'tabela'

    for(let pessoa of json) { // iterando sobre cada objeto que existe no arquivo json que é um array de objetos
        let tr = document.createElement('tr')
        
        let td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        tabela.appendChild(tr)
    }
    resultado.appendChild(tabela)
}