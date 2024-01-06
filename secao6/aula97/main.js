function ValidaCpf(cpf) {
    Object.defineProperty(this, 'cpfLimpo', { // deixando somente numeros no cpf
        get: function() {
            return cpf.replace(/\D+/g, '')
        }
    })
}

ValidaCpf.prototype.valida = function() { // verifica se o cpf foi informado e se o comprimento é 11
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.length !== 11) return false
    if(this.eSequencia()) return false

    let cpfParcial = this.cpfLimpo.slice(0, 9)
    const digito1 = this.criaDigito(cpfParcial)

    cpfParcial += digito1 // adicionando o primeiro digito no cpf parcial que estava com os 9 primeiros numeros do cpf

    const digito2 = this.criaDigito(cpfParcial)

    cpfGerado = cpfParcial + digito2 // gerando o cpf baseado nos 9 primeiros digitos

    if(cpfGerado !== this.cpfLimpo) return false
    
    return true
}

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    let regressor = cpfParcial.length + 1
    const cpfArray = Array.from(cpfParcial)
    
    const total = cpfArray.reduce(function(acumulador, valor) {
        acumulador += regressor * valor
        regressor--
        return acumulador
    }, 0)

    const digito = 11 - (total % 11)
    
    if(digito > 9) return '0'
    else return String(digito)
}

ValidaCpf.prototype.eSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length)

    if(sequencia === this.cpfLimpo) return true
    else return false
}

const cpf = new ValidaCpf('705.484.450-52')

const statusCpf = cpf.valida()

if(statusCpf) {
    console.log('Cpf válido')
} else {
    console.log('Cpf inválido')
}
