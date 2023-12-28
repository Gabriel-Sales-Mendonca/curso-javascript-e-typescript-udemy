// primeiro exercicio
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]

const total = numeros.reduce(function(acumulador, valor) {
    return acumulador += valor
}, 0)
console.log(total)

// segundo exercicio
const par = numeros.reduce(function(acumulador, valor) {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador
}, [])
console.log(`Esses são os números pares: ${par}`)

// terceiro exercicio
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
]

const maisVelha = pessoas.reduce(function(acumulador, valor) {
    if (valor.idade > acumulador.idade) {
        acumulador = valor
    }
    return acumulador
})
console.log(`A pessoa mais velha é ${maisVelha.nome} e possui ${maisVelha.idade} anos.`)