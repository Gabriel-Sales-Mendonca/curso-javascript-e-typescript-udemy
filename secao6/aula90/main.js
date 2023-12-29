function Pessoa (nome, sobrenome, idade) {
    this.sobrenome = sobrenome
    this.idade = idade

    Object.defineProperty(this, 'nome', {
        enumerable: true,
        value: nome,
        writable: true,
        configurable: false
    })
}

const p1 = new Pessoa('Gabriel', 'Sales', 22)
p1.nome = 'Metamask'
console.log(p1)