function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}

Produto.prototype.desconto = function(porcentagem) {
    return this.preco = this.preco - (this.preco * porcentagem / 100)
}

Produto.prototype.aumento = function(porcentagem) {
    return this.preco += (this.preco * porcentagem / 100)
}

const produto1 = new Produto('Camiseta', 50)

const produto2 = {
    nome: 'Bermuda',
    preco: 20
}

const produto3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 10
    }
})

Object.setPrototypeOf(produto2, produto1)

produto1.aumento(10)
produto2.desconto(20)
produto3.aumento(10)

console.log(produto1)
console.log(produto2)
console.log(produto3)