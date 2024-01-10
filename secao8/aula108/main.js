function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') reject('Valor inválido.')

            console.log(msg, tempo)
            resolve()
        }, tempo)
    })
}

esperaAi('frase 1', rand(1, 3))
    .then(() => {
        return esperaAi('frase 2', rand(1, 3))
    })
    .then(() => {
        return esperaAi('frase 3', rand(1, 3))
    })
    .then()
    .catch(e => {
        console.log(e)
    })
