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

    fetch(href)
        .then(resposta => {
            console.log(resposta.status)
            console.log(resposta)
            if(resposta.status !== 200) throw new Error('Error: 404 - Not found')
            return resposta.text()
        })
        .then(html => carregaResultado(html))
        .catch(erro => console.error(erro))
}

function carregaResultado(response) {
    document.querySelector('.resultado').innerHTML = response
}