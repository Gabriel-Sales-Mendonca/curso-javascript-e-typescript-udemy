const object1 = {nome: 'Gabriel', sobrenome: 'Sales', idade: 22, comidaPreferida: {almoco: 'feijão', fruta: 'goiaba'}}

const {nome, sobrenome, idade, comidaPreferida: {almoco, fruta}} = object1

console.log(`O nome dele é ${nome} ${sobrenome}, ele tem ${idade} anos.
Sua comida preferida no almoço é ${almoco}, e sua fruta preferida é ${fruta}`)