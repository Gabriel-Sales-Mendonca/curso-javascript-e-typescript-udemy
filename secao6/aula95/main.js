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

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(valor) {
    return this.preco = this.preco + valor
}

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material
    
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof(valor) !== 'number') return
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca

const produto = new Produto('Gen', 100)
const camiseta = new Camiseta('Regata', 7.5, 'Preta')
const caneca = new Caneca('Caneca', 15, 'Porcelana', 20)

camiseta.aumento(10)
caneca.aumento(10)

console.log(produto)
console.log(camiseta)
console.log(caneca)
console.log(caneca.estoque)