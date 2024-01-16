function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== 'string') {
                reject('Valor inválido!')
                return
            }

            resolve(msg)
            return
        }, tempo)
    })
}

/*
esperaAi('Ethereum', rand(1, 5))
    .then((msg) => {
        return esperaAi(msg + ' e suas L2', rand(1, 5))
    })
    .then()
    .catch((erro) => {
        console.log(erro)
    })
*/

const promises = [
    esperaAi(5, rand(1, 5)),
    esperaAi('Ethereum e suas L2', rand(1, 5)),
    esperaAi('Ethereum e Data Availabilts', rand(1, 5))
]

Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((erro) => {
        console.log(erro)
    })