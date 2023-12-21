function criaCalculadora() {
    return {
        display: document.querySelector('.display'),

        iniciar() {
            this.cliqueBotoes();
            this.pressionaEnter();
            this.pressionaEsc();
        },

        pressionaEnter() {
            this.display.addEventListener('keyup', function(e) {
                if (e.keyCode === 13) {
                    this.calcula()
                }
            }.bind(this))
        },

        pressionaEsc() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 27) {
                    this.limpaDisplay()
                }
            })
        },

        cliqueBotoes() {
            document.addEventListener('click', function(e) {
                const elemento = e.target;
                const valor = elemento.innerText;
        
                if (elemento.classList.contains('btn-num') || elemento.classList.contains('btn-op')) {
                    this.btnParaDisplay(valor);
                } else if (elemento.classList.contains('btn-clear')) {
                    this.limpaDisplay();
                } else if (elemento.classList.contains('btn-del')) {
                    this.apagaCaracter();
                } else if (elemento.classList.contains('btn-eq')) {
                    this.calcula();
                }

            }.bind(this));
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },

        limpaDisplay() {
            this.display.value = ''
        },

        apagaCaracter() {
            this.display.value = this.display.value.slice(0, -1)
        },

        calcula() {
            const resultado = eval(this.display.value)
            this.display.value = resultado
        }
    }
}

const calculadora = criaCalculadora()
calculadora.iniciar()