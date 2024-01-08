// aula sobre herança com classes
class dispositivoEletronico { // essa é a classe que será herdada
    constructor(nome) {
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if(this.ligado === true) {
            console.log(`${this.nome} já está ligado.`)
            return
        }

        this.ligado = true
    }

    desligar() {
        if(this.ligado === false) {
            console.log(`${this.nome} já está desligado.`)
        }

        this.ligado = false
    }
}

class Smartphone extends dispositivoEletronico { // aqui nós estamos fazendo a herança acontecer através da palavra 'extends'
    constructor(nome, cor, modelo) {
        super(nome) // é necessário colocar esse super para a herança acontecer também
        this.cor = cor
        this.modelo = modelo
    }
}

const smartphone1 = new Smartphone('Samsung', 'blue', 'M23 5G')
smartphone1.ligar()
console.log(smartphone1)