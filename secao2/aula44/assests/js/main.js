const form = document.querySelector('.form');

form.addEventListener('submit', function (evento) { // realiza funções depois que o botão é clicado
    evento.preventDefault();

    const inputPeso = document.querySelector('#peso')
    const inputAltura = document.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    if (!peso) {
        resultado('Peso inválido', false)
        return
    } else if (!altura) {
        resultado('Altura inválida', false)
        return
    }

    const imc = calcularImc(peso, altura)

    const categoriaImc = categorizarImc(imc)

    const frase = `Seu IMC é ${imc} (${categoriaImc}).`

    resultado(frase, true)
});

function calcularImc (peso, altura) { // calcula o imc
    const imc = peso / altura**2
    return imc.toFixed(2)
}

function categorizarImc (imc) { // categorizar o imc em niveis
    if (imc <= 18.5) return 'Abaixo do peso'
    if (imc <= 24.9) return 'Peso normal'
    if (imc <= 29.9) return 'Sobrepeso'
    if (imc <= 34.9) return 'Obesidade grau 1'
    if (imc <= 39.9) return 'Obesidade grau 2'
    else return 'Obesidade grau 3'
}

function criaParagrafo () { // cria um paragrafo
    const paragrafo = document.createElement('p')
    return paragrafo
}

function resultado (frase, isNumber) { // adiciona a resposta do imc na pagina
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const paragrafo = criaParagrafo()

    if (isNumber) { // caso seja um numero colore a resposta da cor verde
        paragrafo.classList.add('valido')
    } else { // caso nao seja um numero colore a resposta da cor vermelha
        paragrafo.classList.add('invalido')
    }

    paragrafo.innerHTML = frase
    resultado.appendChild(paragrafo)
}