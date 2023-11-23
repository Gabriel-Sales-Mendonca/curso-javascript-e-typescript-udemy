const nome = 'Gabriel'
const dataNascimento = new Date('2001-11-07 ')

const dia = dataNascimento.getDate()
const mes = dataNascimento.getMonth() + 1
const ano = dataNascimento.getFullYear()

const dataAtual = new Date()
const idadeMiliSeg = dataAtual - dataNascimento
const idadeAno = idadeMiliSeg / (365.25 * 24 * 60 * 60 * 1000).toFixed(0)

console.log(`${nome} nasceu no dia ${dia} do mês ${mes} do ano de ${ano}, e atualmente possui ${idadeAno.toFixed(0)} anos.`)
