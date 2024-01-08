const falar = {
    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando`)
    }
}
const comer = {
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo`)
    }
}
const beber = {
    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo`)
    }
}

const pessoaPrototype = Object.assign({}, falar, beber, comer)

function pessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {
            enumerable: true,
            value: nome
        },

        sobrenome: {
            enumerable: true,
            value: sobrenome
        }
    })
}

const pessoa1 = pessoa('Gabriel', 'Sales')
pessoa1.falar()

/*o código abaixo mostra como jogar os métodos dentro do prototype dessa função fábrica, 
    dessa forma não consegue se fazer o processo de herança, para fazer a herança olhe o código acima
*/
/*
function pessoa(nome, sobrenome) {
    const pessoaPrototype = { //jogando os métodos dentro de uma varável qualquer
        falar() {
            console.log(`${this.nome} ${this.sobrenome} está falando`)
        },
        comer() {
            console.log(`${this.nome} ${this.sobrenome} está comendo`)
        },
        beber() {
            console.log(`${this.nome} ${this.sobrenome} está bebendo`)
        }
    }

    return Object.create(pessoaPrototype, { //colocando os métodos no prototype através daquela variável e criando os atributos do objeto
        nome: {
            enumerable: true,
            value: nome,
        },

        sobrenome: {
            enumerable: true,    
            value: sobrenome
        }
    })
}
*/
