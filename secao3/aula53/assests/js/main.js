const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'}
]

const container = document.querySelector('.container')
const frases = document.createElement('div')
container.appendChild(frases)
frases.classList.add('frases')

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i] // armazenou nas variaveis tag e texto os valores respectivos para cada objeto existente no array elementos
    
    let novaTag = document.createElement(tag)
    frases.appendChild(novaTag)

    novaTag.innerHTML = texto
}