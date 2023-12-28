const data = new Date()

const diaSemana = data.getDay()

let diaSemanaCerto = ''

switch (diaSemana) {
    case 0:
        diaSemanaCerto = 'domingo'
        break
    case 1:
        diaSemanaCerto = 'segunda'
        break
    case 2:
        diaSemanaCerto = 'terça'
        break
    case 3:
        diaSemanaCerto = 'quarta'
        break
    case 4:
        diaSemanaCerto = 'quinta'
        break
    case 5:
        diaSemanaCerto = 'sexta'
        break
    case 6:
        diaSemanaCerto = 'sábado'
        break
    default:
        diaSemanaCerto = ''
}

if (diaSemanaCerto === '') {
    console.log('Dia inválido')
} else {
    console.log(`Hoje é ${diaSemanaCerto}`)
}
