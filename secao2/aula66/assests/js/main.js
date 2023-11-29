const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('#iniciar')
const pausar = document.querySelector('#pausar')
const zerar = document.querySelector('#zerar')

let time;
let incremento = 0 // variavel que controla o incremento dos segundos

iniciar.addEventListener('click', function(evento){
    corPreta()

    time = setInterval(function incrementarSegundo() {
    incremento += 1000
    let novoTempo = new Date(0 + 10800000 + incremento) // incrementando 1 segundo no tempo
    relogio.innerHTML = novoTempo.toLocaleTimeString()
    }, 1000)
})


pausar.addEventListener('click', function(evento){
    setTimeout(function() {
        clearInterval(time)
    }, 0)
    relogio.style.color = 'red';
})


zerar.addEventListener('click', function(evento){
    corPreta()

    incremento = 0
    let zeroTempo = new Date(0 + 10800000)
    relogio.innerHTML = zeroTempo.toLocaleTimeString()
})

function corPreta() {
    relogio.style.color = 'black'
}
