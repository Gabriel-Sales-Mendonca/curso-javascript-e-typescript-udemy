function Conta(agencia, conta, saldo) {
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.depositar = function(valor) {
    this.saldo += valor
    this.verSaldo()
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente! Seu saldo atual é R$${this.saldo.toFixed(2)}`)
        return
    }
    
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.verSaldo = function() {
    console.log(`Ag/C: ${this.agencia}/${this.conta} | R$${this.saldo.toFixed(2)}`)
}


function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}

ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > this.saldo + this.limite) {
        console.log(`Saldo insuficiente! Seu saldo atual é R$${this.saldo.toFixed(2)}`)
        return
    }
    
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupanca(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo)
}

ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const cc = new ContaCorrente(11, 35, 100, 50)
const cp = new ContaPoupanca(15, 23, 200)

// daqui para baixo são apenas testes para testar as funções
cc.sacar(120)
cc.sacar(25)
cc.sacar(10)
console.log(cc)

console.log()

cp.sacar(250)
console.log(cp)