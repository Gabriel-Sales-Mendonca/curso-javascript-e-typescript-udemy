primeira()

function primeira() { //forma mais comum de declaração de função
    console.log('primeira função')
}


const segunda = function() { //forma de declaração através de uma variável
    console.log('segunda função')
}

segunda()

const obj = { // forma de declação através de um atributo de um objeto
    terceira: function(){
        console.log('tereceira função')
    }
}

obj.terceira()

const quarta = () => { //forma de declação através de uma arrow function
    console.log('quarta função')
}

quarta()
