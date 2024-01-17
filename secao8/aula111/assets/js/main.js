const request = obj => {
    const xhr = new XMLHttpRequest() // instânciando o construtor
    xhr.open(obj.method, obj.url, true) // configurando a requisição, informando o método e a url que localiza o servidor e etc...
    xhr.send() // enviando a requisição que foi configurada

    xhr.addEventListener('load', () => { // a função aqui será executada quando a requisição voltar do servidor e a página for carregada
        if(xhr.status >= 200 && xhr.status < 300) { // verificando se o código http é um código da classe bem sucedido
            obj.success(xhr.responseText) // xhr.responseText contém a resposta em forma de texto do servidor, nesse caso será o conteúdo da um página HTML
        } else {
            obj.error(xhr.statusText)
        }
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

function carregaPagina(el) {
    const href = el.getAttribute('href')

    const objConfig = { // objeto que contem as configurações da requisição que será enviada
        method: 'GET',
        url: href,

        success(response) {
            carregaResultado(response)
        },
        error(errorText) {
            console.log(errorText)
        }
    }

    request(objConfig)
}

function carregaResultado(response) {
    document.querySelector('.resultado').innerHTML = response
}