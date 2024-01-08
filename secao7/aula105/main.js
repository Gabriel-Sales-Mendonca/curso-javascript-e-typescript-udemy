class ControleRemoto {
    constructor() {
        this.volume = 0
    }

    aumentarVolume() {
        this.volume++
    }

    diminuirVolume() {
        this.volume--
    }

    static desligar() { // método estático, os obbjetos instânciados não tem acesso a esse método, somente a classe tem acesso
        console.log('desligando todos os controles instânciados.')
    }
}

const controle1 = new ControleRemoto()
controle1.aumentarVolume()
console.log(controle1)
controle1.desligar()