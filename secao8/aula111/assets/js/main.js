const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() // instânciando o construtor
        xhr.open(obj.method, obj.url, true) // configurando a requisição, informando o método e a url que localiza o servidor e etc...
        xhr.send() // enviando a requisição que foi configurada
    
        xhr.addEventListener('load', () => { // a função aqui será executada quando a requisição voltar do servidor e a página for carregada
            if(xhr.status >= 200 && xhr.status < 300) { // verificando se o código http é um código da classe bem sucedido
                resolve(xhr.responseText) // xhr.responseText contém a resposta em forma de texto do servidor, nesse caso será o conteúdo da um página HTML
            } else {
            const erro = `Error: ${xhr.status} - ${xhr.statusText}` // configurando mensagem de erro
                reject(erro)
            }
        })
    })
}

document.addEventListener('click', (e) => {
    const el = e.target
    const tag = el.tagName.toLowerCase()
    
    if(tag === 'a') {
        e.preventDefault()
        carregaPagina(el)
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href')

    const objConfig = { // objeto que contem as configurações da requisição que será enviada
        method: 'GET',
        url: href,
    }

    try {
        request(objConfig)
        const response = await request(objConfig)
        carregaResultado(response)
    
    } catch(e) {
        console.error(e)
    }
}

function carregaResultado(response) {
    document.querySelector('.resultado').innerHTML = response
}