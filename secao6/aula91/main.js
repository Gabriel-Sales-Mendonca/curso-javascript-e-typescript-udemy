function Produto (nome, preco, estoque) { // usando getter e setter em constructor functions
    this.nome = nome
    this.preco = preco

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function() {
            return estoque
        },
        set: function(valor) {
            if (typeof valor === 'number') {
                estoque = valor
            } else {
                console.log('Valor inválido')
            }
        }
    })
}

function produto1(nome, preco, estoque) { // usando getter e setter em factor functions
    return {
        get nome() {
            return nome
        },

        get preco() {
            return preco
        },

        set nome(valor) {
            if (typeof valor === 'number') {
                console.log('Valor inválido')
            } else {
                nome = valor
            }
        },

        set preco(valor) {
            if (typeof valor === 'number') {
                preco = valor
            } else {
                console.log('Valor inválido')
            }
        }
    }
}

const p1 = new Produto('Camiseta', 20, 3)
p1.estoque = '2'
console.log(p1.estoque)

const p2 = produto1(5, 7)
p2.nome = 'Calça'
p2.preco = 10
console.log(p2.nome)
console.log(p2.preco)