import ValidarCpf from './ValidarCpf'

export default class GeraCpf {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }

    geraDigito() {
        const cpfParcial = this.rand()
        const digito1 = ValidarCpf.criaDigito(cpfParcial)
        const digito2 = ValidarCpf.criaDigito(cpfParcial + digito1)
        return cpfParcial.slice(0, 3) + '.' + cpfParcial.slice(3, 6) + '.' + cpfParcial.slice(6, 9) + '-' + digito1 + digito2
    }
}