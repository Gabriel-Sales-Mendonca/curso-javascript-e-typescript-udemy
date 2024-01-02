function Pessoa(nome, sobrenome) {
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`
}

const pessoa1 = new Pessoa('Gabriel', 'Sales')

console.log(pessoa1.nomeCompleto())