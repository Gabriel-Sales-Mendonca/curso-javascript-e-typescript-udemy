const texto = document.querySelector('.texto')
const paragrafos = texto.querySelectorAll('p') // essa variavel eh uma nodelist

const styleBody = getComputedStyle(document.body)
const backgroudColorBody = styleBody.backgroundColor

for (let p of paragrafos) {
    p.style.backgroundColor = backgroudColorBody
    p.style.color = 'white'
}