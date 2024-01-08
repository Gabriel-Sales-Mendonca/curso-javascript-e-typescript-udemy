class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar() {
        console.log(`${this.nome} ${this.sobrenome} está falando.`)
    }
    comer() {
        console.log(`${this.nome} ${this.sobrenome} está comendo.`)
    }
    beber() {
        consolee.log(`${this.nome} ${this.sobrenome} está bebendo.`)
    }
}

const pessoa1 = new Pessoa('Gabriel', 'Sales')
pessoa1.falar()
console.log(pessoa1)