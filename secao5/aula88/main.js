const numeros = [10, 20, 30]

//const total = numeros.reduce((acumulador, valor) => acumulador += valor)

let total = 0
numeros.forEach(function(valor) {
    total += valor
})

console.log(total)
