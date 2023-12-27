const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 56},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const pessoasComMaisDe50 = pessoas.filter(obj => obj.idade > 50
)

nomesPessoasComMaisDe50 = []
for (pessoa of pessoasComMaisDe50) {
    const nomePessoaComMaisDe050 = pessoa.nome
    nomesPessoasComMaisDe50.splice(0, 0, ` ${nomePessoaComMaisDe050}`)
}
console.log(`As pessoas com mais de 50 anos de idade são:${nomesPessoasComMaisDe50}.`)


const pessoasComNomeTerminadoEmA = pessoas.filter(obj => obj.nome[obj.nome.length - 1] === 'a') // retorna as pessoas que tem a ultima letra igual a letra 'a' e adiciona o dicionário dessa pessoa na variavel 'pessoasComNomeTerminadoEmA'

console.log('Pessoas cujo o primeiro nome terminam com a letra A:')
console.log(pessoasComNomeTerminadoEmA)