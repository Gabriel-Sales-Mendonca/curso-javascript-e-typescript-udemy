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


async function executa() {
    try{
        const msg1 = await esperaAi('Ethereum', rand(1, 3))
        console.log(msg1)
    
        const msg2 = await esperaAi(msg1 + ' e suas L2', rand(1, 3))
        console.log(msg2)
        } catch(e) {
            console.log('Erro: ' + e)
        }
}

executa()